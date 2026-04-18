"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { useCart } from "../../context/CartContext";
import { toast } from "sonner";
import FormUploadField from "../components/FormUploadField";

interface Step2Props {
  onPrev: () => void;
  isSubmitting: boolean;
  grandTotal: number;
}

export default function Step2Payment({ onPrev, isSubmitting, grandTotal }: Step2Props) {
  const { totalPrice } = useCart();
  const {
    register,
    formState: { errors },
    trigger,
    clearErrors,
    watch,
    setValue,
  } = useFormContext();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  const handleFieldValidation = async (fieldName: string) => {
    if (isSubmitting) {
      const isValid = await trigger(fieldName);
      if (isValid) clearErrors(fieldName);
    }
  };

  const inputClass = (fieldName: string) =>
    `w-full rounded-lg border bg-[#222222] p-3 text-sm text-white outline-none transition-all placeholder-gray-500 focus:border-[#75C44D] ${
      errors[fieldName] ? "border-red-500/50" : "border-white/20"
    }`;

  return (
    <div className="flex flex-col gap-6">
      {/* Payment Info Card */}
      <div className="rounded-2xl bg-[#333333] p-6 shadow-xl">
        <h2 className="font-avenir-black mb-2 text-2xl text-white">Payment</h2>
        <p className="font-lato-regular mb-6 text-sm text-gray-400">
          You are one step away! Please complete your payment.
        </p>

        {/* Total */}
        <div className="mb-6 rounded-xl bg-[#222222] p-5">
          <p className="font-avenir-regular text-sm text-gray-400">Total Payment (incl. Shipping)</p>
          <p className="font-avenir-black mt-1 text-3xl text-white">{formatPrice(grandTotal)}</p>
        </div>

        {/* Bank Info */}
        <div className="mb-6 rounded-xl border border-white/10 bg-[#222222] p-5">
          <h3 className="font-avenir-heavy mb-4 text-base text-white">Transfer to This Account</h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Bank Name:</span>
              <span className="font-semibold text-white">blu by BCA</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 border-t border-white/5 pt-3">
              <span className="text-gray-400">Account Number:</span>
              <span className="font-avenir-black text-lg text-[#75C44D]">0072 6270 9150</span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText("007262709150");
                  toast.success("Account number copied!");
                }}
                className="rounded-md bg-[#75C44D]/20 px-3 py-1 text-xs font-medium text-[#75C44D] transition-colors hover:bg-[#75C44D]/30"
              >
                Copy
              </button>
            </div>
            <div className="flex items-center gap-2 border-t border-white/5 pt-3">
              <span className="text-gray-400">Account Holder:</span>
              <span className="font-semibold text-white">Keyra Audrey Annabelle Christian</span>
            </div>
          </div>

          <p className="mt-4 text-xs italic text-gray-500">
            <span className="text-red-400">*</span> Make sure to transfer the exact amount and
            upload your payment proof below
          </p>
        </div>

        {/* Payment Proof Upload */}
        <div className="mb-6">
          <FormUploadField
            label="Upload Payment Proof"
            name="paymentProofUrl"
            paymentProofFileName="paymentProofFileName"
            register={register}
            watch={watch}
            setValue={setValue}
            accept="image/*"
            maxSizeKB={500}
            bucketName="merch-order-2526"
            validationRules={{
              required: "Payment proof is required",
            }}
          />
        </div>

        {/* Refund Account */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-semibold text-gray-300">
            Refund Account <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            {...register("refundAccount", {
              required: "Refund account is required",
              validate: {
                notEmpty: (v: string) => v.trim() !== "" || "Refund account cannot be empty",
              },
              onChange: () => handleFieldValidation("refundAccount"),
            })}
            placeholder="ex: Mandiri, Gopay, LinkAja"
            className={inputClass("refundAccount")}
          />
          {errors.refundAccount && (
            <p className="mt-1 text-sm text-red-400">{errors.refundAccount.message as string}</p>
          )}
        </div>

        {/* Refund Number */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-300">
            Refund Number <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            {...register("refundNumber", {
              required: "Refund number is required",
              validate: {
                notEmpty: (v: string) => v.trim() !== "" || "Refund number cannot be empty",
              },
              onChange: () => handleFieldValidation("refundNumber"),
            })}
            placeholder="ex: 007262709150"
            className={inputClass("refundNumber")}
          />
          {errors.refundNumber && (
            <p className="mt-1 text-sm text-red-400">{errors.refundNumber.message as string}</p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          disabled={isSubmitting}
          className="font-avenir-heavy flex h-12 items-center justify-center rounded-lg border border-white/20 px-8 text-white transition-all hover:bg-white/5 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-avenir-black flex h-12 items-center justify-center rounded-lg bg-[#75C44D] px-10 text-white transition-all hover:bg-[#82D956] disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Order"}
        </button>
      </div>
    </div>
  );
}
