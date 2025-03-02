// src/components/StepLabels.jsx
import React from "react";

const StepLabels = ({ currentStep }) => {
  return (
    <div className="flex justify-between mb-10 px-4 text-sm text-gray-600">
      <div className={`text-center ${currentStep === 1 ? "text-green-500 font-medium" : ""}`}>Team leader</div>
      <div className={`text-center ${currentStep === 2 ? "text-green-500 font-medium" : ""}`}>Member</div>
      <div className={`text-center ${currentStep === 3 ? "text-green-500 font-medium" : ""}`}>Submission</div>
      <div className={`text-center ${currentStep === 4 ? "text-green-500 font-medium" : ""}`}>Proof</div>
      <div className={`text-center ${currentStep === 5 ? "text-green-500 font-medium" : ""}`}>Selesai</div>
    </div>
  );
};

export default StepLabels;