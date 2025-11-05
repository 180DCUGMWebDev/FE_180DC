"use client";

import InputField from "@/components/modules/bootcamp/registration/components/InputField";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/elements/Form/button";

interface Slide2Props {
  regType: "individual" | "duo";
  onNext: () => void;
  onBack: () => void;
}

type FormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  university: string;
  batch: string;
  motivation: string;
  cv: string;

  fullName_p2?: string;
  email_p2?: string;
  whatsapp_p2?: string;
  university_p2?: string;
  batch_p2?: string;
  motivation_p2?: string;
  cv_p2?: string;
};

const ParticipantFormFields = ({
  participantNumber = 1,
  register,
  errors,
}: {
  participantNumber: 1 | 2;
  register: any; // (Bisa pakai tipe lebih spesifik dari RHF)
  errors: any;
}) => {
  // Tentukan prefix nama field. P1 = '', P2 = '_p2'
  const prefix = participantNumber === 1 ? "" : "_p2";

  return (
    <div className="mb-8 rounded-lg border border-gray-200 p-6">
      <h3 className="mb-4 text-xl font-semibold">
        {participantNumber === 1 ? "Participant 1 Data" : "Participant 2 Data"}
      </h3>

      <InputField<FormData>
        label="Full Name"
        name={`fullName${prefix}`}
        register={register}
        error={errors[`fullName${prefix}`]}
        validationRules={{ required: "Full Name is required" }}
        placeholder="Your Full Name"
      />

      <InputField<FormData>
        label="Email Address"
        name={`email${prefix}`}
        register={register}
        error={errors[`email${prefix}`]}
        type="email"
        validationRules={{
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
        }}
        placeholder="johndoe@example.com"
      />

      <InputField<FormData>
        label="WhatsApp Number (e.g., 628xxxx)"
        name={`whatsapp${prefix}`}
        register={register}
        error={errors[`whatsapp${prefix}`]}
        type="tel"
        validationRules={{ required: "WhatsApp Number is required" }}
        placeholder="628xxxx"
      />

      <InputField<FormData>
        label="University / School Name"
        name={`university${prefix}`}
        register={register}
        error={errors[`university${prefix}`]}
        validationRules={{ required: "University / School Name is required" }}
        placeholder="e.g., Gadjah Mada University"
      />

      <InputField<FormData>
        label="Batch / Year"
        name={`batch${prefix}`}
        register={register}
        error={errors[`batch${prefix}`]}
        placeholder="e.g., 2024"
        validationRules={{ required: "Batch / Year is required" }}
      />

      {/* Nanti ini bisa kamu ganti jadi <TextAreaField> biar lebih pas */}
      <InputField<FormData>
        label="What sparked your interest in our program?"
        name={`motivation${prefix}`}
        register={register}
        error={errors[`motivation${prefix}`]}
        placeholder="100 words or less..."
        validationRules={{
          required: "Motivation is required",
          maxLength: { value: 500, message: "Maximum 500 characters" }, // GForm 100 words
        }}
        as="textarea"
      />

      <InputField<FormData>
        label="CV Link (Google Drive)"
        name={`cv${prefix}`}
        register={register}
        error={errors[`cv${prefix}`]}
        type="url"
        placeholder="https://drive.google.com/..."
        validationRules={{
          required: "CV Link is required",
          pattern: {
            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
            message: "Invalid URL format (must start with https://)",
          },
        }}
      />
    </div>
  );
};

export default function Slide2({ regType, onNext, onBack }: Slide2Props) {
  // Ambil 'alat' dari parent (RegistrationView)
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<FormData>(); // <-- Tentukan tipe FormData di sini

  // Fungsi validasi sebelum lanjut
  const handleNext = async () => {
    // Tentukan SEMUA field yang harus divalidasi di step ini
    const fieldsToValidate: (keyof FormData)[] = [
      "fullName",
      "email",
      "whatsapp",
      "university",
      "batch",
      "motivation",
      "cv",
    ];

    // Jika 'duo', tambahkan field P2 ke daftar validasi
    if (regType === "duo") {
      fieldsToValidate.push(
        "fullName_p2",
        "email_p2",
        "whatsapp_p2",
        "university_p2",
        "batch_p2",
        "motivation_p2",
        "cv_p2"
      );
    }

    // Picu validasi
    const isValid = await trigger(fieldsToValidate);

    // Jika valid, baru pindah ke step selanjutnya
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-avenir-heavy mb-8 text-center text-2xl text-green-400">
        Participant Details
      </h2>

      {/* --- Form Peserta 1 (Selalu tampil) --- */}
      <ParticipantFormFields participantNumber={1} register={register} errors={errors} />

      {/* --- Form Peserta 2 (Tampil HANYA JIKA 'duo') --- */}
      {regType === "duo" && (
        <ParticipantFormFields participantNumber={2} register={register} errors={errors} />
      )}

      {/* --- Tombol Navigasi --- */}
      <div className="mt-10 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="button" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
