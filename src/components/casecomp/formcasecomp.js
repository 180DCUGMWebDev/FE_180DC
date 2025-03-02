// src/components/FormCaseComp.jsx
"use client";

import React, { useState } from "react";
import StepIndicator from "./stepindicator";
import StepLabels from "./steplabel";
import FormField from "./formfield";
import TeamLeaderForm from "./teamleaderform";
import TeamMembersForm from "./teammemberform";
import NavigationButtons from "./navbutton";
import OtherStepsForm from "./otherstep";

export function FormCaseComp() {
  // Form steps state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Form data state
  const [formData, setFormData] = useState({
    // Team Leader
    namaLengkap: "",
    tanggalLahir: "",
    nomorHP: "",
    universitas: "",
    asalProvinsi: "",
    alamatLengkap: "",

    // Team Members
    members: [
      {
        namaLengkap: "",
        tanggalLahir: "",
        nomorHP: "",
        universitas: "",
        asalProvinsi: "",
        alamatLengkap: "",
      },
      {
        namaLengkap: "",
        tanggalLahir: "",
        nomorHP: "",
        universitas: "",
        asalProvinsi: "",
        alamatLengkap: "",
      },
      {
        namaLengkap: "",
        tanggalLahir: "",
        nomorHP: "",
        universitas: "",
        asalProvinsi: "",
        alamatLengkap: "",
      },
    ],
  });

  // Handle input changes for team leader
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle input changes for team members
  const handleMemberInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [name]: value,
    };

    setFormData({
      ...formData,
      members: updatedMembers,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Move to next step if not on last step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form data
      console.log("Form submitted:", formData);
    }
  };

  // Page
  return (
    <section className="relative bg-black text-white">
      {/* Title Section */}
      <div className="container mx-auto py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          <span className="text-green-500">Team</span>{" "}
          <span className="text-blue-400">Registration</span>
        </h1>
        <p className="mx-auto max-w-md text-gray-300">
          Faucibus tempor in condimentum suscipit diam. Rhoncus diam a felis nunc.
        </p>
      </div>

      {/* Form Section */}
      <div className="container mx-auto pb-16">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8">
          {/* Steps Indicator */}
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          {/* Step Labels */}
          <StepLabels currentStep={currentStep} />

          {/* Form */}
          <form onSubmit={handleSubmit} className="text-gray-800">
            {currentStep === 1 && (
              <TeamLeaderForm formData={formData} handleInputChange={handleInputChange} />
            )}

            {currentStep === 2 && (
              <div>
                {formData.members.map((member, index) => (
                  <TeamMembersForm
                    key={index}
                    member={member}
                    index={index}
                    handleMemberInputChange={handleMemberInputChange}
                  />
                ))}
              </div>
            )}
            {currentStep > 2 && (
              <OtherStepsForm
                currentStep={currentStep}
                totalSteps={totalSteps}
                setCurrentStep={setCurrentStep}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
