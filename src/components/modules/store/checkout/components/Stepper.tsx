"use client";

import React from "react";

interface StepperProps {
  activeStep: number;
  steps: string[];
}

export default function Stepper({ activeStep, steps }: StepperProps) {
  return (
    <div className="mx-auto mb-8 hidden w-full max-w-2xl md:flex">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < activeStep;
        const isActive = stepNumber === activeStep;
        const isLastStep = index === steps.length - 1;

        return (
          <div
            key={label}
            className={`flex items-center ${!isLastStep ? "flex-1" : "flex-initial"}`}
          >
            {/* Circle + Label */}
            <div className="flex flex-col items-center px-2 text-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold transition-all ${
                  isActive ? "scale-110 bg-[#75C44D] text-white shadow-lg shadow-[#75C44D]/30" : ""
                } ${isCompleted ? "bg-[#75C44D] text-white" : ""} ${
                  !isActive && !isCompleted ? "bg-white/10 text-gray-500" : ""
                }`}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>

              <span
                className={`font-avenir-regular mt-2 hidden text-sm font-medium md:block ${
                  isActive || isCompleted ? "text-[#75C44D]" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>

            {/* Connector line */}
            {!isLastStep && (
              <div
                className={`ml-2 h-1 flex-1 rounded-full ${
                  isCompleted ? "bg-[#75C44D]" : "bg-white/10"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
