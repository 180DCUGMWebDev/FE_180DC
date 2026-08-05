import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/elements/Form/checkbox";
import Link from "next/link";

const hearAboutUsOptions = ["Instagram", "LinkedIn", "Facebook", "180DC member/analyst"];
const HEAR_ABOUT_US_OTHER = "Other";

const Slide6 = ({ formData, updateFormData, onNext, onPrevious }) => {
  // Updated state to match the actual requirements
  const [twibbonPostLink, setTwibbonPostLink] = useState(formData.twibbonPostLink || "");
  const [twibbonProofLink, setTwibbonProofLink] = useState(formData.twibbonProofLink || "");
  const [hearAboutUs, setHearAboutUs] = useState(formData.hearAboutUs || []);
  const [hearAboutUsOther, setHearAboutUsOther] = useState(formData.hearAboutUsOther || "");
  const [consentAgreed, setConsentAgreed] = useState(formData.consentAgreed || false);

  const handleNext = () => {
    updateFormData({
      twibbonPostLink,
      twibbonProofLink,
      hearAboutUs,
      hearAboutUsOther,
      consentAgreed,
    });
    onNext();
  };

  const handleHearAboutUsChange = (source, checked) => {
    if (checked) {
      setHearAboutUs((prev) => [...prev, source]);
    } else {
      setHearAboutUs((prev) => prev.filter((item) => item !== source));
    }
  };

  const otherIsIncomplete =
    hearAboutUs.includes(HEAR_ABOUT_US_OTHER) && !hearAboutUsOther.trim();

  const isValid =
    twibbonPostLink.trim() &&
    twibbonProofLink.trim() &&
    hearAboutUs.length > 0 &&
    !otherIsIncomplete &&
    consentAgreed;

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Documents & Social Media Requirements
        </h2>
        <p className="font-lato-regular text-gray-600">
          Upload your documents and complete the Instagram twibbon requirements
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-1 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">5</span>
          </div>
          Documents & Social Media Requirements
        </h3>
        <p className="font-lato-regular mb-4 text-gray-600">
          Please complete all requirements below. Upload your documents and follow the Instagram
          twibbon instructions carefully to ensure a valid application.
        </p>

        <div className="space-y-6">
          {/* Instagram Twibbon Instructions */}
          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              📱 Instagram Twibbon Requirements
              <br />
              <p>
                To ensure the validity of your application, please follow the instructions below
                carefully. Applications that do not comply may be considered invalid.
              </p>
              <br />
              <p className="font-avenir-black text-black-300">
                Post our applicant twibbon on your Instagram account!
              </p>
              <br />
              1. Open the drive:{" "}
              <Link
                href="https://drive.google.com/drive/folders/1RRP5ropmuKM_36sL6ByU5Dc19Q_BJbIj?usp=drive_link"
                className="text-cyan-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Drive Link
              </Link>
              <br />
              2. Download the twibbon
              <br />
              3. Edit and insert your favourite picture of yourself
              <br />
              4. Add in the caption that has been provided
              <br />
              5. Tag @180dcugm and POST 🏹
              <br />
              <br />
              <strong>
                Please post it on your <span className="text-red-600">main Instagram account</span>{" "}
                and ensure that it is public!
              </strong>
            </Label>
          </div>

          {/* Twibbon Post Link */}
          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Insert the link of your twibbon post: *
            </Label>
            <Input
              value={twibbonPostLink}
              onChange={(e) => setTwibbonPostLink(e.target.value)}
              placeholder="https://www.instagram.com/p/your-post-link"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          {/* Upload Proof Section */}
          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              📸 Upload proof of:
              <br />
              <p>
                1. Tagging 3 friends on this post →{" "}
                <Link
                  href="https://www.instagram.com/p/DbpaevIEyFA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  className="text-cyan-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Post Link
                </Link>
                <br />
                2. Uploading this image on your story →{" "}
                <Link
                  href="https://drive.google.com/drive/folders/14osZbjU6gUweu4aANyNU0EjbUcBqzsu1?usp=drive_link"
                  className="text-cyan-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Poster Link
                </Link>
                <br />
                <br />
                Please upload the proof to a Google Drive, ensure the access settings are set to
                &quot;Anyone with the link can view,&quot;` and paste the link in the space provided
                below. Upload screenshots showing: (1) tagging 3 friends on the specified post, and
                (2) uploading the story image. Combine into one PDF and upload to Google Drive.
              </p>
            </Label>
            <Input
              value={twibbonProofLink}
              onChange={(e) => setTwibbonProofLink(e.target.value)}
              placeholder="https://drive.google.com/file/d/your-proof-screenshots"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          {/* How did you hear about us */}
          <div className="space-y-4">
            <h2 className="font-avenir-regular font-bold">
              How did you first hear about 180DC UGM? *
            </h2>
            <p className="font-lato-regular text-sm text-gray-500">
              Please select all sources that apply to how you learned about 180DC UGM.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {hearAboutUsOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`hear-${option}`}
                    checked={hearAboutUs.includes(option)}
                    onCheckedChange={(checked) => handleHearAboutUsChange(option, checked)}
                    className="text-white"
                  />
                  <Label htmlFor={`hear-${option}`} className="font-lato-regular text-gray-600">
                    {option}
                  </Label>
                </div>
              ))}

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hear-Other"
                  checked={hearAboutUs.includes(HEAR_ABOUT_US_OTHER)}
                  onCheckedChange={(checked) =>
                    handleHearAboutUsChange(HEAR_ABOUT_US_OTHER, checked)
                  }
                  className="text-white"
                />
                <Label htmlFor="hear-Other" className="font-lato-regular text-gray-600">
                  Other:
                </Label>
                <Input
                  value={hearAboutUsOther}
                  onChange={(e) => setHearAboutUsOther(e.target.value)}
                  disabled={!hearAboutUs.includes(HEAR_ABOUT_US_OTHER)}
                  placeholder="Please specify"
                  className="font-lato-regular h-8 flex-1 border-0 border-b border-gray-300 bg-transparent transition-all duration-200 focus:ring-0 disabled:opacity-50"
                />
              </div>
            </div>

            {otherIsIncomplete && (
              <p className="font-lato-regular text-sm text-red-600">
                Please specify where you heard about us.
              </p>
            )}
          </div>

          {/* Consent Agreement */}
          <div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={consentAgreed}
                onCheckedChange={setConsentAgreed}
                className="mt-1 text-white"
              />
              <Label htmlFor="consent" className="font-lato-regular leading-relaxed text-gray-600">
                I hereby consent to the collection, processing, and use of my personal data provided
                in this application for the purpose of the 180DC UGM recruitment process. I
                understand that my information will be handled in accordance with applicable data
                protection regulations and will only be used for recruitment-related activities. I
                also confirm that all information provided in this application is accurate and
                complete to the best of my knowledge.
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
          Continue to Next Step
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide6;
