"use client";

import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import UploadFileField from "../components/UploadFileField";
import { Button } from "@/components/elements/Form/button";

interface Slide4Props {
  regType: "individual" | "duo";
  buyCasebook: boolean;
  onBack: () => void;
  isSubmitting: boolean;
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
  paymentProof: FileList;
};

export default function Slide4({ regType, buyCasebook, onBack, isSubmitting }: Slide4Props) {
  // Ambil 'alat' dari parent (RegistrationView)
  const {
    register,
    watch,
    // trigger,
    formState: { errors },
  } = useFormContext<FormData>();

  // State untuk menyimpan detail pembayaran yang dinamis
  const [paymentDetails, setPaymentDetails] = useState({
    total: 0,
    breakdown: "",
  });

  // useEffect untuk menghitung total HANYA saat props berubah
  useEffect(() => {
    const commitmentFee = 50000;
    let bootcampFee = 0;
    let breakdownText = "";

    if (regType === "individual") {
      if (buyCasebook) {
        bootcampFee = 90000; // 70k + 20k casebook (sesuai GForm)
        breakdownText = `Bootcamp Fee + Casebook: IDR 90K + IDR 50K (Refundable)`;
      } else {
        bootcampFee = 70000;
        breakdownText = `Bootcamp Fee: IDR 70K + IDR 50K (Refundable)`;
      }
    } else if (regType === "duo") {
      bootcampFee = 133000;
      breakdownText = `Bootcamp Fee Duo: IDR 133K + IDR 50K (Refundable)`;
    }

    const totalPayment = bootcampFee + commitmentFee;

    setPaymentDetails({
      total: totalPayment,
      breakdown: breakdownText,
    });
  }, [regType, buyCasebook]); // <-- Dependency array

  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="font-avenir-black mb-4 text-center text-2xl">
        Finalize Your Registration & Secure Your Spot
      </h2>
      <p className="font-lato-regular mb-8 text-center text-gray-600">
        You are one step away! Please complete your payment to confirm your registration.
      </p>

      {/* --- Bagian Informasi (Copy dari GForm) --- */}
      <div className="mb-8 rounded-lg bg-gray-50 p-6">
        <h3 className="font-avenir-regular text-lg font-bold text-gray-900">
          Commitment Fee: Your Key to an Active Learning Experience
        </h3>
        <p className="font-lato-regular mt-2 text-sm text-gray-600">
          <strong className="font-lato-bold">What is the Rp 50,000 commitment fee for?</strong>
          <br />
          This refundable fee is designed to secure your active participation and ensure a dedicated
          learning environment for all attendees. It shows your commitment to fully engaging with
          the bootcamp.
        </p>
        <p className="font-lato-regular mt-2 text-sm text-gray-600">
          <strong className="font-lato-bold">How can I get the full refund?</strong>
          <br />
          1. Attend all scheduled sessions.
          <br />
          2. Complete all required tasks and assignments.
        </p>
        <p className="font-lato-regular mt-2 text-sm text-gray-600">
          <strong className="font-lato-bold">What happens if I miss a session or a task?</strong>
          <br />
          Missing sessions or failing to submit tasks will result in a partial or full forfeiture of
          the commitment fee, according to the specific terms outlined in our policy.
        </p>
      </div>

      {/* --- Total Pembayaran (Dinamis) --- */}
      <div className="mb-8 rounded-lg border-[2px] border-green-300/50 bg-white p-6">
        <h3 className="font-avenir-regular text-lg font-bold text-gray-700">Total Payment</h3>
        <p className="font-avenir-black mt-2 text-3xl text-black">
          {formatIDR(paymentDetails.total)}
        </p>
        <p className="font-lato-regular mt-1 text-sm text-gray-600">
          {paymentDetails.breakdown} ={" "}
          <strong className="font-lato-bold">IDR {paymentDetails.total / 1000}K</strong>
        </p>
      </div>

      {/* --- Form Upload --- */}
      <UploadFileField<FormData>
        label="Upload Payment Proof"
        name="paymentProof"
        register={register}
        watch={watch}
        error={errors.paymentProof}
        accept="image/*"
        maxSizeKB={500}
        validationRules={{
          required: "Payment proof is required",
          validate: {
            hasFile: (files: FileList) => files.length > 0 || "Payment proof is required",
          },
        }}
      />

      <div className="mt-10 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          // 'variant' tidak perlu diisi, 'default' (hijau) akan dipakai
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </Button>
      </div>
    </div>
  );
}
