"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Import division-specific slides
import SlideHR from "./divisions/SlideHR";
import SlideCE from "./divisions/SlideCE";
import SlideSG from "./divisions/SlideSG";
import SlideFinance from "./divisions/SlideFinance";
import SlideLegal from "./divisions/SlideLegal";
import SlideMKT from "./divisions/SlideMKT";
import SlideIT from "./divisions/SlideIT";
import SlideKN from "./divisions/SlideKN";

const Slide5 = ({ formData, updateFormData, onNext, onPrevious }) => {
  // Handle document and CV links for second choice
  const [documentLink, setDocumentLink] = useState(formData.second_documentLink || "");
  const [cvLink, setCvLink] = useState(formData.second_cvLink || "");
  const [portfolioLink, setPortfolioLink] = useState(formData.second_portfolioLink || "");
  const [content, setContent] = useState(formData.second_content || false);
  const [graphicDesigner, setGraphicDesigner] = useState(formData.second_graphicDesigner || false);
  const [videographer, setVideographer] = useState(formData.second_videographer || false);
  const [partnership, setPartnership] = useState(formData.second_partnership || false);
  const [frontend, setFrontend] = useState(formData.second_frontend || false);
  const [backend, setBackend] = useState(formData.second_backend || false);
  const [uiux, setUiux] = useState(formData.second_uiux || false);

  const handleNext = () => {
    // Update form data with document and CV links
    updateFormData({
      second_documentLink: documentLink,
      second_cvLink: cvLink,
      second_portfolioLink: portfolioLink,
      second_content: content,
      second_graphicDesigner: graphicDesigner,
      second_videographer: videographer,
      second_partnership: partnership,
      second_frontend: frontend,
      second_backend: backend,
      second_uiux: uiux,
    });
    onNext();
  };

  // Get the selected second choice division from formData
  const secondChoice = formData.secondChoice;

  // Check if user has a second choice
  const hasSecondChoice = secondChoice && secondChoice !== "";

  // Check if form is valid (both fields filled)
  const isValid = documentLink.trim() && cvLink.trim();

  // Render division-specific form for second choice
  const renderDivisionSpecificForm = (division) => {
    const commonProps = {
      formData,
      updateFormData,
      onNext: handleNext,
      onPrevious,
      isSecondChoice: true,
      divisionType: "second",
      // Pass document and CV link state
      portfolioLink,
      setPortfolioLink,
      documentLink,
      setDocumentLink,
      cvLink,
      setCvLink,
      isValid,
      // Pass role preferences
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

  // If second choice division is selected, show the division-specific form
  if (hasSecondChoice) {
    return (
      <div className="space-y-6">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2">
            <span className="text-sm font-medium text-secondary">Second Choice Division:</span>
            <span className="font-semibold text-secondary">{secondChoice}</span>
          </div>
        </div>
        {renderDivisionSpecificForm(secondChoice)}

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

  // If no second choice, return null or show a skip option
  return null;
};

export default Slide5;
