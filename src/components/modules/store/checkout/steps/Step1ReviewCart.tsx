"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useCart, getCartKey } from "../../context/CartContext";
import ProductRow from "../components/ProductRow";
import { toast } from "sonner";

interface Step1Props {
  onNext: () => void;
}

export default function Step1ReviewCart({ onNext }: Step1Props) {
  const { cart, totalPrice } = useCart();
  const [hasAttemptedNext, setHasAttemptedNext] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "delivery">("pickup");

  const {
    register,
    formState: { errors },
    trigger,
    clearErrors,
    setValue,
    watch,
  } = useFormContext();

  const isDelivery = deliveryMethod === "delivery";

  // Sync delivery method to form
  React.useEffect(() => {
    setValue("isDelivery", isDelivery);
    if (!isDelivery) {
      setValue("fullAddress", "");
      setValue("area", "");
      clearErrors(["fullAddress", "area"]);
    }
  }, [isDelivery, setValue, clearErrors]);

  const emailPattern = {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  };

  const whatsappPattern = {
    value: /^[0-9]{10,15}$/,
    message: "Please enter a valid WhatsApp number (10-15 digits)",
  };

  const handleFieldValidation = async (fieldName: string) => {
    if (hasAttemptedNext) {
      const isValid = await trigger(fieldName);
      if (isValid) clearErrors(fieldName);
    }
  };

  const handleNext = async () => {
    setHasAttemptedNext(true);

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const fieldsToValidate = isDelivery
      ? ["name", "email", "whatsapp", "fullAddress", "area"]
      : ["name", "email", "whatsapp"];
    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      onNext();
    } else {
      toast.error("Please complete all required fields");
    }
  };

  const inputClass = (fieldName: string) =>
    `w-full rounded-lg border bg-[#222222] p-3 text-sm text-white outline-none transition-all placeholder-gray-500 focus:border-[#75C44D] ${
      errors[fieldName] ? "border-red-500/50" : "border-white/20"
    }`;

  return (
    <div className="flex flex-col gap-6">
      {/* Cart Items */}
      <div>
        <h2 className="font-avenir-black mb-4 text-2xl text-white">Your Cart</h2>

        {/* Table Header - Desktop only */}
        <div className="hidden w-full flex-row items-center justify-between rounded-full bg-[#222222] px-4 py-3 text-sm font-semibold text-white shadow-md md:flex">
          <div className="w-[35%] px-2">Product</div>
          <div className="flex w-[20%] justify-center">Unit Price</div>
          <div className="flex w-[15%] justify-center">Quantity</div>
          <div className="flex w-[20%] justify-center">Total Price</div>
          <div className="flex w-[10%] justify-center">Action</div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {cart.length === 0 ? (
            <div className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-[#222222] p-12 text-gray-400">
              Your cart is empty. Go back to store to add items.
            </div>
          ) : (
            cart.map((item) => <ProductRow key={getCartKey(item)} item={item} />)
          )}
        </div>

        {/* Total */}
        {cart.length > 0 && (
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#222222] px-6 py-4">
            <span className="font-avenir-heavy text-sm text-[#75C44D]">Total</span>
            <span className="font-avenir-black text-xl text-white">
              IDR {totalPrice.toLocaleString("id-ID")}
            </span>
          </div>
        )}
      </div>

      {/* Personal Information */}
      <div className="rounded-2xl bg-[#333333] p-6 shadow-xl">
        <h2 className="font-avenir-black mb-6 text-2xl text-white">Personal Information</h2>

        <div className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Full name is required",
                validate: { notEmpty: (v: string) => v.trim() !== "" || "Full name cannot be empty" },
                onChange: () => handleFieldValidation("name"),
              })}
              placeholder="Enter your full name"
              className={inputClass("name")}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message as string}</p>
            )}
          </div>

          {/* Email + WhatsApp row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: emailPattern,
                  onChange: () => handleFieldValidation("email"),
                })}
                placeholder="john@example.com"
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message as string}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                WhatsApp Number <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                {...register("whatsapp", {
                  required: "WhatsApp number is required",
                  pattern: whatsappPattern,
                  onChange: () => handleFieldValidation("whatsapp"),
                })}
                placeholder="08123456890"
                className={inputClass("whatsapp")}
              />
              {errors.whatsapp && (
                <p className="mt-1 text-sm text-red-400">{errors.whatsapp.message as string}</p>
              )}
            </div>
          </div>

          {/* Shipping Method */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Shipping Method <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="method"
                  value="pickup"
                  checked={deliveryMethod === "pickup"}
                  onChange={() => setDeliveryMethod("pickup")}
                  className="accent-[#75C44D]"
                />
                <span className="text-sm text-white">Pick Up at UGM</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="method"
                  value="delivery"
                  checked={deliveryMethod === "delivery"}
                  onChange={() => setDeliveryMethod("delivery")}
                  className="accent-[#75C44D]"
                />
                <span className="text-sm text-white">Delivery</span>
              </label>
            </div>
          </div>

          {/* Pickup Info */}
          {!isDelivery && (
            <div className="rounded-lg border border-white/10 bg-[#222222] p-3 text-sm text-gray-300">
              📍 Selasar Fisipol, Universitas Gadjah Mada, Yogyakarta
            </div>
          )}

          {/* Delivery Fields */}
          {isDelivery && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Full Address <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={3}
                  {...register("fullAddress", {
                    required: isDelivery ? "Full address is required" : false,
                    onChange: () => handleFieldValidation("fullAddress"),
                  })}
                  placeholder="Enter your full address"
                  className={`${inputClass("fullAddress")} resize-none`}
                />
                {errors.fullAddress && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.fullAddress.message as string}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Area <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  {...register("area", {
                    required: isDelivery ? "Area is required" : false,
                    onChange: () => handleFieldValidation("area"),
                  })}
                  placeholder="e.g. Sleman, Yogyakarta"
                  className={inputClass("area")}
                />
                {errors.area && (
                  <p className="mt-1 text-sm text-red-400">{errors.area.message as string}</p>
                )}
              </div>
              <div className="rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-3 text-xs text-yellow-200">
                ⚠️ <strong>Note:</strong> Shipping cost is borne by the user and will be calculated
                by the admin upon confirmation.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          disabled={cart.length === 0}
          className="font-avenir-black flex h-12 items-center justify-center rounded-lg bg-[#75C44D] px-10 text-white transition-all hover:bg-[#82D956] disabled:opacity-50"
        >
          Next — Payment
        </button>
      </div>
    </div>
  );
}
