// src/components/OtherStepsForm.jsx
import React from "react";
import NavigationButtons from "./navbutton";

const OtherStepsForm = ({ currentStep, totalSteps, setCurrentStep }) => {
  return (
    <div className="text-center py-8">
      <p>This is step {currentStep} - additional form fields would go here</p>
      <NavigationButtons 
        currentStep={currentStep}
        totalSteps={totalSteps}
        setCurrentStep={setCurrentStep}
        showPrevious={true}
        buttonText={currentStep === totalSteps ? "Submit" : "Next"}
      />
    </div>
  );
};

export default OtherStepsForm;