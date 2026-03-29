import React from "react";
import Button180 from "@/components/elements/Button180";

const SubmitSlide = ({ formData }) => {
  const isIndividual = formData?.regType === "individual";

  return (
    <div className="animate-fade-in flex flex-col items-center justify-center space-y-6 py-12 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="font-avenir-black mt-6 text-3xl text-gray-800">Registration Received! 🎉</h2>

      <div className="mx-auto max-w-2xl text-gray-600">
        <p className="font-lato-bold text-lg text-green-600">
          You are successfully registered for the 180DC Case Competition!
        </p>
        <p className="font-lato-regular mt-4 text-base">
          Our committee will review your submission and payment within 1x24 hours. A confirmation
          email will be sent to{" "}
          <span className="font-bold underline text-green-600">
            {isIndividual ? "your" : "the Team Leader’s"}
          </span>{" "}
          email address shortly.
        </p>
        <p className="font-lato-regular mt-6">
          Please check your inbox carefully, including Spam or Junk folders. If you have not
          received the email within 24 hours, kindly contact our contact persons for assistance.
        </p>
        <p className="font-avenir-heavy mt-8 text-lg">
          Thank you and we are excited to have you join the competition!
        </p>
      </div>
    </div>
  );
};

export default SubmitSlide;
