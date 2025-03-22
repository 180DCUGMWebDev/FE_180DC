// src/components/StepLabels.jsx
import { cn } from "@/lilbs/utils";
import React from "react";

const StepLabels = ({ currentStep }) => {
  const steps = ["Team leader", "Member", "Submission", "Proof", "Finish"];
  return (
    <div className="mb-10 flex justify-between px-4 text-sm text-gray-600">
      {steps.map((step, index) => (
        <h4
          key={JSON.stringify(step)}
          className={cn("text-center", currentStep === index + 1 && "font-medium text-green-500")}
        >
          {step}
        </h4>
      ))}
    </div>
  );
};

export default StepLabels;
