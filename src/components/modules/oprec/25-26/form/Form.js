"use client";

import { useState } from "react";
import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import SubmitSlide from "./slides/SubmitSlide";

export default function Form() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [formData, setFormData] = useState({});
  const [slideHistory, setSlideHistory] = useState([1]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSlides = 4;

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = (nextSlide) => {
    const targetSlide = nextSlide || currentSlide + 1;
    setSlideHistory((prev) => [...prev, targetSlide]);
    setCurrentSlide(targetSlide);
  };

  const handlePrevious = () => {
    if (slideHistory.length > 1) {
      const newHistory = [...slideHistory];
      newHistory.pop(); // Remove current slide
      const previousSlide = newHistory[newHistory.length - 1];
      setSlideHistory(newHistory);
      setCurrentSlide(previousSlide);
    }
  };

  const getProgressPercentage = () => {
    if (currentSlide === 5) return 100;
    return (currentSlide / totalSlides) * 100;
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    setIsSubmitted(true);
    setCurrentSlide(5); // Submit slide
  };

  const renderSlide = () => {
    const slideProps = {
      formData,
      updateFormData,
      onNext: handleNext,
      onPrevious: handlePrevious,
      onSubmit: handleSubmit,
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
                {currentSlide === 5 ? "Complete" : `Step ${currentSlide} of ${totalSlides}`}
              </div>
            </div>
            <Progress value={getProgressPercentage()} className="h-2 w-full bg-gray-200" />
          </div>

          <div className="pb-8">
            <div className="flex min-h-[400px] flex-col">
              <div className="mb-6 flex-1">{renderSlide()}</div>

              {currentSlide !== 5 && (
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={slideHistory.length <= 1}
                    className="flex items-center gap-2 transition-colors hover:bg-gray-50"
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
