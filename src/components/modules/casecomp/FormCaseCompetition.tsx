// src/components/FormCaseComp.jsx
"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StepIndicator } from "./stepindicator";
import { FormButton, Form, FormFile } from "./FormCase";
import TeamLeaderForm from "./FormTeamLeader";
// import TeamMembersForm from "./teammemberform";
import NavigationButtons from "./navbutton";
// Form
import { z } from "zod";
import { useForm } from "react-hook-form";
import { getFileSizeMb, TeamLeaderSchema, TeamMemberSchema } from "@/lib/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RenderIf from "@/components/layout/RenderIf";
import TeamMemberForm from "./FormTeamMember";
import { UtilsContext } from "@/contexts/UtilsContext";
import "./Form.css";
import { cn } from "@/lib/utils";

export function FormCaseComp() {
  // Form steps state
  const { toastNotify } = useContext(UtilsContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [hidrate, setHidrate] = useState(false);

  const [currentData, setCurrentData] = useState({
    payment: null,
    teamLeader: null,
    teamMembers: null,
    idCard: null,
    follow: null,
    mention: null,
    repost: null,
    twibbon: null,
    buktiPembayaran: null,
    rekening: null,
  });
  useEffect(() => {
    setHidrate(true);
  }, []);
  const totalSteps = 4;
  const headRef = useRef(null);
  // For Team Leader
  type TeamLeaderValues = z.infer<typeof TeamLeaderSchema>;
  const {
    register: registerTeamLeader,
    handleSubmit: handleSubmitTeamLeader,
    formState: { errors: errorsTeamLeader },
  } = useForm<TeamLeaderValues>({
    resolver: zodResolver(TeamLeaderSchema),
    defaultValues: {
      namaTim: "",
      namaLengkap: "",
      universitas: "",
      prodi: "",
      batch: "",
      email: "",
      nomorHP: "",
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
      universitas: "",
      prodi: "",
      batch: "",
      email: "",
      nomorHP: "",
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
      universitas: "",
      prodi: "",
      batch: "",
      email: "",
      nomorHP: "",
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
    const data = [watchMember1(), watchMember2()];
    // form.append("teamMembers", JSON.stringify(data));
    setCurrentData((prev) => ({ ...prev, teamMembers: JSON.stringify(data) }));
  };

  // FILE =========================================
  // ID Card
  const idCardRef = useRef(null);
  const [currentIDCard, setCurrentIDCard] = useState("");
  const [idCardError, setIDCardError] = useState("");

  // follow
  const followRef = useRef(null);
  const [currentFollow, setCurrentFollow] = useState("");
  const [followError, setFollowError] = useState("");

  // mention
  const mentionRef = useRef(null);
  const [currentMention, setCurrentMention] = useState("");
  const [mentionError, setMentionError] = useState("");

  // repost
  const repostRef = useRef(null);
  const [currentRepost, setCurrentRepost] = useState("");
  const [repostError, setRepostError] = useState("");

  // twibbon
  const twibbonRef = useRef(null);
  const [currentTwibbon, setCurrentTwibbon] = useState("");
  const [twibbonError, setTwibbonError] = useState("");

  // Bukti Pembayaran
  const buktiPembayaranRef = useRef(null);
  const [currentBuktiPembayaran, setCurrentBuktiPembayaran] = useState("");
  const [buktiPembayaranError, setBuktiPembayaranError] = useState("");

  // Rekening
  const rekeningRef = useRef(null);
  const [rekeningError, setRekeningError] = useState("");

  useEffect(() => {
    if (currentStep === 3) {
      if (idCardRef && idCardRef.current && currentData.idCard) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(currentData.idCard);
        idCardRef.current.files = dataTransfer.files;
      }
      if (followRef && followRef.current && currentData.follow) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(currentData.follow);
        followRef.current.files = dataTransfer.files;
      }
      if (mentionRef && mentionRef.current && currentData.mention) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(currentData.mention);
        mentionRef.current.files = dataTransfer.files;
      }
      if (repostRef && repostRef.current && currentData.repost) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(currentData.repost);
        repostRef.current.files = dataTransfer.files;
      }
      if (twibbonRef && twibbonRef.current && currentData.twibbon) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(currentData.twibbon);
        twibbonRef.current.files = dataTransfer.files;
      }
      if (buktiPembayaranRef && buktiPembayaranRef.current && currentData.buktiPembayaran) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(currentData.buktiPembayaran);
        buktiPembayaranRef.current.files = dataTransfer.files;
      }
    }
  }, [currentStep, currentData]);

  const checkFile = (fileRef, optional = false) => {
    if (optional) {
      if (!fileRef.current.files[0]) {
        return "";
      }
    }
    if (!fileRef.current.files[0]) {
      return "File is Required!";
    }
    const currentFile = fileRef.current.files[0];
    if (currentFile.size > getFileSizeMb(1)) {
      return "Max file size is 1mb!";
    }
    return "";
  };

  const verifyRegistration = async ({ status }) => {
    const { teamLeader, teamMembers, payment } = currentData;
    const form = new FormData();
    form.append("teamLeader", teamLeader);
    form.append("teamMembers", teamMembers);
    form.append("payment", payment);
    form.append("status", status);

    try {
      await fetch("/api/verify-registration", {
        method: "POST",
        body: form,
      });
      toastNotify("success", "Registration verified successfully!");
    } catch (error) {
      console.error("Error verifying registration:", error);
      toastNotify("error", "Failed to verify registration.");
    }
  };

  const onSubmitSubmission = (e) => {
    e.preventDefault();

    // Validate files
    const idCardErr = checkFile(idCardRef);
    const followErr = checkFile(followRef);
    const mentionErr = checkFile(mentionRef);
    const repostErr = checkFile(repostRef);
    const twibbonErr = checkFile(twibbonRef);
    const buktiPembayaranErr = checkFile(
      buktiPembayaranRef
      // currentData.payment === "international",
    );

    if (!rekeningRef.current.value) {
      setRekeningError("AccountNumber is required!");
    } else {
      setRekeningError("");
    }

    // Set errors in state for UI display
    setIDCardError(idCardErr);
    setFollowError(followErr);
    setMentionError(mentionErr);
    setRepostError(repostErr);
    setTwibbonError(twibbonErr);
    setBuktiPembayaranError(buktiPembayaranErr);

    // Stop submission if there are any errors
    if (
      idCardErr ||
      followErr ||
      mentionErr ||
      repostErr ||
      twibbonErr ||
      buktiPembayaranErr ||
      rekeningError
    ) {
      return;
    }

    // If all files are valid, proceed with submission
    setCurrentData((prev) => ({
      ...prev,
      idCard: idCardRef.current.files[0],
      follow: followRef.current.files[0],
      mention: mentionRef.current.files[0],
      repost: repostRef.current.files[0],
      twibbon: twibbonRef.current.files[0],
      buktiPembayaran: buktiPembayaranRef.current.files[0],
      rekening: rekeningRef.current.value,
    }));

    goToNextStep();
  };

  const handleIDCardChange = (e) => {
    if (!e.target?.files[0]) setCurrentIDCard(null);
    else setCurrentIDCard(e.target.files[0].name);
  };

  const handleFollowChange = (e) => {
    if (!e.target?.files[0]) setCurrentFollow(null);
    else setCurrentFollow(e.target.files[0].name);
  };

  const handleMentionChange = (e) => {
    if (!e.target?.files[0]) setCurrentMention(null);
    else setCurrentMention(e.target.files[0].name);
  };

  const handleRepostChange = (e) => {
    if (!e.target?.files[0]) setCurrentRepost(null);
    else setCurrentRepost(e.target.files[0].name);
  };

  const handleTwibbonChange = (e) => {
    if (!e.target?.files[0]) setCurrentTwibbon(null);
    else setCurrentTwibbon(e.target.files[0].name);
  };

  const handleBuktiPembayaranChange = (e) => {
    if (!e.target?.files[0]) setCurrentBuktiPembayaran(null);
    else setCurrentBuktiPembayaran(e.target.files[0].name);
  };

  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const createCallbacks = ({ showSuccess, showError }) => ({
    onSuccess: () => {
      // window.location.reload();
      verifyRegistration({ status: "Verified" });
    },
    onPending: () => {
      showSuccess("Payment initiated. Please complete it to finalize your registration.");
      // window.location.reload();
    },
    onError: () => {
      showError("Payment failed or was cancelled. Please try again.");
      verifyRegistration({ status: "Rejected" });
    },
    onClose: () => {
      showError("Payment popup closed. No transaction was made.");
      // window.location.reload();
    },
  });

  const [snapInitialized, setSnapInitialized] = useState(false);

  // Helper Functions
  const callbacks = {
    showError: (error: string) => {
      toastNotify("error", error);
    },
    showSuccess: (result: string) => {
      toastNotify("success", result);
    },
    showLoading: (text: string) => {
      toastNotify("info", text);
    },
    dismissLoading: () => {},
  };

  const handleSubmitFile = async (e) => {
    const {
      teamLeader,
      payment,
      teamMembers,
      idCard,
      follow,
      mention,
      repost,
      twibbon,
      buktiPembayaran,
      rekening,
    } = currentData;
    const form = new FormData();
    form.append("teamLeader", teamLeader);
    form.append("teamMembers", teamMembers);
    form.append("payment", payment);
    form.append("idCard", idCard);
    form.append("follow", follow);
    form.append("mention", mention);
    form.append("repost", repost);
    form.append("twibbon", twibbon);
    form.append("competition", "180DC BCC");
    form.append("buktiPembayaran", buktiPembayaran);
    form.append("rekening", rekening);
    e.preventDefault();

    // Register
    try {
      setLoading(true);
      const res = await fetch("/api/register-case-competition", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error from server:", errorData);
        return;
      }

      const result = await res.json(); // parsed result
      if (res.status !== 200) {
        toastNotify("error", result?.message || "Server Error");
        return;
      }

      // if (currentData.payment === "national") {
      //   const snapToken = result.body.snap_token;

      //   if (!snapToken) {
      //     toastNotify("success", "Registration successful!");
      //   } else {
      //     callbacks.dismissLoading();
      //     if (!window.snap || !snapInitialized) {
      //       callbacks.showError("Snap not ready");
      //       setLoading(false);
      //       return;
      //     }
      //     window.snap.pay(snapToken, createCallbacks(callbacks));
      //     toastNotify(
      //       "success",
      //       "Payment initiated. Please complete it to finalize your registration.",
      //     );
      //   }
      // }

      // if (currentData.payment === "international") {
      // verifyRegistration({ status: "Verified" });
      // }

      setDone(true);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
      toastNotify("error", "Registration Failed!");
    }
  };

  // Initializer
  // useEffect(() => {
  //   let isError = false;
  //   const runAll = async () => {
  //     toastNotify("info", "Preparing your form...");

  //     const paymentPromise = (async () => {
  //       try {
  //         const res = await fetch("/api/midtrans/get-client", {
  //           method: "GET",
  //         });

  //         const json = await res.json();
  //         const clientKey = json.client_key;
  //         const isProduction = json.is_production;

  //         if (!clientKey) {
  //           toastNotify("error", "Payment not activated");
  //           return;
  //         }
  //         if (!window.snap) {
  //           const script = document.createElement("script");
  //           script.src = isProduction
  //             ? "https://app.midtrans.com/snap/snap.js"
  //             : "https://app.sandbox.midtrans.com/snap/snap.js";
  //           script.setAttribute("data-client-key", clientKey);
  //           script.onload = () => setSnapInitialized(true);
  //           script.onerror = () => toastNotify("error", "Snap load failed");
  //           document.head.appendChild(script);
  //         } else {
  //           setSnapInitialized(true);
  //         }

  //         toastNotify("success", "Payment system loaded successfully");
  //       } catch (error) {
  //         toastNotify("error", "Payment system error " + error?.message);
  //         isError = true;
  //       }
  //     })();

  //     await Promise.allSettled([paymentPromise]);

  //     if (isError) {
  //       toastNotify("error", "Failed to load form. Please contact admin!");
  //       return;
  //     }

  //     toastNotify("success", "Your form is ready to be filled");
  //   };

  //   runAll();
  // }, []);

  if (currentData.payment === null) {
    return (
      <section className="bg-black-300 relative flex min-h-screen items-center justify-center text-white">
        <Image
          src="/img/casecomp/bg-hero-form-landing.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-0 h-screen w-full object-cover"
        />
        {/* Title Section */}
        <div className="z-10 container mx-auto flex flex-col items-center py-12 text-center">
          <h1 className="mt-[10vh] mb-4 text-3xl font-bold lg:text-5xl">
            <span className="bg-linear-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
              Select Payment Method
            </span>
          </h1>
          <div className="mt-3 flex items-center gap-4 gap-x-[2vw] text-lg lg:text-3xl">
            <button
              type="button"
              className="rounded-xl bg-green-500 px-4 py-2 font-bold transition-all duration-500 hover:scale-110 hover:bg-gray-800 hover:text-white"
              onClick={() => setCurrentData((prev) => ({ ...prev, payment: "national" }))}
            >
              National
            </button>
            <button
              type="button"
              className="flex items-center rounded-xl bg-green-500 px-4 py-2 font-bold transition-all duration-500 hover:scale-110 hover:bg-gray-800 hover:text-white"
              onClick={() => setCurrentData((prev) => ({ ...prev, payment: "international" }))}
            >
              International
            </button>
          </div>
        </div>
      </section>
    );
  }
  // Page
  return (
    <section ref={headRef} className="bg-black-300 relative min-h-screen text-white">
      <Image
        src="/img/store/casebook/greenstar.png"
        alt="greenstar"
        width={2000}
        height={2000}
        className="absolute -top-[10vw] -left-[20vw] z-20 h-[49.07vw] w-[68.27vw] scale-[0.2] max-lg:hidden lg:bottom-[10%]"
      />

      {/* Title Section */}
      <div className="z- container mx-auto py-12 text-center">
        <h1 className="mt-[10vh] mb-4 text-4xl font-bold">
          <span className="z-10 bg-linear-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
            Team Registration
          </span>
        </h1>
        {/* <p className="mx-auto max-w-md text-gray-300">
          Faucibus tempor in condimentum suscipit diam. Rhoncus diam a felis nunc.
        </p> */}
      </div>

      {/* Form Section */}
      <div className="z-20 container mx-auto pb-16">
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
                  <NavigationButtons
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    showPrevious
                    buttonText={"Next"}
                  />
                </Form>
              </RenderIf>
              <RenderIf when={currentStep === 3}>
                <Form onSubmit={onSubmitSubmission}>
                  <FormFile
                    ref={idCardRef}
                    currentState={currentIDCard}
                    error={idCardError}
                    label="ID Card"
                    tag="idCard"
                    // accept="application/pdf"
                    placeholder="Choose file! Send the compiled file consisting of all the team members’ documents"
                    onChange={handleIDCardChange}
                  />
                  <FormFile
                    ref={followRef}
                    currentState={currentFollow}
                    error={followError}
                    label="Follow"
                    tag="follow"
                    // accept="image/png, image/jpeg"
                    placeholder="Choose file! Send the compiled file consisting of all the team members’ documents"
                    onChange={handleFollowChange}
                  />
                  <FormFile
                    ref={repostRef}
                    currentState={currentRepost}
                    error={repostError}
                    label="Repost"
                    tag="repost"
                    // accept="image/png, image/jpeg"
                    placeholder="Choose file! Send the compiled file consisting of all the team members’ documents"
                    onChange={handleRepostChange}
                  />
                  <FormFile
                    ref={twibbonRef}
                    currentState={currentTwibbon}
                    error={twibbonError}
                    label="Twibbon"
                    tag="twibbon"
                    // accept="image/png, image/jpeg"
                    placeholder="Choose file! Send the compiled file consisting of all the team members’ documents"
                    onChange={handleTwibbonChange}
                  />
                  <FormFile
                    ref={mentionRef}
                    currentState={currentMention}
                    error={mentionError}
                    label="Mention"
                    tag="mention"
                    // accept="image/png, image/jpeg"
                    placeholder="Choose file! Mention on your Twibbon’s Caption"
                    onChange={handleMentionChange}
                  />
                  <FormFile
                    ref={buktiPembayaranRef}
                    currentState={currentBuktiPembayaran}
                    error={buktiPembayaranError}
                    label="Payment Proof"
                    tag="buktiPembayaran"
                    // accept="image/png, image/jpeg"
                    onChange={handleBuktiPembayaranChange}
                    className={
                      currentData.payment === "international" || currentData.payment === "national"
                        ? ""
                        : "hidden"
                    }
                  />

                  <div className="container mx-auto mb-6 px-4">
                    <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md lg:flex-row lg:items-center">
                      <div className="text-sm leading-relaxed font-medium text-gray-800 lg:text-base">
                        <p>
                          BCA Account: <span className="font-semibold">6975323980</span>
                        </p>
                        <p>
                          Account Name: <span className="font-semibold">Jacques Ethan N G</span>
                        </p>
                        <p>
                          SWIFT Code: <span className="font-semibold">CENAIDJA</span>
                        </p>
                      </div>

                      <div className="rounded-md bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white lg:text-right lg:text-base">
                        <p>National: IDR 199,000</p>
                        <p>International: $15</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn("mb-4", currentData.payment === "international" ? "" : "hidden")}
                  >
                    <label className="mb-2 block text-sm font-medium text-gray-700 lg:text-base">
                      Registrant Account Number
                    </label>

                    <input
                      ref={rekeningRef}
                      placeholder={
                        currentData.payment === "international"
                          ? "HSBC 12345678 a.n John Doe"
                          : "Mandiri 12345678 a.n John Doe"
                      }
                      className="w-full rounded-sm bg-gray-100 p-3 outline-0"
                    />
                    {rekeningError && <p className="mt-1 text-sm text-red-500">{rekeningError}</p>}
                  </div>

                  <NavigationButtons
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    showPrevious
                    buttonText={"Next"}
                  />
                </Form>
              </RenderIf>
              <RenderIf when={currentStep === 4}>
                <Form onSubmit={handleSubmitFile}>
                  <div className="text-center">
                    <div className="mb-4 flex items-center justify-center text-gray-700">
                      {loading ? (
                        <div className="flex flex-col items-center">
                          <Image
                            width={2000}
                            height={2000}
                            alt="Loading..."
                            src="/img/loading/loading.gif"
                            className="w-[50%]"
                            unoptimized
                          />
                          <p className="mt-4 text-sm text-gray-600">
                            Submitting Your Data, Please wait...
                          </p>
                          <p className="mt-4 text-sm text-gray-600">
                            If the process takes too long
                          </p>
                          <p className="mt-4 text-sm text-gray-600">
                            please contact Nayya +62 856-9232-9601 for confirmation.
                          </p>
                        </div>
                      ) : done ? (
                        <>Registration Successfull</>
                      ) : (
                        <span>
                          {" "}
                          Please review all the information you have entered. <br />
                          Press <strong>Register</strong> to confirm your registration.
                        </span>
                      )}
                    </div>
                  </div>
                  <NavigationButtons
                    currentStep={currentStep}
                    disableRightButton={loading || done}
                    setCurrentStep={setCurrentStep}
                    showPrevious
                    buttonText={loading ? "Loading" : done ? "Success" : "Register"}
                  />
                </Form>
              </RenderIf>
            </>
          )}
        </div>
      </div>

      <div className="z- container mx-auto py-12 text-center">
        <p className="mx-auto max-w-md text-gray-300">
          If there any trouble, kindly chat: <br />
        </p>
        <p className="mx-auto font-semibold text-green-500 lg:text-[1.7vw]">
          Nayya +62 856-9232-9601
        </p>
      </div>
    </section>
  );
}
