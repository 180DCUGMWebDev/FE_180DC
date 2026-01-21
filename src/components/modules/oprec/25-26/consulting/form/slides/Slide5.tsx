import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/elements/Form/checkbox";
import Image from "next/image";
import Link from "next/link";

const Slide5 = ({ formData, updateFormData, onNext }) => {
  const [registrationProofLink, setRegistrationProofLink] = useState(
    formData.registrationProofLink || ""
  );
  const [consentConsultingAgreed, setConsentConsultingAgreed] = useState(
    formData.consentConsultingAgreed || false
  );

  const handleNext = () => {
    updateFormData({
      registrationProofLink,
      consentConsultingAgreed,
    });
    onNext();
  };

  const isValid =
    registrationProofLink.trim() &&
    registrationProofLink.includes("drive.google.com") &&
    consentConsultingAgreed;

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Consulting Day
        </h2>
        <p className="font-lato-regular text-gray-600">
          Registering for Consulting Day is a mandatory step in the application process. Only
          applicants who have completed their registration and successfully participate will be
          eligible to proceed to the next stages of selection.{" "}
        </p>
      </div>

      {/* Document Uploads */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">5</span>
          </div>
          Register for Consulting Day
        </h3>

        <div className="space-y-6">
          {/* Event Information */}
          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Consulting Day Information
            </Label>
            <div className="mb-4 rounded-lg border border-green-300/20 bg-green-300/5 p-4">
              <h4 className="font-lato-bold mb-2 text-green-300">
                🚀 180DC UGM Consulting Day 2026 - Step In, Level Up: Crafting the Consultants of
                Tomorrow 🧑🏻‍💻
              </h4>
              <p className="font-lato-regular mb-3 text-sm text-gray-700">
                Curious about what it&apos;s really like to work in consulting? Join Consulting Day
                2026, a{" "}
                <span className="font-lato-bold text-green-300">
                  FREE webinar & sharing session
                </span>{" "}
                where you&apos;ll gain real insights into the consulting world directly from
                professionals at top consulting firms.
              </p>

              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <span className="font-lato-bold">🎙️ Main Room Speaker:</span>
                  <br />• Dennis Lim — Corporate Finance Associate, KPMG Indonesia
                </div>

                <div>
                  <span className="font-lato-bold">🎙️ Breakout Room Speakers:</span>
                  <br />
                  • Finance Consulting: Adrian Siregar — ex-Big 4 Assistant Manager (Financial
                  Services Management Consulting)
                  <br />• Strategy Consulting: Christian Goldberg — Strategy & Transaction
                  Consultant, Deloitte
                  <br />• Marketing Consulting: Randi Saputra — Marketing Consultant, Grab-OVO
                </div>

                <div>
                  <span className="font-lato-bold">📅 Date:</span> Saturday, 24 January 2026
                  <br />
                  <span className="font-lato-bold">🕘 Time:</span> 09.45 – 12.45 WIB
                  <br />
                  <span className="font-lato-bold">📍 Platform:</span> Zoom Meeting
                  <br />
                  <span className="font-lato-bold">🎟️ Registration:</span>{" "}
                  <span className="font-lato-bold text-green-300">FREE!</span>
                </div>

                <div className="mt-3 rounded-md bg-green-300/10 p-3">
                  <span className="font-lato-bold text-green-300">
                    For those who want to level up even more 😆, we also offer exclusive bundles:
                  </span>
                  <br />
                  💸 VIP 1 — Framework Bank / Casebook Bank (IDR 50K)
                  <br />
                  💸 VIP 2 — CV Review + Framework Bank / Casebook Bank (IDR 80K)
                  <br />
                  💸 VVIP — CV Review, Mock Case Interview & Framework Bank / Casebook Bank (IDR
                  100K)
                </div>

                <div className="mt-3">
                  <span className="font-lato-bold">🔗 Register now:</span>{" "}
                  <Link
                    href="https://180dcugm.com/consultingday2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-300 underline hover:text-green-300"
                  >
                    180dcugm.com/consultingday2026
                  </Link>
                </div>

                <div>
                  <span className="font-lato-bold">📩 For more information:</span>
                  <br />• Valen: +62 812-2951-4748
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Event Details
            </Label>
            <Image
              src="/img/oprec/consulting-day.webp"
              alt="Consulting Day Event Details"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-md"
              loading="lazy"
            />
          </div>

          {/* Registration Proof Upload */}
          <div>
            <Label
              htmlFor="registrationProofLink"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Upload proof of your registration! *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Please upload a screenshot or proof of your Consulting Day registration to Google
              Drive, ensure the access settings are set to{" "}
              <span className="font-lato-bold text-black-300">
                &quot;Anyone with the link can view,&quot;
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              id="registrationProofLink"
              type="url"
              value={registrationProofLink}
              onChange={(e) => setRegistrationProofLink(e.target.value)}
              placeholder="https://drive.google.com/your-registration-proof"
              className={`font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50 ${
                registrationProofLink && !registrationProofLink.includes("drive.google.com")
                  ? "border-red-300 focus:ring-red-200"
                  : ""
              }`}
            />
            {registrationProofLink && !registrationProofLink.includes("drive.google.com") && (
              <p className="mt-1 text-sm text-red-600">Please use a Google Drive link</p>
            )}
          </div>
        </div>

        {/* Consent Agreement */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={consentConsultingAgreed}
              onCheckedChange={setConsentConsultingAgreed}
              className="mt-1 text-white"
            />
            <Label htmlFor="consent" className="font-lato-regular leading-relaxed text-gray-600">
              I acknowledge that attending Consulting Day is one of the prerequisites of my
              application as Consulting Analyst and that failure to participate in the event may
              result in my disqualification from the recruitment process.
            </Label>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          className="font-avenir-regular disabled:text-black-300 flex items-center gap-2 bg-green-300 text-white transition-all duration-200 hover:scale-105 hover:bg-green-300/90 disabled:opacity-50 disabled:hover:scale-100"
        >
          Review Submission
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide5;
