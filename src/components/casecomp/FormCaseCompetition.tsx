// src/components/FormCaseComp.jsx
"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { StepIndicator } from "./stepindicator";
import { FormField, FormButton, Form, FormFile } from "./FormCase";
import TeamLeaderForm from "./FormTeamLeader";
// import TeamMembersForm from "./teammemberform";
import NavigationButtons from "./navbutton";
// Form
import { set, z } from "zod";
import { useForm } from "react-hook-form";
import { getFileSizeMb, TeamLeaderSchema, TeamMemberSchema } from "@/lilbs/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RenderIf from "../global/RenderIf";
import TeamMemberForm from "./FormTeamMember";
import { UtilsContext } from "@/contexts/UtilsContext";
import "./Form.css";

export function FormCaseComp() {
  // Form steps state
  const { toastNotify } = useContext(UtilsContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [hidrate, setHidrate] = useState(false);
  const [currentSubmissionName, setCurrentSubmissionName] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [currentProofName, setCurrentProofName] = useState("");
  const [proofError, setProofError] = useState("");
  const [currentData, setCurrentData] = useState({
    teamLeader: null,
    teamMembers: null,
    submissionData: null,
    proofData: null,
  });
  useEffect(() => {
    setHidrate(true);
  }, []);
  const totalSteps = 5;
  const headRef = useRef(null);
  const proofRef = useRef(null);
  const submissionRef = useRef(null);
  // For Team Leader
  type TeamLeaderValues = z.infer<typeof TeamLeaderSchema>;
  const {
    register: registerTeamLeader,
    handleSubmit: handleSubmitTeamLeader,
    formState: { errors: errorsTeamLeader },
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

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
    headRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Handle form submission
  const onSubmitLeader = async (data: TeamLeaderValues) => {
    goToNextStep();
    setCurrentData((prev) => ({ ...prev, teamLeader: JSON.stringify(data) }));
    // form.append("teamLeader", JSON.stringify(data));
  };

  const handleSubmitTeamMember = async () => {
    goToNextStep();
    const data = { member1: watchMember1(), member2: watchMember2(), member3: watchMember3() };
    // form.append("teamMembers", JSON.stringify(data));
    setCurrentData((prev) => ({ ...prev, teamMembers: JSON.stringify(data) }));
  };
  const onSubmitSubmission = (e) => {
    e.preventDefault();
    if (!submissionRef.current.files[0]) {
      setSubmissionError("Submission File is Required!");
      return;
    }
    const currentFile = submissionRef.current.files[0];
    if (currentFile.size > getFileSizeMb(10)) {
      setSubmissionError("Max file size is 10mb!");
      return;
    }
    if (currentFile.type !== "application/pdf") {
      setSubmissionError("File must be in PDF format!");
      return;
    }
    goToNextStep();
    setSubmissionError("");
    setCurrentData((prev) => ({ ...prev, submissionData: submissionRef.current.files[0] }));
    // form.append("submissionData", submissionRef.current.files[0]);
  };

  const handleSubmissionChange = (e) => {
    if (!e.target?.files[0]) setCurrentSubmissionName(null);
    else setCurrentSubmissionName(e.target.files[0].name);
  };

  const onSubmitProof = (e) => {
    e.preventDefault();
    if (!proofRef.current.files[0]) {
      setProofError("Proof File is Required!");
      return;
    }
    const currentFile = proofRef.current.files[0];
    if (currentFile.size > getFileSizeMb(10)) {
      setProofError("Max file size is 10mb!");
      return;
    }
    if (!["application/pdf", "image/png", "image/jpeg"].includes(currentFile.type)) {
      setProofError("File must be in PDF, PNG, or JPEG format!");
      return;
    }
    goToNextStep();
    setProofError("");
    setCurrentData((prev) => ({ ...prev, proofData: proofRef.current.files[0] }));
    // form.append("proofData", proofRef.current.files[0]);
  };

  const handleProofChange = (e) => {
    if (!e.target?.files[0]) setCurrentProofName(null);
    else setCurrentProofName(e.target.files[0].name);
  };

  const handleSubmitFile = async (e) => {
    const { teamLeader, teamMembers, submissionData, proofData } = currentData;
    const form = new FormData();
    form.append("teamLeader", teamLeader);
    form.append("teamMembers", teamMembers);
    form.append("submissionData", submissionData);
    form.append("proofData", proofData);
    e.preventDefault();
    try {
      await fetch("/api/register-case-competition", {
        method: "POST",
        body: form,
      }).then(() => toastNotify("success", "Registration Successful!"));
    } catch (err) {
      toastNotify("error", "Registration Failed!");
    }
  };
  // Page
  return (
    <section ref={headRef} className="relative min-h-screen bg-black text-white">
      {/* Title Section */}
      <div className="container mx-auto py-12 text-center">
        <h1 className="mb-4 mt-[10vh] text-4xl font-bold">
          <span className="bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
            Team Registration
          </span>
        </h1>
        <p className="mx-auto max-w-md text-gray-300">
          Faucibus tempor in condimentum suscipit diam. Rhoncus diam a felis nunc.
        </p>
      </div>

      {/* Form Section */}
      <div className="container mx-auto pb-16">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8">
          {/* Steps Indicator */}
          {/* Step Labels */}
          {/* Form */}
          {!hidrate && (
            <h4 className="flex w-full items-center justify-center text-center font-bold text-gray-600">
              Loading...
            </h4>
          )}
          {hidrate && (
            <>
              <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
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
                <Form onSubmit={onSubmitSubmission}>
                  <FormFile
                    ref={submissionRef}
                    currentState={currentSubmissionName}
                    error={submissionError}
                    label="Submission PDF"
                    tag="submission"
                    accept="application/pdf"
                    onChange={handleSubmissionChange}
                  />
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
                <Form onSubmit={onSubmitProof}>
                  <FormFile
                    ref={proofRef}
                    currentState={currentProofName}
                    error={proofError}
                    label="Payment Proof"
                    tag="proof"
                    accept="application/pdf, image/png, image/jpeg"
                    onChange={handleProofChange}
                  />
                  <NavigationButtons
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    setCurrentStep={setCurrentStep}
                    showPrevious
                    buttonText={"Next"}
                  />
                </Form>
              </RenderIf>
              <RenderIf when={currentStep === 5}>
                <Form onSubmit={handleSubmitFile}>
                  <NavigationButtons
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    setCurrentStep={setCurrentStep}
                    showPrevious
                    buttonText={"Register"}
                  />
                </Form>
              </RenderIf>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
