// src/components/StepIndicator.jsx
import { cn } from "@/lib/utils";
import React from "react";

export const StepIndicator = ({ currentStep, totalSteps }) => {
  const steps = ["Leader", "Member", "Proof", "Finish"];
  return (
    <>
      <div className="relative mb-[5rem] mt-[1rem] flex items-center justify-between">
        <div className="absolute z-[8] flex w-full justify-between md:px-6">
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={JSON.stringify({ identifier: "step", index: index })}
              className={cn(
                "flex aspect-square w-7 items-center justify-center rounded-full text-sm md:w-9",
                index + 1 <= currentStep
                  ? "bg-green-500 text-white"
                  : index + 1 < currentStep
                    ? "bg-gray-300 text-gray-600"
                    : "bg-gray-300 text-gray-600",
              )}
            >
              <span>{index + 1}</span>
              <div
                className={cn(
                  "absolute top-[130%]",
                  index + 1 <= currentStep
                    ? "text-green-500"
                    : index + 1 < currentStep
                      ? "text-gray-600"
                      : "text-gray-600",
                  index + 1 === currentStep && "font-bold",
                )}
              >
                {steps[index]}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute z-[7] flex w-full justify-between md:px-6">
          {[...Array(totalSteps - 1)].map((_, index) => (
            <div
              key={JSON.stringify({ identifier: "label", index: index })}
              className={`h-0.5 w-[33%] ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

/*

  <div className="mb-12 flex items-center justify-between">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
              index + 1 <= currentStep
                ? "bg-green-500 text-white"
                : index + 1 < currentStep
                  ? "bg-gray-300 text-gray-600"
                  : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`h-0.5 w-[2.4rem] lg:w-[8.5rem] ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-300"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
*/
