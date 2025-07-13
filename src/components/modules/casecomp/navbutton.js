// src/components/NavigationButtons.jsx
import { cn } from "@/lib/utils";
import React from "react";

const NavigationButtons = ({
  currentStep,
  disableLeftButton = false,
  disableRightButton = false,
  setCurrentStep,
  showPrevious = true,
  buttonText = "Next",
}) => {
  return (
    <div className="mt-6 flex justify-between">
      {showPrevious && (
        <button
          type="button"
          disabled={disableLeftButton}
          onClick={() => setCurrentStep(currentStep - 1)}
          className={cn(
            "rounded-full bg-gray-300 px-6 py-2 text-gray-700 transition hover:bg-gray-400",
            disableLeftButton && "opacity-0",
          )}
        >
          Previous
        </button>
      )}
      <button
        type="submit"
        disabled={disableRightButton}
        className={cn(
          "rounded-full bg-green-500 px-6 py-2 text-white transition hover:bg-green-600",
          disableRightButton && "opacity-0",
        )}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default NavigationButtons;
