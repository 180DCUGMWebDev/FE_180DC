import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Label } from "@/components/elements/Form/label";
import { Checkbox } from "@/components/elements/Form/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/elements/Form/select";
import { ChevronRight } from "lucide-react";

const Slide3 = ({ formData, updateFormData, onNext }) => {
  const [firstChoice, setFirstChoice] = useState(formData.firstChoice || "");
  const [secondChoice, setSecondChoice] = useState(formData.secondChoice || "");
  const [onePosition, setOnePosition] = useState(formData.onePosition ?? true);
  const [twoPositions, setTwoPositions] = useState(formData.twoPositions ?? false);

  const handleOnePositionChange = (checked) => {
    setOnePosition(checked);
    if (checked) {
      setTwoPositions(false);
      setSecondChoice(""); // Clear second choice if only applying for one position
      updateFormData({
        onePosition: true,
        twoPositions: false,
        secondChoice: "",
      });
    } else {
      updateFormData({ onePosition: false });
    }
  };

  const handleTwoPositionsChange = (checked) => {
    setTwoPositions(checked);
    if (checked) {
      setOnePosition(false);
      updateFormData({
        twoPositions: true,
        onePosition: false,
      });
    } else {
      updateFormData({ twoPositions: false });
    }
  };

  const handleNext = () => {
    updateFormData({
      firstChoice: firstChoice,
      secondChoice: secondChoice,
    });
    onNext();
  };

  const isValid = firstChoice !== "" && firstChoice !== secondChoice;

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Position Preference
        </h2>
        <p className="font-lato-regular text-gray-600">
          Please select your preferred position within 180DC UGM.
        </p>
      </div>

      {/* Position Preference Check */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">3</span>
          </div>
          Position Preference
        </h3>

        <div className="mb-4 flex flex-col gap-2">
          {/* Preference Selection */}
          <div className="mb-4 flex flex-col gap-2">
            <h2 className="font-bold">How many positions do you want to apply for?</h2>

            <div className="flex flex-row items-center gap-2">
              <Checkbox
                id="onePosition"
                checked={onePosition}
                onCheckedChange={handleOnePositionChange}
                className="text-white"
              />
              <Label htmlFor="onePosition">
                <p className="font-lato-regular text-gray-600">
                  I only want to apply for one position in 180DC UGM
                </p>
              </Label>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Checkbox
                id="twoPositions"
                checked={twoPositions}
                onCheckedChange={handleTwoPositionsChange}
                className="text-white"
              />
              <Label htmlFor="twoPositions">
                <p className="font-lato-regular text-gray-600">
                  I want to apply for two positions in 180DC UGM
                </p>
              </Label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label
                htmlFor="firstChoice"
                className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
              >
                First Choice of Division *
              </Label>
              <Select
                value={firstChoice}
                onValueChange={(value) => {
                  setFirstChoice(value);
                  updateFormData({ firstChoice: value });
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your division" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Human Resources">Human Resources</SelectItem>
                  <SelectItem value="Client Engagement">Client Engagement</SelectItem>
                  <SelectItem value="Strategy and Growth">Strategy and Growth</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Legal">Legal</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="Knowledge Team">Knowledge Team</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {twoPositions && (
              <div>
                <Label
                  htmlFor="secondChoice"
                  className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
                >
                  Second Choice of Division (optional)
                </Label>
                <Select
                  value={secondChoice}
                  onValueChange={(value) => {
                    setSecondChoice(value);
                    updateFormData({ secondChoice: value });
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your division" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Human Resources">Human Resources</SelectItem>
                    <SelectItem value="Client Engagement">Client Engagement</SelectItem>
                    <SelectItem value="Strategy and Growth">Strategy and Growth</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Legal">Legal</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="Knowledge Team">Knowledge Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>
      </div>

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
