"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Import division-specific slides
import SlideHR from "./divisions/SlideHR";
import SlideCE from "./divisions/SlideCE";
import SlideSG from "./divisions/SlideSG";
import SlideFinance from "./divisions/SlideFinance";
import SlideLegal from "./divisions/SlideLegal";
import SlideMKT from "./divisions/SlideMKT";
import SlideIT from "./divisions/SlideIT";
import SlideKN from "./divisions/SlideKN";

const Slide4 = ({ formData, updateFormData, onNext, onPrevious }) => {
  // Handle document and CV links for first choice
  // These are managed locally in Slide4 because they are specific to Slide4's inputs
  const [documentLink, setDocumentLink] = useState(formData.first_documentLink || "");
  const [cvLink, setCvLink] = useState(formData.first_cvLink || "");
  const [portfolioLink, setPortfolioLink] = useState(formData.first_portfolioLink || "");
  const [content, setContent] = useState(formData.content || false);
  const [graphicDesigner, setGraphicDesigner] = useState(formData.graphicDesigner || false);
  const [videographer, setVideographer] = useState(formData.videographer || false);
  const [partnership, setPartnership] = useState(formData.partnership || false);
  const [frontend, setFrontend] = useState(formData.frontend || false);
  const [backend, setBackend] = useState(formData.backend || false);
  const [uiux, setUiux] = useState(formData.uiux || false);

  const handleNext = () => {
    // Update form data with document, CV, and portfolio links
    // Role preferences are already updated by the sub-components via updateFormData
    updateFormData({
      first_documentLink: documentLink,
      first_cvLink: cvLink,
      first_portfolioLink: portfolioLink,
      first_content: content,
      first_graphicDesigner: graphicDesigner,
      first_videographer: videographer,
      first_partnership: partnership,
      first_frontend: frontend,
      first_backend: backend,
      first_uiux: uiux,
    });
    onNext();
  };

  // Get the selected first choice division from formData
  const firstChoice = formData.firstChoice;

  // Check if form is valid (both fields filled)
  const isValid = documentLink.trim() && cvLink.trim();

  // Render division-specific form for first choice
  const renderDivisionSpecificForm = (division) => {
    const commonProps = {
      formData,
      updateFormData, // Pass the main updateFormData function
      onNext: handleNext,
      onPrevious,
      isSecondChoice: false,
      divisionType: "first",
      // Pass document and CV link state (managed locally in Slide4)
      portfolioLink,
      setPortfolioLink,
      documentLink,
      setDocumentLink,
      cvLink,
      setCvLink,
      isValid,
      content,
      setContent,
      graphicDesigner,
      setGraphicDesigner,
      videographer,
      setVideographer,
      partnership,
      setPartnership,
      frontend,
      setFrontend,
      backend,
      setBackend,
      uiux,
      setUiux,
    };

    switch (division) {
      case "Human Resources":
        return <SlideHR {...commonProps} />;
      case "Client Engagement":
        return <SlideCE {...commonProps} />;
      case "Strategy and Growth":
        return <SlideSG {...commonProps} />;
      case "Finance":
        return <SlideFinance {...commonProps} />;
      case "Legal":
        return <SlideLegal {...commonProps} />;
      case "Marketing":
        return <SlideMKT {...commonProps} />;
      case "IT":
        return <SlideIT {...commonProps} />;
      case "Knowledge Team":
        return <SlideKN {...commonProps} />;
      default:
        return null;
    }
  };

  // If first choice division is selected, show the division-specific form
  if (firstChoice && firstChoice !== "") {
    return (
      <div className="space-y-6">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">First Choice Division:</span>
            <span className="font-semibold text-primary">{firstChoice}</span>
          </div>
        </div>
        {renderDivisionSpecificForm(firstChoice)}
        {/* Centralized Next Button */}
        <div className="flex justify-end pt-4">
          <Button
            onClick={handleNext}
            disabled={!isValid}
            className="flex items-center gap-2 bg-primary font-avenirRegular text-white transition-all duration-200 hover:scale-105 hover:bg-primary/90 disabled:text-black disabled:opacity-50 disabled:hover:scale-100"
          >
            Continue to Next Step
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }
  return null;
};

export default Slide4;
