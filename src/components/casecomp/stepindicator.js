// src/components/StepIndicator.jsx
import React from "react";

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-12 flex items-center justify-between px-4">
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
              className={`mx-1 h-0.5 w-32 ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-300"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
