// src/components/NavigationButtons.jsx
import React from "react";

const NavigationButtons = ({
  currentStep,
  totalSteps,
  setCurrentStep,
  showPrevious = true,
  buttonText = "Next",
}) => {
  return (
    <div className="mt-6 flex justify-between">
      {showPrevious && (
        <button
          type="button"
          onClick={() => setCurrentStep(currentStep - 1)}
          className="rounded-full bg-gray-300 px-6 py-2 text-gray-700 transition hover:bg-gray-400"
        >
          Previous
        </button>
      )}
      <button
        type="submit"
        className="rounded-full bg-green-500 px-6 py-2 text-white transition hover:bg-green-600"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default NavigationButtons;
