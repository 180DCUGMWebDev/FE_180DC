// src/components/NavigationButtons.jsx
import React from "react";

const NavigationButtons = ({ 
  currentStep, 
  totalSteps, 
  setCurrentStep, 
  showPrevious = true,
  buttonText = "Next"
}) => {
  return (
    <div className="flex justify-between mt-6">
      {showPrevious && (
        <button 
          type="button" 
          onClick={() => setCurrentStep(currentStep - 1)}
          className="bg-gray-300 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-400 transition"
        >
          Previous
        </button>
      )}
      <button 
        type="submit" 
        className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
      >
        {currentStep === totalSteps ? "Submit" : buttonText}
      </button>
    </div>
  );
};

export default NavigationButtons;