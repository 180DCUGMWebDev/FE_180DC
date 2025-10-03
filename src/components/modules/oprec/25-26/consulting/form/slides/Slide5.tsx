import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
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
        <h2 className="mb-1 mt-2 font-avenir-black text-2xl leading-snug text-primary lg:text-3xl">
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
        <h3 className="mb-6 flex items-center gap-2 font-avenir-black text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">5</span>
          </div>
          Register for Consulting Day
        </h3>

        <div className="space-y-6">
          {/* Event Information */}
          <div>
            <Label className="mb-2 block font-avenir-regular text-sm font-medium text-gray-700">
              Consulting Day Information
            </Label>
            <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h4 className="mb-2 font-lato-bold text-primary">
                🧑🏻‍💻 Consulting Day - Unlocking Potential: Your Journey into Consulting
              </h4>
              <p className="mb-3 font-lato-regular text-sm text-gray-700">
                Curious about the consulting world? Don&quot;t miss your chance to step inside the
                world of consulting at Consulting Day! Learn directly from top consultants at
                leading firms.
              </p>

              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <span className="font-lato-bold">🎙 Main Room Speaker:</span>
                  <br />• Achmad Fauzon - Senior Associate at KPMG
                </div>

                <div>
                  <span className="font-lato-bold">🎙 Breakout Room Speakers:</span>
                  <br />
                  • James Pratama - Go-To-Market Strategy Manager at MarkPlus
                  <br />• Nicholas Wijaya - Consultant at Monitor Deloitte
                </div>

                <div>
                  <span className="font-lato-bold">📅 Date:</span> Sunday, August 17, 2025
                  <br />
                  <span className="font-lato-bold">🕖 Time:</span> 10.00 - 12.45 WIB
                  <br />
                  <span className="font-lato-bold">📍 Platform:</span> ZOOM Meeting
                </div>

                <div className="mt-3 rounded-md bg-primary/10 p-3">
                  <span className="font-lato-bold text-primary">VIP Packages Available:</span>
                  <br />
                  💸 VIP 1: CV Review & Casebook Bundle (IDR 50K)
                  <br />
                  💸 VIP 2: Mock Case Interview & Casebook Bundle (IDR 80K)
                  <br />
                  💸 VVIP: CV Review, Mock Case Interview & Casebook Bundle (IDR 100K)
                </div>

                <div className="mt-3">
                  <span className="font-lato-bold">📝 Registration:</span>{" "}
                  <Link
                    href="https://bit.ly/ConsultingDayRegistration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline hover:text-primary"
                  >
                    https://bit.ly/ConsultingDayRegistration
                  </Link>
                </div>

                <div>
                  <span className="font-lato-bold">📞 Contact:</span>
                  <br />
                  • Jovita: +62 813-2778-2367
                  <br />• Qina: +62 812-3003-4275
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label className="mb-2 block font-avenir-regular text-sm font-medium text-gray-700">
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
              className="mb-2 block font-avenir-regular text-sm font-medium text-gray-700"
            >
              Upload proof of your registration! *
            </Label>
            <p className="mb-3 font-lato-regular text-sm text-gray-500">
              Please upload a screenshot or proof of your Consulting Day registration to Google
              Drive, ensure the access settings are set to{" "}
              <span className="font-lato-bold text-black">
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
              className={`border-gray-300 font-lato-regular transition-all duration-200 focus:ring-2 focus:ring-primary/50 ${
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
          className="flex items-center gap-2 bg-primary font-avenir-regular text-white transition-all duration-200 hover:scale-105 hover:bg-primary/90 disabled:text-black disabled:opacity-50 disabled:hover:scale-100"
        >
          Review Submission
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide5;
