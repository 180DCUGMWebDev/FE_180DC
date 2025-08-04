import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";

const Slide2 = ({ formData, updateFormData, onNext }) => {
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
        <h2 className="mb-1 mt-2 font-avenirBlack text-2xl leading-snug text-primary lg:text-3xl">
          Position Preference
        </h2>
        <p className="font-latoRegular text-gray-600">
          Please select your preferred position within 180DC UGM.
        </p>
      </div>

      {/* Position Preference Check */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
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
                <p className="font-latoRegular text-gray-600">
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
                <p className="font-latoRegular text-gray-600">
                  I want to apply for two positions in 180DC UGM
                </p>
              </Label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label
                htmlFor="firstChoice"
                className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
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
                  className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
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
          className="flex items-center gap-2 bg-primary font-avenirRegular text-white transition-all duration-200 hover:scale-105 hover:bg-primary/90 disabled:text-black disabled:opacity-50 disabled:hover:scale-100"
        >
          Continue to Next Step
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide2;
