"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/elements/Form/progress";
import { Button } from "@/components/elements/Form/button";
import { ChevronLeft } from "lucide-react";
import { useContext } from "react";
import { UtilsContext } from "@/contexts/UtilsContext";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import SubmitSlide from "./slides/SubmitSlide";
import Image from "next/image";

const STORAGE_KEY = "180DC-VCC-Registration";

interface RegistrationFormData {
  namaTim?: string;
  teamSize?: string;
  source?: string;
  leaderNamaLengkap?: string;
  leaderAsalSekolah?: string;
  leaderBatch?: string;
  leaderEmail?: string;
  leaderNomorHP?: string;
  member1NamaLengkap?: string;
  member1AsalSekolah?: string;
  member1Batch?: string;
  member1Email?: string;
  member1NomorHP?: string;
  member2NamaLengkap?: string;
  member2AsalSekolah?: string;
  member2Batch?: string;
  member2Email?: string;
  member2NomorHP?: string;
  idCardLink?: string;
  followLink?: string;
  mentionLink?: string;
  repostLink?: string;
  twibbonLink?: string;
  buktiPembayaranLink?: string;
  rekening?: string;
}

export default function Form() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({});
  const [slideHistory, setSlideHistory] = useState([1]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toastNotify } = useContext(UtilsContext);

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

        if (savedIsSubmitted) {
          setIsSubmitted(true);
          setCurrentSlide(6);
        } else {
          setCurrentSlide(savedSlide || 1);
        }
      } catch (error) {
        console.error("Error loading saved progress:", error);
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
      isSubmitted,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
  }, [formData, currentSlide, slideHistory, isSubmitted]);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = (nextSlide) => {
    // Skip Member 2 (Slide 3) if Team Size is 2
    if (formData.teamSize === "2" && currentSlide === 2) {
      nextSlide = 4;
    }
    const targetSlide = nextSlide || currentSlide + 1;
    setSlideHistory((prev) => [...prev, targetSlide]);
    setCurrentSlide(targetSlide);
  };

  const handlePrevious = () => {
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
    // Calculate the real active slide index based on conditional Slide
    const activeLength = formData.teamSize === "2" ? totalSlides - 1 : totalSlides;
    const activeIndex = slideHistory.length;
    return (activeIndex / activeLength) * 100;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const submitFormData = new FormData();

      // Format payloads matching Oprec / CaseComp backend expectations
      const leaderPayload = {
        namaTim: formData.namaTim || "",
        teamSize: formData.teamSize || "3",
        source: formData.source || "",
        namaLengkap: formData.leaderNamaLengkap || "",
        asalSekolah: formData.leaderAsalSekolah || "",
        batch: formData.leaderBatch || "",
        email: formData.leaderEmail || "",
        nomorHP: formData.leaderNomorHP || "",
        // Mappings for old backend compatibility
        universitas: formData.leaderAsalSekolah || "",
        prodi: "-",
      };

      const membersPayload = [];
      if (formData.member1NamaLengkap) {
        membersPayload.push({
          namaLengkap: formData.member1NamaLengkap,
          asalSekolah: formData.member1AsalSekolah,
          batch: formData.member1Batch,
          email: formData.member1Email,
          nomorHP: formData.member1NomorHP,
          universitas: formData.member1AsalSekolah,
          prodi: "-",
        });
      }
      if (formData.teamSize === "3" && formData.member2NamaLengkap) {
        membersPayload.push({
          namaLengkap: formData.member2NamaLengkap,
          asalSekolah: formData.member2AsalSekolah,
          batch: formData.member2Batch,
          email: formData.member2Email,
          nomorHP: formData.member2NomorHP,
          universitas: formData.member2AsalSekolah,
          prodi: "-",
        });
      }

      // Pad missing members if API strict requirement 2 members minimum (based on earlier implementation)
      while (membersPayload.length < 2) {
        membersPayload.push({
          namaLengkap: "-",
          universitas: "-",
          prodi: "-",
          batch: "-",
          email: "placeholder@email.com",
          nomorHP: "+62800000000",
        });
      }

      submitFormData.append("teamLeader", JSON.stringify(leaderPayload));
      submitFormData.append("teamMembers", JSON.stringify(membersPayload));
      submitFormData.append("payment", "national"); // Standard fixed payment
      submitFormData.append("competition", "180DC BCC");
      submitFormData.append("rekening", formData.rekening || "");

      // Append files as link strings, mapping them back to the expected API param names if backend relies on them
      if (formData.idCardLink) submitFormData.append("idCard", formData.idCardLink);
      if (formData.followLink) submitFormData.append("follow", formData.followLink);
      if (formData.mentionLink) submitFormData.append("mention", formData.mentionLink);
      if (formData.repostLink) submitFormData.append("repost", formData.repostLink);
      if (formData.twibbonLink) submitFormData.append("twibbon", formData.twibbonLink);
      if (formData.buktiPembayaranLink)
        submitFormData.append("buktiPembayaran", formData.buktiPembayaranLink);

      const response = await fetch("/api/videocasecomp/register", {
        method: "POST",
        body: submitFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form via API");
      }

      const result = await response.json();

      setIsSubmitted(true);
      setCurrentSlide(6); // Success Slide
      localStorage.removeItem(STORAGE_KEY); // Clear only upon successful execution
      toastNotify("success", "Registration Successful!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toastNotify("error", error.message || "Failed to submit form. Please try again.");
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
        return <Slide5 {...slideProps} />;
      case 6:
        return <SubmitSlide />;
      default:
        return <Slide1 {...slideProps} />;
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-b from-black to-green-300/90 p-4">
      <div className="w-full max-w-4xl py-20">
        <div className="rounded-lg border-0 bg-white/90 p-6 shadow-2xl backdrop-blur-xs">
          <div className="pb-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-medium text-gray-600">
                {currentSlide === 5
                  ? "Review & Payment"
                  : currentSlide === 6
                    ? "Complete"
                    : `Step ${slideHistory.length} of ${formData.teamSize === "2" ? 4 : 5}`}
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
                    className="font-avenir-regular flex items-center gap-2 bg-transparent text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <div className="flex gap-2">
                    {Array.from({ length: formData.teamSize === "2" ? 4 : 5 }, (_, i) => (
                      <div
                        key={i + 1}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          i + 1 === slideHistory.length
                            ? "bg-green-500"
                            : i + 1 < slideHistory.length
                              ? "bg-green-300/50"
                              : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {/* The Next button is explicitly rendered inside the Slides themselves to allow for Form validation matching the Oprec style */}
                  <div className="w-24" /> {/* Spacer for alignment */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
