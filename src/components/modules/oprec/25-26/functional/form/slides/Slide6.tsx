import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/elements/Form/checkbox";
import Link from "next/link";

const Slide6 = ({ formData, updateFormData, onNext, onPrevious }) => {
  // Updated state to match the actual requirements
  const [twibbonPostLink, setTwibbonPostLink] = useState(formData.twibbonPostLink || "");
  const [twibbonProofLink, setTwibbonProofLink] = useState(formData.twibbonProofLink || "");
  const [consentAgreed, setConsentAgreed] = useState(formData.consentAgreed || false);

  const handleNext = () => {
    updateFormData({
      twibbonPostLink,
      twibbonProofLink,
      consentAgreed,
    });
    onNext();
  };

  // Updated validation to include all required fields
  const isValid = twibbonPostLink.trim() && twibbonProofLink.trim() && consentAgreed;

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black text-brand-primary mt-2 mb-1 text-2xl leading-snug lg:text-3xl">
          Documents & Social Media Requirements
        </h2>
        <p className="font-lato-regular text-gray-600">
          Upload your documents and complete the Instagram twibbon requirements
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-1 flex items-center gap-2 text-xl text-gray-800">
          <div className="bg-brand-primary flex h-6 w-6 items-center justify-center rounded-full">
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
              <p className="font-avenir-black text-brand-black">
                Post our applicant twibbon on your Instagram account!
              </p>
              <br />
              1. Open the drive:{" "}
              <Link
                href="https://drive.google.com/drive/folders/1qvKOOsRm_bRliho4et3pulZLyJwrBRyG?usp=sharing"
                className="text-blue-600 underline"
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
              className="font-lato-regular focus:ring-brand-primary/50 border-gray-300 transition-all duration-200 focus:ring-2"
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
                  href="https://www.instagram.com/p/DNDBGBBTvnv/?utm_source=ig_web_copy_link&igsh=MWVyeTRhdGdhYWtjZQ=="
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Post Link
                </Link>
                <br />
                2. Uploading this image on your story →{" "}
                <Link
                  href="https://drive.google.com/file/d/10lhYjHuwREvf983wXc1kT4GCdOln3EBp/view?usp=drive_link"
                  className="text-blue-600 underline"
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
              className="font-lato-regular focus:ring-brand-primary/50 border-gray-300 transition-all duration-200 focus:ring-2"
            />
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
          className="bg-brand-primary font-avenir-regular hover:bg-brand-primary/90 disabled:text-brand-black ml-auto flex items-center gap-2 text-white transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          Review Submission
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide6;
