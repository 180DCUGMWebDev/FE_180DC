import React from "react";
import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import { MessageCircle } from "lucide-react";

const SubmitSlide = () => {
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

      <h2 className="font-avenir-black mt-6 text-3xl text-gray-800">Registration Complete!</h2>

      <div className="mx-auto max-w-md text-gray-600">
        <p className="font-lato-regular text-lg">
          Thank you for registering your team for the 180DC Video Case Competition.
        </p>
        <p className="font-lato-regular mt-4">
          Please join the WhatsApp group using the link below for further updates on the
          competition.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Button180
          text="Join WhatsApp Group"
          color="green"
          size="md"
          href="https://chat.whatsapp.com/Ifz0bQ52rX54u3wG34F0v9"
          icon={<MessageCircle className="h-5 w-5" />}
        />
      </div>
    </div>
  );
};

export default SubmitSlide;
