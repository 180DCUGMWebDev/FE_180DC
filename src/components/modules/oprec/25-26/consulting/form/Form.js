"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import SubmitSlide from "./slides/SubmitSlide";

const STORAGE_KEY = "multi-slide-form-progress";

export default function Form() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [formData, setFormData] = useState({});
  const [slideHistory, setSlideHistory] = useState([1]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSlides = 5;

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const {
          formData: savedFormData,
          currentSlide: savedSlide,
          slideHistory: savedHistory,
          isSubmitted: savedIsSubmitted,
        } = JSON.parse(savedProgress);

        setFormData(savedFormData || {});
        setSlideHistory(savedHistory || [1]);

        // If user has already submitted, always direct to submit slide
        if (savedIsSubmitted) {
          setIsSubmitted(true);
          setCurrentSlide(6);
        } else {
          setCurrentSlide(savedSlide || 1);
        }
      } catch (error) {
        console.error("Error loading saved progress:", error);
        // If there's an error, clear the corrupted data
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    const progressData = {
      formData,
      currentSlide,
      slideHistory,
      isSubmitted, // Include submission status
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
  }, [formData, currentSlide, slideHistory, isSubmitted]);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = (nextSlide) => {
    const targetSlide = nextSlide || currentSlide + 1;
    setSlideHistory((prev) => [...prev, targetSlide]);
    setCurrentSlide(targetSlide);
  };

  const handlePrevious = () => {
    // If user has submitted, don't allow navigation away from success slide
    if (isSubmitted && currentSlide === 6) {
      return;
    }

    if (slideHistory.length > 1) {
      const newHistory = [...slideHistory];
      newHistory.pop();
      const previousSlide = newHistory[newHistory.length - 1];
      setSlideHistory(newHistory);
      setCurrentSlide(previousSlide);
    }
  };

  const getProgressPercentage = () => {
    if (currentSlide === 6) return 100;
    return (currentSlide / totalSlides) * 100;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Convert the formData object to FormData
      const submitFormData = new FormData();

      // Add all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          submitFormData.append(key, value);
        }
      });

      const response = await fetch("/api/oprec/25-26/submit", {
        method: "POST",
        body: submitFormData, // Send as FormData, not JSON
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form via API");
      }

      // Success - navigate to success page
      console.log("Form submitted successfully via API:", result.message);
      setIsSubmitted(true);
      setCurrentSlide(6);
      // Keep localStorage data - don't clear it

      toast("Success!", {
        description: result.message || "Your application has been submitted successfully.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast("Error", {
        description: error.message || "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSlide = () => {
    const slideProps = {
      formData,
      updateFormData,
      onNext: handleNext,
      onPrevious: handlePrevious,
      onSubmit: handleSubmit,
      isSubmitting,
    };

    switch (currentSlide) {
      case 1:
        return <Slide1 {...slideProps} />;
      case 2:
        return <Slide2 {...slideProps} />;
      case 3:
        return <Slide3 {...slideProps} />;
      case 4:
        return <Slide4 {...slideProps} />;
      case 5:
        return <Slide5 {...slideProps} onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      case 6:
        return <SubmitSlide formData={formData} onBack={handlePrevious} />;
      default:
        return <Slide1 {...slideProps} />;
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black to-primary/90 p-4">
      <div className="w-full max-w-4xl py-20">
        <div className="rounded-lg border-0 bg-white/90 p-6 shadow-2xl backdrop-blur-sm">
          <div className="pb-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-medium text-gray-600">
                {currentSlide === 5
                  ? "Review"
                  : currentSlide === 6
                    ? "Complete"
                    : `Step ${currentSlide} of ${totalSlides}`}
              </div>
            </div>
            <Progress value={getProgressPercentage()} className="h-2 w-full bg-gray-200" />
          </div>
          <div className="pb-8">
            <div className="flex min-h-[400px] flex-col">
              <div className="mb-6 flex-1">{renderSlide()}</div>
              {currentSlide !== 6 && (
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={slideHistory.length <= 1}
                    className="flex items-center gap-2 bg-transparent transition-colors hover:bg-gray-50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <div className="flex gap-2">
                    {Array.from({ length: totalSlides }, (_, i) => (
                      <div
                        key={i + 1}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          i + 1 === currentSlide
                            ? "bg-primary"
                            : i + 1 < currentSlide || slideHistory.includes(i + 1)
                              ? "bg-primary/50"
                              : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="w-20" /> {/* Spacer for alignment */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
