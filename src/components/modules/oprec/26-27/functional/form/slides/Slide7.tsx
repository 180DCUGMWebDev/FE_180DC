import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/elements/Form/checkbox";
import Link from "next/link";

// Swap this for the Payload media URL once the poster is uploaded there.
const UNLOCKED_POSTER = "/img/oprec/180unlocked.webp";

const Slide7 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [unlockedProofLink, setUnlockedProofLink] = useState(formData.unlockedProofLink || "");
  const [unlockedAcknowledged, setUnlockedAcknowledged] = useState(
    formData.unlockedAcknowledged || false
  );

  const handleNext = () => {
    updateFormData({
      unlockedProofLink,
      unlockedAcknowledged,
    });
    onNext();
  };

  // The proof link is deliberately optional: attending is encouraged, not
  // mandatory, so requiring it would block applicants who cannot make the date.
  const isValid = unlockedAcknowledged;

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Register for 180UNLOCKED
        </h2>
        <p className="font-lato-regular text-gray-600">
          Registering for 180UNLOCKED is highly encouraged and will be viewed positively in your
          application.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-1 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">6</span>
          </div>
          180UNLOCKED
        </h3>

        <div className="space-y-6">
          {/* Event Details */}
          <div>
            <p className="font-avenir-black text-black-300 mb-1">
              180UNLOCKED: Consulting and Your First Step For It!
            </p>
            <p className="font-lato-regular text-sm text-gray-600">
              🔓 <strong>UNLOCK WHAT&apos;S NEXT!</strong> 🔓
              <br />
              <br />
              Curious about joining a community where you can learn, grow, and thrive? Did you know
              that 180 Degrees Consulting UGM is opening its{" "}
              <strong>New Member Recruitment</strong>… soon! 🤫
              <br />
              <br />
              1️⃣ Through <strong>180UNLOCKED</strong>, get a sneak peek into 180DC UGM and hear
              inspiring alumni stories:
              <br />
              1. <strong>How to Build a Competitive Profile</strong>, with Kak Schalke Anindya,
              Indonesia&apos;s Most Outstanding Student 2023 (Ex-President 180DC UGM)
              <br />
              2. <strong>From 180DC to Consulting</strong>, with Kak Radiansyah, Intern VE at PwC
              South East Asia Consulting (Ex-VP 180DC UGM)
              <br />
              <br />
              2️⃣ Explore divisions that match your potential through our{" "}
              <strong>Open House</strong> — from Consulting, Strategy &amp; Growth, Finance, Client
              Engagement, HR, Marketing-IT, Legal, to Knowledge Team.
              <br />
              <br />
              <strong>SAVE THE DATE</strong>
              <br />
              📅 7 August 2026
              <br />
              🕒 17.45–20.40 WIB
              <br />
              📍 Zoom Meeting (TBA)
              <br />
              <br />
              <strong>REGISTER NOW</strong>
              <br />
              🔗{" "}
              <Link
                href="https://180dcugm.com/180UNLOCKEDRegistration"
                className="text-cyan-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                180dcugm.com/180UNLOCKEDRegistration
              </Link>
              <br />
              <br />
              🚪 <em>The doors are waiting. Are you ready to unlock yours?</em> 🔓
            </p>

            <div className="mt-4">
              <Image
                src={UNLOCKED_POSTER}
                alt="180UNLOCKED — 7 August 2026, 17.45–20.40 WIB, Zoom Meeting"
                width={1000}
                height={1250}
                className="h-auto w-full max-w-md rounded-lg"
              />
            </div>
          </div>

          {/* Registration Proof */}
          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Upload proof of your registration!
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Please upload the proof to a Google Drive, ensure the access settings are set to{" "}
              <span className="font-lato-bold text-black-300">
                &quot;Anyone with the link can view,&quot;
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={unlockedProofLink}
              onChange={(e) => setUnlockedProofLink(e.target.value)}
              placeholder="https://drive.google.com/your-registration-proof"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          {/* Acknowledgement */}
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-lato-regular mb-3 leading-relaxed text-gray-600">
              I acknowledge that attending 180UNLOCKED is strongly encouraged as part of my
              application and that attending will positively support my application in the
              recruitment process, while not participating may limit my chances of advancing.{" "}
              <span className="text-red-600">*</span>
            </p>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="unlockedAcknowledged"
                checked={unlockedAcknowledged}
                onCheckedChange={setUnlockedAcknowledged}
                className="mt-1 text-white"
              />
              <Label
                htmlFor="unlockedAcknowledged"
                className="font-lato-regular leading-relaxed text-gray-600"
              >
                I understand and wish to proceed
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          className="font-avenir-regular disabled:text-black-300 ml-auto flex items-center gap-2 bg-green-300 text-white transition-all duration-200 hover:scale-105 hover:bg-green-300/90 disabled:opacity-50 disabled:hover:scale-100"
        >
          Review Submission
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide7;
