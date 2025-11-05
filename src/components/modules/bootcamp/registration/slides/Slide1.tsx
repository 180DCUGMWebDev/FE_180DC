"use client";

import React from "react";
import Button180 from "@/components/elements/Button180";
import { Button } from "@/components/elements/Form/button";

type RegistrationType = "individual" | "duo";

interface Slide1Props {
  setRegType: (type: RegistrationType) => void;
  onNext: () => void;
}

export default function Slide1({ setRegType, onNext }: Slide1Props) {
  const handleSelectIndividual = () => {
    setRegType("individual"); // 1. Set statenya di parent
    onNext(); // 2. Panggil fungsi onNext dari parent
  };
  const handleSelectDuo = () => {
    setRegType("duo"); // 1. Set statenya di parent
    onNext(); // 2. Panggil fungsi onNext dari parent
  };

  return (
    <div className="mx-auto max-w-lg">
      <h2 className="font-avenir-black mb-4 bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-center text-3xl text-transparent">
        Secure your spot now!
      </h2>
      <p className="font-lato-regular mb-8 text-center text-gray-600">
        Register for the bootcamp. Please select one of the options below.
      </p>

      <div className="space-y-4">
        <Button
          type="button"
          variant="outline" // 'outline' adalah variant abu-abu ShadCN
          size="lg" // Pakai size 'lg'
          className="h-auto w-full py-6" // Bikin tombolnya tebal
          onClick={handleSelectIndividual}
        >
          Register Individually
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-auto w-full py-6"
          onClick={handleSelectDuo}
        >
          Register as a Duo (2 People)
        </Button>
      </div>

      {/* Di step 1 tidak ada tombol "Back" */}
    </div>
  );
}
