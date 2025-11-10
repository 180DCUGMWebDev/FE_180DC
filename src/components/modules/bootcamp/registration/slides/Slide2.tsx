"use client";

import InputField from "@/components/modules/bootcamp/registration/components/InputField";
import SelectField from "@/components/modules/bootcamp/registration/components/SelectField";
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
  faculty: string;
  major: string;
  motivation: string;
  cv: string;

  fullName_p2?: string;
  email_p2?: string;
  whatsapp_p2?: string;
  university_p2?: string;
  batch_p2?: string;
  faculty_p2?: string;
  major_p2?: string;
  motivation_p2?: string;
  cv_p2?: string;

  findUs: string;
  drive_link: string;
  paymentProof: FileList;
};

const ParticipantFormFields = ({
  participantNumber = 1,
  register,
  control,
  errors,
}: {
  participantNumber: 1 | 2;
  register: any;
  control: any;
  errors: any;
}) => {
  const prefix = participantNumber === 1 ? "" : "_p2";
  const findUsOptions = ["Instagram", "LinkedIn", "Friends", "Others"];
  const igLink = "https://www.instagram.com/180dcugm";

  return (
    <div className="mb-8 rounded-lg border border-gray-200 p-6">
      <h3 className="mb-4 text-xl font-semibold">
        {participantNumber === 1 ? "Participant 1" : "Participant 2"}
      </h3>

      <InputField<FormData>
        label="Full Name"
        name={`fullName${prefix}`}
        register={register}
        error={errors[`fullName${prefix}`]}
        validationRules={{ required: "Name is required" }}
        placeholder="ex: John Doe"
      />
      <InputField<FormData>
        label="Email Address"
        name={`email${prefix}`}
        register={register}
        error={errors[`email${prefix}`]}
        type="email"
        validationRules={{ required: "Email is required" }}
        placeholder="ex: john.doe@example.com"
      />
      <InputField<FormData>
        label="WhatsApp Number"
        name={`whatsapp${prefix}`}
        register={register}
        error={errors[`whatsapp${prefix}`]}
        type="tel"
        validationRules={{ required: "WhatsApp is required" }}
        placeholder="ex: 081234567890"
      />
      <InputField<FormData>
        label="University / School"
        name={`university${prefix}`}
        register={register}
        error={errors[`university${prefix}`]}
        validationRules={{ required: "University / School is required" }}
        placeholder="ex: Universitas Gadjah Mada"
      />
      <InputField<FormData>
        label="Batch / Year"
        name={`batch${prefix}`}
        register={register}
        error={errors[`batch${prefix}`]}
        validationRules={{ required: "Batch is required" }}
        placeholder="ex: 2023"
      />

      {/* --- TAMBAHAN BARU (FACULTY & MAJOR) --- */}
      <InputField<FormData>
        label="Faculty"
        name={`faculty${prefix}`}
        register={register}
        error={errors[`faculty${prefix}`]}
        validationRules={{ required: "Faculty is required" }}
        placeholder="ex: Engineering"
      />
      <InputField<FormData>
        label="Major"
        name={`major${prefix}`}
        register={register}
        error={errors[`major${prefix}`]}
        validationRules={{ required: "Major is required" }}
        placeholder="ex: Computer Science"
      />

      <InputField<FormData>
        label="Motivation Letter"
        as="textarea"
        name={`motivation${prefix}`}
        register={register}
        error={errors[`motivation${prefix}`]}
        validationRules={{ required: "Motivation Letter is required" }}
        placeholder="ex: I am passionate about consulting and want to develop my skills..."
      />
      <InputField<FormData>
        label="Link CV (Google Drive, etc), Make sure the access is set to 'Anyone with the link'"
        name={`cv${prefix}`}
        register={register}
        error={errors[`cv${prefix}`]}
        type="url"
        validationRules={{ required: "CV Link is required" }}
        placeholder="ex: https://drive.google.com/..."
      />
      <SelectField<FormData>
        control={control}
        name="findUs"
        label="How did you find us?"
        placeholder="Select an option..."
        options={findUsOptions}
        validationRules={{ required: "Please select one option" }}
        error={errors.findUs}
      />

      <div className="mt-4">
        <div className="mb-4 rounded-md border-2 border-green-300/50 bg-gray-50/50 p-4">
          <p className="font-lato-regular text-sm leading-relaxed text-gray-700">
            <span className="font-lato-bold">Required screenshots:</span>
          </p>
          <ol className="font-lato-regular mt-2 ml-4 list-decimal space-y-1 text-sm text-gray-700">
            <li>
              Following our Instagram{" "}
              <a
                href={igLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-lato-bold text-blue-600 hover:underline"
              >
                @180dcugm
              </a>
            </li>
            <li>Sharing the bootcamp poster on your Instagram story</li>
            <li>Screenshot the proofs and insert them in a Google Drive</li>
          </ol>
          <p className="font-lato-regular mt-3 text-xs text-gray-600">
            💡 <span className="font-lato-bold">Tip:</span> Upload both screenshots to one Google
            Drive folder and share the link below
          </p>
        </div>

        <InputField<FormData>
          label="Google Drive Link"
          name="drive_link"
          register={register}
          error={errors.drive_link}
          placeholder="https://drive.google.com/..."
          validationRules={{
            required: "Drive link is required",
            pattern: { value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i, message: "Invalid URL" },
          }}
        />
      </div>
    </div>
  );
};

// --- Komponen Utama Slide 2 ---
export default function Slide2({ regType, onNext, onBack }: Slide2Props) {
  // Ambil SEMUA alat dari RHF
  const {
    register,
    control,
    trigger,
    formState: { errors },
  } = useFormContext<FormData>();

  const handleNext = async () => {
    // 1. Tentukan field P1 + field umum
    const fieldsToValidate: (keyof FormData)[] = [
      "fullName",
      "email",
      "whatsapp",
      "university",
      "batch",
      "faculty",
      "major",
      "motivation",
      "cv",
      "findUs",
      "drive_link", // <-- Field baru
    ];

    // 2. Jika 'duo', tambahkan P2
    if (regType === "duo") {
      fieldsToValidate.push(
        "fullName_p2",
        "email_p2",
        "whatsapp_p2",
        "university_p2",
        "batch_p2",
        "faculty_p2",
        "major_p2",
        "motivation_p2",
        "cv_p2"
      );
    }

    // 3. Validasi semua
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-8 text-center text-2xl font-semibold">Participant Details</h2>

      {/* --- Form Peserta 1 (Selalu tampil) --- */}
      <ParticipantFormFields
        participantNumber={1}
        register={register}
        control={control}
        errors={errors}
      />

      {/* --- Form Peserta 2 (Tampil HANYA JIKA 'duo') --- */}
      {regType === "duo" && (
        <ParticipantFormFields
          participantNumber={2}
          register={register}
          control={control}
          errors={errors}
        />
      )}

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
