import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/elements/Form/select";
import { ChevronRight, ChevronLeft, Upload, ExternalLink } from "lucide-react";

const Slide3 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [firstChoicePosition, setFirstChoicePosition] = useState(
    formData.firstChoicePosition || ""
  );
  const [secondChoicePosition, setSecondChoicePosition] = useState(
    formData.secondChoicePosition || "unassigned"
  );
  const [documentLink, setDocumentLink] = useState(formData.documentLink || "");
  const [cvLink, setCvLink] = useState(formData.cvLink || "");

  const handleNext = () => {
    updateFormData({
      firstChoicePosition,
      secondChoicePosition: secondChoicePosition === "unassigned" ? "" : secondChoicePosition,
      documentLink,
      cvLink,
    });
    onNext();
  };

  const isValid = firstChoicePosition.trim() && documentLink.trim() && cvLink.trim();

  const positionOptions = ["Project Leader", "Project Analyst"];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Position & Motivation
        </h2>
        <p className="font-lato-regular text-gray-600">
          Tell us about your position preferences and motivations
        </p>
      </div>

      {/* Position Selection */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">4</span>
          </div>
          Position Preferences
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label
              htmlFor="firstChoicePosition"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              First Choice Position *
            </Label>
            <Select value={firstChoicePosition} onValueChange={setFirstChoicePosition}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your first choice" />
              </SelectTrigger>
              <SelectContent>
                {positionOptions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label
              htmlFor="secondChoicePosition"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Second Choice Position (optional)
            </Label>
            <Select value={secondChoicePosition} onValueChange={setSecondChoicePosition}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your second choice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unassigned">No second choice</SelectItem>
                {positionOptions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Motivation Document *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Please prepare a document that answers the following questions (max. 500 words) :
              <span className="font-lato-bold text-black-300">
                <br />
                1. Why do you want to be a part of 180DC UGM?
                <br />
                2. Why are you applying for this position?
              </span>
              <br />
              <br />
              Once completed, upload your document to Google Drive, ensure the access settings are
              set to{" "}
              <span className="font-lato-bold text-black-300">
                &quot;Anyone with the link can view,&quot;
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={documentLink}
              onChange={(e) => setDocumentLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className={`font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50 ${
                documentLink && !documentLink.includes("drive.google.com")
                  ? "border-red-300 focus:ring-red-200"
                  : ""
              }`}
            />
            {documentLink && !documentLink.includes("drive.google.com") && (
              <p className="mt-1 text-sm text-red-600">Please use a Google Drive link</p>
            )}
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Please Insert your CV! *
            </Label>
            <p className="font-lato-regular mb-3 text-sm text-gray-500">
              Please do make sure you use McKinsey ATS Template{" "}
              <span className="font-lato-bold text-black-300">(bit.ly/McKinseyATS-Example)</span>
              <br />
              <br />
              <span className="font-lato-bold text-black-300">
                Format: FullName_FirstChoice_SecondChoice
              </span>
              <br />
              <br />
              Then, upload your document to a Google Drive, ensure the access settings are set to{" "}
              <span className="font-lato-bold text-black-300">
                &quot;Anyone with the link can view,&quot;
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={cvLink}
              onChange={(e) => setCvLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className={`font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50 ${
                cvLink && !cvLink.includes("drive.google.com")
                  ? "border-red-300 focus:ring-red-200"
                  : ""
              }`}
            />
            {cvLink && !cvLink.includes("drive.google.com") && (
              <p className="mt-1 text-sm text-red-600">Please use a Google Drive link</p>
            )}
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

export default Slide3;
