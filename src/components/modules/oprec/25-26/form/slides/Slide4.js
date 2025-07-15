import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const Slide4 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [cvLink, setCvLink] = useState(formData.cvLink || "");
  const [instagramProofLink, setInstagramProofLink] = useState(formData.instagramProofLink || "");
  const [hearAboutUs, setHearAboutUs] = useState(formData.hearAboutUs || []);
  const [consentAgreed, setConsentAgreed] = useState(formData.consentAgreed || false);

  const handleNext = () => {
    updateFormData({
      cvLink,
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
    cvLink.trim() && instagramProofLink.trim() && hearAboutUs.length > 0 && consentAgreed;

  const hearAboutUsOptions = ["Instagram", "TikTok", "LinkedIn", "Former Alumni", "Friends"];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="mb-1 mt-2 font-avenirBlack text-2xl leading-snug text-primary lg:text-3xl">
          Documents & Information
        </h2>
        <p className="font-latoRegular text-gray-600">
          Upload your documents and tell us how you discovered 180DC UGM
        </p>
      </div>

      {/* Document Uploads */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">5</span>
          </div>
          Required Documents
        </h3>

        <div className="space-y-6">
          {/* CV Upload */}
          <div>
            <Label
              htmlFor="cvLink"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Upload CV (McKinsey format) *
            </Label>
            <p className="mb-3 font-latoRegular text-sm text-gray-500">
              Please upload your CV in McKinsey format. Make sure to rename your file as:
              &quot;CV_[YourFullName]_180DC.pdf&quot; before uploading to Google Drive and share
              the link here.
            </p>
            <Input
              id="cvLink"
              type="url"
              value={cvLink}
              onChange={(e) => setCvLink(e.target.value)}
              placeholder="https://drive.google.com/file/d/your-cv-link"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Instagram Proof Upload */}
          <div>
            <Label
              htmlFor="instagramProofLink"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
            >
              Upload proof of Instagram story *
            </Label>
            <p className="mb-3 font-latoRegular text-sm text-gray-500">
              Please upload a screenshot of your Instagram story sharing about 180DC UGM
              recruitment. Save as PDF and upload to Google Drive, then share the link here.
            </p>
            <Input
              id="instagramProofLink"
              type="url"
              value={instagramProofLink}
              onChange={(e) => setInstagramProofLink(e.target.value)}
              placeholder="https://drive.google.com/file/d/your-instagram-proof-link"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* How did you hear about us */}
        <div className="mt-6 space-y-4">
          <h2 className="font-avenirRegular font-bold">How did you hear about us? *</h2>
          <p className="font-latoRegular text-sm text-gray-500">
            Select all that apply. This helps us understand how to better reach future candidates.
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
                <Label htmlFor={`hear-${option}`} className="font-latoRegular text-gray-600">
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
            <Label htmlFor="consent" className="font-latoRegular leading-relaxed text-gray-600">
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
          className="disable:text-black flex items-center gap-2 bg-primary font-avenirRegular text-white transition-all duration-200 hover:scale-105 hover:bg-primary/90 disabled:opacity-50 disabled:hover:scale-100"
        >
          Submit Form
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide4;
