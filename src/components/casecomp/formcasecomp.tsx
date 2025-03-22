// src/components/FormCaseComp.jsx
"use client";

import React, { useState } from "react";
import StepIndicator from "./stepindicator";
import StepLabels from "./steplabel";
import { FormField, FormButton, Form } from "./FormCase";
import TeamLeaderForm from "./FormTeamLeader";
// import TeamMembersForm from "./teammemberform";
import NavigationButtons from "./navbutton";
import OtherStepsForm from "./otherstep";
// Form
import { z } from "zod";
import { useForm } from "react-hook-form";
import { TeamLeaderSchema, TeamMemberSchema } from "@/lilbs/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RenderIf from "../global/RenderIf";
import TeamMemberForm from "./FormTeamMember";

export function FormCaseComp() {
  // Form steps state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  // For Team Leader
  type TeamLeaderValues = z.infer<typeof TeamLeaderSchema>;
  const {
    register: registerTeamLeader,
    handleSubmit: handleSubmitTeamLeader,
    formState: { errors: errorsTeamLeader },
    watch: watchTeamLeader,
  } = useForm<TeamLeaderValues>({
    resolver: zodResolver(TeamLeaderSchema),
    defaultValues: {
      namaLengkap: "",
      tanggalLahir: "",
      nomorHP: "",
      universitas: "",
      asalProvinsi: "",
      alamatLengkap: "",
    },
  });

  type TeamMemberValues = z.infer<typeof TeamMemberSchema>;
  const {
    register: registerMember1,
    handleSubmit: handleSubmitMember1,
    formState: { errors: errorsMember1 },
    watch: watchMember1,
  } = useForm<TeamMemberValues>({
    resolver: zodResolver(TeamMemberSchema),
    defaultValues: {
      namaLengkap: "",
      tanggalLahir: "",
      nomorHP: "",
      universitas: "",
      asalProvinsi: "",
      alamatLengkap: "",
    },
  });

  const {
    register: registerMember2,
    handleSubmit: handleSubmitMember2,
    formState: { errors: errorsMember2 },
    watch: watchMember2,
  } = useForm<TeamMemberValues>({
    resolver: zodResolver(TeamMemberSchema),
    defaultValues: {
      namaLengkap: "",
      tanggalLahir: "",
      nomorHP: "",
      universitas: "",
      asalProvinsi: "",
      alamatLengkap: "",
    },
  });

  const {
    register: registerMember3,
    handleSubmit: handleSubmitMember3,
    formState: { errors: errorsMember3 },
    watch: watchMember3,
  } = useForm<TeamMemberValues>({
    resolver: zodResolver(TeamMemberSchema),
    defaultValues: {
      namaLengkap: "",
      tanggalLahir: "",
      nomorHP: "",
      universitas: "",
      asalProvinsi: "",
      alamatLengkap: "",
    },
  });

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
  const onSubmitLeader = async (data: TeamLeaderValues) => {
    // Move to next step if not on last step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form data
      console.log("Form submitted:", formData);
    }
    console.log("Form submitted:", data);
  };

  console.log("Tanggal", watchTeamLeader("tanggalLahir"));

  // Page
  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Title Section */}
      <div className="container mx-auto py-12 text-center">
        <h1 className="mb-4 mt-[10vh] text-4xl font-bold">
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
          <RenderIf when={currentStep === 1}>
            <Form onSubmit={handleSubmitTeamLeader(onSubmitLeader)}>
              <TeamLeaderForm register={registerTeamLeader} error={errorsTeamLeader} />
              <FormButton />
            </Form>
          </RenderIf>
          <RenderIf when={currentStep === 2}>
            <Form onSubmit={handleSubmitTeamLeader(onSubmitLeader)}>
              <TeamMemberForm register={registerMember1} index={1} error={errorsMember1} />
              <TeamMemberForm register={registerMember2} index={2} error={errorsMember2} />
              <TeamMemberForm register={registerMember3} index={3} error={errorsMember3} />
              <NavigationButtons
                currentStep={currentStep}
                totalSteps={totalSteps}
                setCurrentStep={setCurrentStep}
                showPrevious
                buttonText={"Next"}
              />
            </Form>
          </RenderIf>
          <RenderIf when={currentStep > 2}>Arya</RenderIf>
          {/* <Form onSubmit={handleSubmitTeamLeader(onSubmit)}>
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
                <NavigationButtons
                  currentStep={currentStep}
                  totalSteps={totalSteps}
                  setCurrentStep={setCurrentStep}
                  showPrevious
                  buttonText={"Next"}
                />
              </div>
            )}
            {currentStep > 2 && (
              <OtherStepsForm
                currentStep={currentStep}
                totalSteps={totalSteps}
                setCurrentStep={setCurrentStep}
              />
            )}
          </Form> */}
        </div>
      </div>
    </section>
  );
}
