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
import Button180 from "@/components/elements/Button180";

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
  idCardFile?: File;
  followFile?: File;
  mentionFile?: File;
  repostFile?: File;
  twibbonFile?: File;
  buktiPembayaranFile?: File;
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

  // Save progress to localStorage whenever state changes (exclude File objects as they are not serializable)
  useEffect(() => {
    const {
      idCardFile,
      followFile,
      mentionFile,
      repostFile,
      twibbonFile,
      buktiPembayaranFile,
      ...serializableData
    } = formData;
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

  const handleSubmit = async (latestData?: Partial<RegistrationFormData>) => {
    setIsSubmitting(true);

    // Merge any latest data (from Slide5) to avoid stale closure
    const merged = { ...formData, ...latestData };

    try {
      const submitFormData = new FormData();

      // Format payloads matching Oprec / CaseComp backend expectations
      const leaderPayload = {
        namaTim: merged.namaTim || "",
        teamSize: merged.teamSize || "3",
        source: merged.source || "",
        namaLengkap: merged.leaderNamaLengkap || "",
        asalSekolah: merged.leaderAsalSekolah || "",
        batch: merged.leaderBatch || "",
        email: merged.leaderEmail || "",
        nomorHP: merged.leaderNomorHP || "",
        // Mappings for old backend compatibility
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
      submitFormData.append("rekening", merged.rekening || "");

      // Append actual file objects for upload to Google Drive
      if (merged.idCardFile) submitFormData.append("idCard", merged.idCardFile);
      if (merged.followFile) submitFormData.append("follow", merged.followFile);
      if (merged.mentionFile) submitFormData.append("mention", merged.mentionFile);
      if (merged.repostFile) submitFormData.append("repost", merged.repostFile);
      if (merged.twibbonFile) submitFormData.append("twibbon", merged.twibbonFile);
      if (merged.buktiPembayaranFile)
        submitFormData.append("buktiPembayaran", merged.buktiPembayaranFile);

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
    <section className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-black to-green-300/90 p-4">
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

        {/* Contact Person Section */}
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <p className="font-avenir-heavy my-3 text-sm text-white">
            If there is any problem, kindly chat:
          </p>
          <div className="flex flex-col gap-2 md:flex-row">
            <Button180
              color="green"
              text="Joylin (+62 817-0005-889)"
              href="https://wa.me/628170005889"
              size="md"
              className="font-avenir-heavy rounded-full px-8 text-white transition-colors hover:bg-green-300 hover:text-white"
            />
            <Button180
              color="green"
              text="Anindya (+62 812-5734-0001)"
              href="https://wa.me/6281257340001"
              size="md"
              className="font-avenir-heavy rounded-full px-8 text-white transition-colors hover:bg-green-300 hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
