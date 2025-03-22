// src/components/FormCaseComp.jsx
"use client";

import React, { useRef, useState } from "react";
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
import { proofSchema, TeamLeaderSchema, TeamMemberSchema } from "@/lilbs/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RenderIf from "../global/RenderIf";
import TeamMemberForm from "./FormTeamMember";

export function FormCaseComp() {
  // Form steps state
  const [currentStep, setCurrentStep] = useState(5);
  const totalSteps = 5;
  const form = new FormData();
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

  type ProofValues = z.infer<typeof proofSchema>;
  const {
    register: registerProof,
    handleSubmit: handleSubmitProof,
    formState: { errors: errorsProof },
    watch: watchProof,
  } = useForm<ProofValues>({
    resolver: zodResolver(proofSchema),
    defaultValues: {
      proofLink: "",
    },
  });

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  // Handle form submission
  const onSubmitLeader = async (data: TeamLeaderValues) => {
    goToNextStep();
    form.append("teamLeader", JSON.stringify(data));
  };

  const handleSubmitTeamMember = async () => {
    goToNextStep();
    const data = { member1: watchMember1(), member2: watchMember2(), member3: watchMember3() };
    form.append("teamMembers", JSON.stringify(data));
  };
  const onSubmitProof = async (data: ProofValues) => {
    goToNextStep();
    form.append("proofLink", data.proofLink);
  };

  const fileRef = useRef(null);
  const handleSubmitFile = async (e) => {
    e.preventDefault();
    form.append("proofData", fileRef.current.files[0]);
    try {
      await fetch("/api/register-case-competition", {
        method: "POST",
        body: form,
      });
    } catch (err) {
      console.log(err);
    }
  };
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
            <Form onSubmit={handleSubmitTeamMember}>
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
          <RenderIf when={currentStep === 3}>
            <Form onSubmit={handleSubmitProof(onSubmitProof)}>
              <div className="space-y-6">
                <FormField
                  label="Submission Proof"
                  type="text"
                  register={registerProof("proofLink")}
                  error={errorsProof?.proofLink}
                  placeholder="https://drive.google.com/your-proof"
                />
              </div>
              <NavigationButtons
                currentStep={currentStep}
                totalSteps={totalSteps}
                setCurrentStep={setCurrentStep}
                showPrevious
                buttonText={"Next"}
              />
            </Form>
          </RenderIf>
          <RenderIf when={currentStep === 4}>
            <Form>
              <div className="space-y-6">
                {/* <FormField label="Submission Proof" /> */}
                <FormButton text="Submit" />
              </div>
            </Form>
          </RenderIf>
          <RenderIf when={currentStep === 5}>
            <Form
              onSubmit={handleSubmitFile}
              className="flex min-h-screen items-center justify-center bg-[red]"
            >
              <div className="space-y-6">
                {/* <FormField label="Submission Proof" /> */}
                <input ref={fileRef} type="file" accept="image/png, image/jpeg" />
              </div>
              <FormButton text="Submit" />
            </Form>
          </RenderIf>
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
