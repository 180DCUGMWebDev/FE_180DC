import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/elements/Form/checkbox";
import Link from "next/link";

const Slide4 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [twibbonPost, settwibbonPost] = useState(formData.twibbonPost || "");
  const [instagramProofLink, setInstagramProofLink] = useState(formData.instagramProofLink || "");
  const [hearAboutUs, setHearAboutUs] = useState(formData.hearAboutUs || []);
  const [consentAgreed, setConsentAgreed] = useState(formData.consentAgreed || false);

  const handleNext = () => {
    updateFormData({
      twibbonPost,
      instagramProofLink,
      hearAboutUs,
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

  const isValid =
    twibbonPost.trim() && instagramProofLink.trim() && hearAboutUs.length > 0 && consentAgreed;

  const hearAboutUsOptions = ["Instagram", "TikTok", "LinkedIn", "Former Alumni", "Friends"];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Social Media & Information
        </h2>
        <p className="font-lato-regular text-gray-600">
          Complete your social media requirements and tell us how you discovered 180DC UGM
        </p>
      </div>

      {/* Document Uploads */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">5</span>
          </div>
          Applicant Twibbon & Social Media
        </h3>

        <div className="space-y-6">
          {/* Twibbon Post Upload */}
          <div>
            <Label
              htmlFor="twibbonPost"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Post our applicant twibbon on your Instagram account! *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              <span className="font-lato-bold text-black-300">Instructions:</span>
              <br />
              1. Open the drive:{" "}
              <span className="font-lato-bold text-black-300">
                <Link
                  href="https://drive.google.com/drive/folders/1787LhaAnV-FXgZykk70Gqc50IRClAvUT?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-300"
                >
                  https://drive.google.com/drive/folders/1787LhaAnV-FXgZykk70Gqc50IRClAvUT?usp=sharing{" "}
                </Link>
              </span>
              <br />
              2. Edit and insert your favorite picture of yourself
              <br />
              3. Add the caption that has been provided
              <br />
              4. Tag @180dcugm and POST 💘
              <br />
              <br />
              <span className="font-lato-bold text-black-300">Important:</span> Please post it on
              your main Instagram account and ensure that it is public!
            </p>
            <Input
              id="twibbonPost"
              type="url"
              value={twibbonPost}
              onChange={(e) => settwibbonPost(e.target.value)}
              placeholder="https://www.instagram.com/p/your-post-link"
              className={`font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50 ${
                twibbonPost && !twibbonPost.includes("instagram.com")
                  ? "border-red-300 focus:ring-red-200"
                  : ""
              }`}
            />
            {twibbonPost && !twibbonPost.includes("instagram.com") && (
              <p className="mt-1 text-sm text-red-600">Please use an Instagram post link</p>
            )}
          </div>

          {/* Instagram Proof Upload */}
          <div>
            <Label
              htmlFor="instagramProofLink"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Upload proof of Instagram story *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Upload proof of:
              <br />
              1. Tagging 3 friends on this post {"->"}{" "}
              <span className="font-lato-bold text-black-300">
                <Link
                  href="https://www.instagram.com/p/DTxbOgtE-lF/?igsh=ank2cWRqZWljcjUw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-300"
                >
                  https://www.instagram.com/p/DTxbOgtE-lF/?igsh=ank2cWRqZWljcjUw
                </Link>
              </span>
              <br />
              2. Uploading this image on your story {"->"}{" "}
              <span className="font-lato-bold text-black-300 underline hover:text-green-300">
                <Link
                  href="https://drive.google.com/drive/folders/1z8NURTHPRVnFOwBrpwL79JgV1oQ8gKMh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://drive.google.com/drive/folders/1z8NURTHPRVnFOwBrpwL79JgV1oQ8gKMh
                </Link>
              </span>
              <br />
              <br />
              Please upload the proof to a Google Drive, ensure the access settings are set to
              “Anyone with the link can view,” and paste the link in the space provided below.
            </p>
            <Input
              id="instagramProofLink"
              type="url"
              value={instagramProofLink}
              onChange={(e) => setInstagramProofLink(e.target.value)}
              placeholder="https://drive.google.com/file/d/your-instagram-proof-link"
              className={`font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50 ${
                instagramProofLink && !instagramProofLink.includes("drive.google.com")
                  ? "border-red-300 focus:ring-red-200"
                  : ""
              }`}
            />
            {instagramProofLink && !instagramProofLink.includes("drive.google.com") && (
              <p className="mt-1 text-sm text-red-600">Please use a Google Drive link</p>
            )}
          </div>
        </div>

        {/* How did you hear about us */}
        <div className="mt-6 space-y-4">
          <h2 className="font-avenir-regular font-bold">How did you hear about us? *</h2>
          <p className="font-lato-regular text-sm text-gray-500">
            Please select all sources that apply to how you learned about 180DC UGM.
          </p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
          </div>
        </div>

        {/* Consent Agreement */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={consentAgreed}
              onCheckedChange={setConsentAgreed}
              className="mt-1 text-white"
            />
            <Label htmlFor="consent" className="font-lato-regular leading-relaxed text-gray-600">
              I hereby consent to the collection, processing, and use of my personal data provided
              in this application for the purpose of the 180DC UGM recruitment process. I understand
              that my information will be handled in accordance with applicable data protection
              regulations and will only be used for recruitment-related activities. I also confirm
              that all information provided in this application is accurate and complete to the best
              of my knowledge.
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
          Continue to Next Step
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide4;
