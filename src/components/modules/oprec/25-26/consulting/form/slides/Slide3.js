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
import { ChevronRight, Upload, ExternalLink } from "lucide-react";

const Slide3 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [firstChoicePosition, setFirstChoicePosition] = useState(
    formData.firstChoicePosition || ""
  );
  const [secondChoicePosition, setSecondChoicePosition] = useState(
    formData.secondChoicePosition || "unassigned"
  );
  const [whyApplyingLink, setWhyApplyingLink] = useState(formData.whyApplyingLink || "");
  const [howHelpGoalsLink, setHowHelpGoalsLink] = useState(formData.howHelpGoalsLink || "");

  const handleNext = () => {
    updateFormData({
      firstChoicePosition,
      secondChoicePosition: secondChoicePosition === "unassigned" ? "" : secondChoicePosition,
      whyApplyingLink,
      howHelpGoalsLink,
    });
    onNext();
  };

  const isValid = firstChoicePosition.trim() && whyApplyingLink.trim() && howHelpGoalsLink.trim();

  const positionOptions = [
    "Project Leader",
    "Project Analyst",
    "Research Leader",
    "Research Analyst",
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="mb-1 mt-2 font-avenirBlack text-2xl leading-snug text-primary lg:text-3xl">
          Position & Motivation
        </h2>
        <p className="font-latoRegular text-gray-600">
          Tell us about your position preferences and motivations
        </p>
      </div>

      {/* Position Selection */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">4</span>
          </div>
          Position Preferences
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label
              htmlFor="firstChoicePosition"
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
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
              className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
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

        <div className="mt-6 space-y-6">
          {/* Why Applying Document */}
          <div>
            <Label className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700">
              Why are you applying for this position? *
            </Label>
            <p className="mb-3 font-latoRegular text-sm text-gray-500">
              Please upload a link with PDF document explaining your motivation for applying to this
              position.
            </p>
            <Input
              id="whyApplyingLink"
              type="url"
              value={whyApplyingLink}
              onChange={(e) => setWhyApplyingLink(e.target.value)}
              placeholder="Link to your motivation document"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* How 180DC Helps Goals Document */}
          <div>
            <Label className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700">
              How will 180DC UGM help you achieve your goals? *
            </Label>
            <p className="mb-3 font-latoRegular text-sm text-gray-500">
              Please upload a PDF document explaining how joining 180DC UGM will help you achieve
              your personal and professional goals.
            </p>
            <Input
              id="howHelpGoalsLink"
              type="url"
              value={howHelpGoalsLink}
              onChange={(e) => setHowHelpGoalsLink(e.target.value)}
              placeholder="Link to your how joining 180DC UGM will help document"
              className="border-gray-300 font-latoRegular transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          className="flex items-center gap-2 bg-primary font-avenirRegular text-white transition-all duration-200 hover:scale-105 hover:bg-primary/90 disabled:text-black disabled:opacity-50 disabled:hover:scale-100"
        >
          Continue to Next Step
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide3;
