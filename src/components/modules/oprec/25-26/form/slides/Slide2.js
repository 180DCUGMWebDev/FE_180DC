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
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const Slide2 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [is180DCAlumni, setIs180DCAlumni] = useState(formData.is180DCAlumni || null);
  const [pastPosition, setPastPosition] = useState(formData.pastPosition || "");
  const [pastBatch, setPastBatch] = useState(formData.pastBatch || "");
  const [applyingPosition, setApplyingPosition] = useState(formData.applyingPosition || "");
  const [secondChoice, setSecondChoice] = useState(formData.secondChoice || "");

  const handleNext = () => {
    updateFormData({
      is180DCAlumni,
      pastPosition: is180DCAlumni ? pastPosition : "",
      pastBatch: is180DCAlumni ? pastBatch : "",
      applyingPosition: is180DCAlumni ? applyingPosition : "",
      secondChoice: is180DCAlumni ? (secondChoice === "unassigned" ? "" : secondChoice) : "",
    });
    onNext();
  };

  const isValid =
    is180DCAlumni === null
      ? false
      : is180DCAlumni
        ? pastPosition.trim() && pastBatch.trim() && applyingPosition.trim()
        : true; // If not alumni, no additional validation needed

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="mb-1 mt-2 font-avenirBlack text-2xl leading-snug text-primary lg:text-3xl">
          180 DC Alumni Information
        </h2>
        <p className="font-latoRegular text-gray-600">
          Help us understand your connection with 180DC UGM
        </p>
      </div>

      {/* Alumni Status Check */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">3</span>
          </div>
          Alumni Status
        </h3>

        <div className="mb-4 flex flex-col gap-2">
          <h2 className="font-avenirRegular font-bold">Are you a 180DC UGM alumni?</h2>
          <div className="flex flex-row items-center gap-2">
            <Checkbox
              id="alumni-yes"
              checked={is180DCAlumni === true}
              onCheckedChange={(checked) => setIs180DCAlumni(checked ? true : null)}
              className="text-white"
            />
            <Label htmlFor="alumni-yes">
              <p className="font-latoRegular text-gray-600">
                Yes, I am a former member of 180DC UGM
              </p>
            </Label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Checkbox
              id="alumni-no"
              checked={is180DCAlumni === false}
              onCheckedChange={(checked) => setIs180DCAlumni(checked ? false : null)}
              className="text-white"
            />
            <Label htmlFor="alumni-no">
              <p className="font-latoRegular text-gray-600">
                No, I am not a former member of 180DC UGM
              </p>
            </Label>
          </div>
          {/* Conditional Alumni Information Form */}
          {is180DCAlumni && (
            <>
              <h3 className="mt-6 flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
                Alumni Details
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label
                    htmlFor="pastPosition"
                    className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
                  >
                    Past Position in 180DC UGM *
                  </Label>
                  <Select value={pastPosition} onValueChange={setPastPosition}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Past Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Project Leader">Project Leader</SelectItem>
                      <SelectItem value="Project Analyst">Project Analyst</SelectItem>
                      <SelectItem value="Research Leader">Research Leader</SelectItem>
                      <SelectItem value="Research Analyst">Research Analyst</SelectItem>
                      <SelectItem value="Functional Analyst">Functional Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="pastBatch"
                    className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
                  >
                    Past Batch/Year *
                  </Label>
                  <Select value={pastBatch} onValueChange={setPastBatch}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Past Batch/Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2020-2021">2020-2021</SelectItem>
                      <SelectItem value="2021-2022">2021-2022</SelectItem>
                      <SelectItem value="2022-2023">2022-2023</SelectItem>
                      <SelectItem value="2023-2024">2023-2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="applyingPosition"
                    className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
                  >
                    What position are you applying for? *
                  </Label>
                  <Select value={applyingPosition} onValueChange={setApplyingPosition}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Project Leader">Project Leader</SelectItem>
                      <SelectItem value="Project Analyst">Project Analyst</SelectItem>
                      <SelectItem value="Research Leader">Research Leader</SelectItem>
                      <SelectItem value="Research Analyst">Research Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="secondChoice"
                    className="mb-2 block font-avenirRegular text-sm font-medium text-gray-700"
                  >
                    Do you have second options? (optional)
                  </Label>
                  <Select value={secondChoice || "unassigned"} onValueChange={setSecondChoice}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unassigned">No second choice</SelectItem>
                      <SelectItem value="Project Analyst">Project Analyst</SelectItem>
                      <SelectItem value="Research Leader">Research Leader</SelectItem>
                      <SelectItem value="Research Analyst">Research Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}
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
