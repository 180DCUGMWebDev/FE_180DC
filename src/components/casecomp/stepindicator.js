// src/components/StepIndicator.jsx
import React from "react";

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-between items-center mb-12 px-4">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center">
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm 
              ${index + 1 === currentStep 
                ? "bg-green-500 text-white" 
                : index + 1 < currentStep 
                  ? "bg-gray-300 text-gray-600" 
                  : "bg-gray-300 text-gray-600"}`}
          >
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div className={`h-0.5 w-32 mx-1 ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-300"}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;