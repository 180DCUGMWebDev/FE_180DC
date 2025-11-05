// /modules/registration/components/Stepper.tsx
"use client";

import React from "react";

interface StepperProps {
  activeStep: number;
  steps: string[];
}

export default function Stepper({ activeStep, steps }: StepperProps) {
  return (
    // === INI PERUBAHANNYA ===
    // 'hidden' = Sembunyi di mobile (default)
    // 'md:flex' = Tampilkan sebagai 'flex' di layar medium (desktop) ke atas
    <div className="mx-auto mb-16 hidden w-full max-w-2xl md:flex">
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
            {/* 1. NODE (Lingkaran + Label) */}
            <div className="flex flex-col items-center px-2 text-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${isActive ? "scale-110 bg-green-300 text-white" : ""} ${isCompleted ? "bg-green-300 text-white" : ""} ${!isActive && !isCompleted ? "bg-gray-300 text-gray-600" : ""} `}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>

              {/* Label (tetap pakai md:block) */}
              <span
                className={`mt-2 text-sm font-avenir-regular font-medium ${isActive || isCompleted ? "text-green-300" : "text-gray-400"} hidden md:block`}
              >
                {label}
              </span>
            </div>

            {/* 2. GARIS PENGHUBUNG */}
            {!isLastStep && (
              <div className={`ml-2 h-1 flex-1 ${isCompleted ? "bg-green-300" : "bg-gray-300"} `} />
            )}
          </div>
        );
      })}
    </div>
  );
}
