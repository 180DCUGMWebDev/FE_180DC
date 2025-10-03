import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        <h2 className="mb-1 mt-2 font-avenir-black text-2xl leading-snug text-primary lg:text-3xl">
          Position & Motivation
        </h2>
        <p className="font-lato-regular text-gray-600">
          Tell us about your position preferences and motivations
        </p>
      </div>

      {/* Position Selection */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="mb-6 flex items-center gap-2 font-avenir-black text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">4</span>
          </div>
          Position Preferences
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label
              htmlFor="firstChoicePosition"
              className="mb-2 block font-avenir-regular text-sm font-medium text-gray-700"
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
              className="mb-2 block font-avenir-regular text-sm font-medium text-gray-700"
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
            <Label className="mb-2 block font-avenir-regular text-sm font-medium text-gray-700">
              Motivation Document *
            </Label>
            <p className="mb-3 font-lato-regular text-sm text-gray-500">
              Please prepare a document that answers the following questions (max. 500 words) :
              <span className="font-lato-bold text-black">
                <br />
                1. Why do you want to be a part of 180DC UGM?
                <br />
                2. Why are you applying for this position?
              </span>
              <br />
              <br />
              Once completed, upload your document to Google Drive, ensure the access settings are
              set to{" "}
              <span className="font-lato-bold text-black">
                &quot;Anyone with the link can view,&quot;
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={documentLink}
              onChange={(e) => setDocumentLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className={`border-gray-300 font-lato-regular transition-all duration-200 focus:ring-2 focus:ring-primary/50 ${
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
            <Label className="mb-2 block font-avenir-regular text-sm font-medium text-gray-700">
              Please Insert your CV! *
            </Label>
            <p className="mb-3 font-lato-regular text-sm text-gray-500">
              Please do make sure you use McKinsey ATS Template{" "}
              <span className="font-lato-bold text-black">(bit.ly/McKinseyATS-Example)</span>
              <br />
              <br />
              <span className="font-lato-bold text-black">
                Format: FullName_FirstChoice_SecondChoice
              </span>
              <br />
              <br />
              Then, upload your document to a Google Drive, ensure the access settings are set to{" "}
              <span className="font-lato-bold text-black">
                &quot;Anyone with the link can view,&quot;
              </span>{" "}
              and paste the link in the space provided below.
            </p>
            <Input
              value={cvLink}
              onChange={(e) => setCvLink(e.target.value)}
              placeholder="https://drive.google.com/your-document-link"
              className={`border-gray-300 font-lato-regular transition-all duration-200 focus:ring-2 focus:ring-primary/50 ${
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
          className="flex items-center gap-2 bg-primary font-avenir-regular text-white transition-all duration-200 hover:scale-105 hover:bg-primary/90 disabled:text-black disabled:opacity-50 disabled:hover:scale-100"
        >
          Continue to Next Step
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide3;
