"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/elements/Form/progress";
import { Button } from "@/components/elements/Form/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { UtilsContext } from "@/contexts/UtilsContext";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import SubmitSlide from "./slides/SubmitSlide";
import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import { FileLimitModal } from "@/components/elements/FileLimitModal";

const STORAGE_KEY = "180DC-CC-Registration";

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
  cvLink?: string;
  followLink?: string;
  twibbonLink?: string;
  buktiPembayaranFile?: File;
  rekening?: string;
  paymentType?: "national" | "international";
  regType?: "individual" | "team";
  role?: "leader" | "member";
  registrationPhase?: string;
}

export default function FormCC() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({});
  const [slideHistory, setSlideHistory] = useState([1]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTotalSizeModalOpen, setIsTotalSizeModalOpen] = useState(false);
  const { toastNotify } = useContext(UtilsContext);

  const totalSlides = 4;

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
          setCurrentSlide(5);
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
    const { buktiPembayaranFile, ...serializableData } = formData;
    const progressData = {
      formData: serializableData,
      currentSlide,
      slideHistory,
      isSubmitted,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
  }, [formData, currentSlide, slideHistory, isSubmitted]);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = (nextSlide?: number, latestData?: Partial<RegistrationFormData>) => {
    // Sync the local state with any data passed from the current slide
    if (latestData) {
      setFormData((prev) => {
        const updated = { ...prev, ...latestData };
        
        let targetSlide = nextSlide || currentSlide + 1;
        const currentRegType = updated.regType || "team";

        // Skip member info slides if individual registration
        if (currentSlide === 1 && currentRegType === "individual") {
          targetSlide = 3; // Jump to Attachments (Slide 4)
        }

        setSlideHistory((h) => [...h, targetSlide]);
        setCurrentSlide(targetSlide);
        
        return updated;
      });
    } else {
      let targetSlide = nextSlide || currentSlide + 1;
      const currentRegType = formData.regType || "team";

      if (currentSlide === 1 && currentRegType === "individual") {
        targetSlide = 3;
      }

      setSlideHistory((prev) => [...prev, targetSlide]);
      setCurrentSlide(targetSlide);
    }
  };

  const handlePrevious = () => {
    if (isSubmitted && currentSlide === 5) {
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
    if (currentSlide === 5) return 100;
    const activeIndex = slideHistory.length;
    return (activeIndex / totalSlides) * 100;
  };

  const handleSubmit = async (latestData?: Partial<RegistrationFormData>) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const merged = { ...formData, ...latestData };

    // Guard: reject if total upload size exceeds 4MB
    const allFiles = [
      merged.buktiPembayaranFile,
    ].filter(Boolean) as File[];
    const totalBytes = allFiles.reduce((sum, f) => sum + f.size, 0);
    const LIMIT = 4 * 1024 * 1024; // 4 MB
    if (totalBytes > LIMIT) {
      setIsTotalSizeModalOpen(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const submitFormData = new FormData();

      const leaderPayload = {
        regType: merged.regType || "team",
        role: merged.role || "leader",
        namaTim: merged.namaTim || "",
        teamSize: merged.teamSize || "3",
        source: merged.source || "",
        namaLengkap: merged.leaderNamaLengkap || "",
        asalSekolah: merged.leaderAsalSekolah || "",
        batch: merged.leaderBatch || "",
        email: merged.leaderEmail || "",
        nomorHP: merged.leaderNomorHP || "",
        universitas: merged.leaderAsalSekolah || "",
        prodi: "-",
      };

      const membersPayload = [];
      if (merged.member1NamaLengkap) {
        membersPayload.push({
          namaLengkap: merged.member1NamaLengkap,
          asalSekolah: merged.member1AsalSekolah,
          batch: merged.member1Batch,
          email: merged.member1Email,
          nomorHP: merged.member1NomorHP,
          universitas: merged.member1AsalSekolah,
          prodi: "-",
        });
      }
      if (merged.teamSize === "3" && merged.member2NamaLengkap) {
        membersPayload.push({
          namaLengkap: merged.member2NamaLengkap,
          asalSekolah: merged.member2AsalSekolah,
          batch: merged.member2Batch,
          email: merged.member2Email,
          nomorHP: merged.member2NomorHP,
          universitas: merged.member2AsalSekolah,
          prodi: "-",
        });
      }

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
      submitFormData.append("payment", merged.paymentType || "national");
      submitFormData.append("competition", "180DC Case Competition");
      submitFormData.append("rekening", merged.rekening || "");
      submitFormData.append("registrationPhase", (merged as any).registrationPhase || "normal");

      if (merged.idCardLink) submitFormData.append("idCard", merged.idCardLink);
      if (merged.cvLink) submitFormData.append("cv", merged.cvLink);
      if (merged.followLink) submitFormData.append("follow", merged.followLink);
      if (merged.twibbonLink) submitFormData.append("twibbon", merged.twibbonLink);
      if (merged.buktiPembayaranFile)
        submitFormData.append("buktiPembayaran", merged.buktiPembayaranFile);

      const response = await fetch("/api/casecomp/register", {
        method: "POST",
        body: submitFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form via API");
      }

      setIsSubmitted(true);
      setCurrentSlide(5); // Success Slide
      localStorage.removeItem(STORAGE_KEY);
      toastNotify("Registration Successful! 🎉", "success");
    } catch (error) {
      console.error("Error submitting form:", error);
      toastNotify(error.message || "Failed to submit form. Please try again.", "error");
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
        return (
          <div className="space-y-8">
            <Slide2 {...slideProps} onNext={() => {}} showButtons={false} />
            {formData.teamSize === "3" && (
              <Slide3 {...slideProps} onNext={() => {}} showButtons={false} />
            )}
            <div className="flex justify-end pt-4">
              <Button
                onClick={() => handleNext(3)}
                className="font-avenir-regular flex items-center gap-2 bg-green-300 text-white transition-all duration-200 hover:scale-105 hover:bg-green-300/90"
              >
                Continue to Attachments
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        );
      case 3:
        return <Slide4 {...slideProps} />;
      case 4:
        return <Slide5 {...slideProps} />;
      case 5:
        return <SubmitSlide formData={formData} />;
      default:
        return <Slide1 {...slideProps} />;
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-black to-green-300/90 p-4">
      <FileLimitModal
        isOpen={isTotalSizeModalOpen}
        onClose={() => setIsTotalSizeModalOpen(false)}
        message="Your combined uploads exceed the 4MB limit. Please compress your images or use smaller files before submitting."
      />
      <div className="w-full max-w-4xl py-20">
        <div className="rounded-lg border-0 bg-white/90 p-6 shadow-2xl backdrop-blur-xs">
          <div className="pb-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-medium text-gray-600">
                {currentSlide === 5
                  ? "Registration Successful"
                  : `Step ${slideHistory.length} of ${formData.regType === "individual" ? 3 : (formData.teamSize === "2" ? 4 : 5)}`}
              </div>
            </div>
            <Progress value={getProgressPercentage()} className="h-2 w-full bg-gray-200" />
          </div>
          <div className="pb-8">
            <div className="flex min-h-[400px] flex-col">
              <div className="mb-6 flex-1">{renderSlide()}</div>
              {currentSlide < 5 && (
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

        {/* Contact Person Section */}
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <p className="font-avenir-heavy my-3 text-sm text-white">
            If there is any problem, kindly chat:
          </p>
          <div className="flex flex-col gap-2 md:flex-row">
            <Button180
              color="green"
              text="Naifa (+62 811-6824-001)"
              href="https://wa.me/628116824001"
              size="md"
              className="font-avenir-heavy rounded-full px-8 text-white transition-colors hover:bg-green-300 hover:text-white"
            />
            <Button180
              color="green"
              text="Sharon (+62 819-3443-3146)"
              href="https://wa.me/6281934433146"
              size="md"
              className="font-avenir-heavy rounded-full px-8 text-white transition-colors hover:bg-green-300 hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
