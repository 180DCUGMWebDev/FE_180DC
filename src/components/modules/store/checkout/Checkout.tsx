"use client";

import React, { useState, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useCart, CartItem } from "../context/CartContext";
import CheckoutLayout from "./layout/CheckoutLayout";
import Stepper from "./components/Stepper";
import Step1ReviewCart from "./steps/Step1ReviewCart";
import Step2Payment from "./steps/Step2Payment";
import Step3Complete from "./steps/Step3Complete";

type CheckoutFormData = {
  // Personal info
  name: string;
  email: string;
  whatsapp: string;
  isDelivery: boolean;
  fullAddress?: string;
  area?: string;

  // Payment
  paymentProofUrl: string;
  paymentProofFileName: string;
  refundAccount: string;
  refundNumber: string;
};

const STORAGE_KEY = "180dc-checkout-progress";
const RECEIPT_KEY = "merch-receipt-data";

/**
 * Transform CartItem[] to order format expected by API
 */
function cartToOrderItems(cart: CartItem[]) {
  return cart.map((item) => ({
    name: item.name,
    type: item.type,
    price: item.price,
    quantity: item.quantity,
    ...(item.size && {
      variants: [{ size: item.size, quantity: item.quantity }],
    }),
  }));
}

const Checkout = () => {
  const { cart, totalPrice, isLoaded } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const methods = useForm<CheckoutFormData>({
    mode: "onChange",
    defaultValues: {
      isDelivery: false,
      paymentProofUrl: "",
      paymentProofFileName: "",
    },
  });
  const { watch, reset } = methods;

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  // Load saved progress
  useEffect(() => {
    if (!isLoaded) return;

    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const data = JSON.parse(savedProgress);
        if (data.formData) reset(data.formData);
        if (data.currentStep && data.currentStep < 3) setCurrentStep(data.currentStep);
        if (data.transactionId) setTransactionId(data.transactionId);
      } catch (error) {
        console.error("Failed to load progress:", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, [reset, isLoaded]);

  // Save progress
  const watchedData = watch();
  useEffect(() => {
    if (isLoading || !isLoaded) return;
    if (currentStep === 3) return;

    const progressData = {
      formData: watchedData,
      currentStep,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
  }, [watchedData, currentStep, isLoading, isLoaded]);

  // Navigation
  const handleNextStep = () => {
    if (currentStep === 1) setCurrentStep(2);
  };

  const handlePrevStep = () => {
    if (currentStep === 2) setCurrentStep(1);
  };

  // Submit
  const onSubmit: SubmitHandler<CheckoutFormData> = async (data) => {
    const isValid = await methods.trigger(["refundAccount", "refundNumber"]);
    if (!isValid) {
      toast.error("Please complete all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const orderPayload = {
        ...data,
        order: cartToOrderItems(cart),
        totalPrice,
      };

      const response = await fetch("/api/store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit. Please try again.");
      }

      toast.success("Order submitted successfully!");
      const orderData = result.data;
      setTransactionId(orderData.transaction_id);
      setCurrentStep(3);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(RECEIPT_KEY, JSON.stringify(orderData));
    } catch (error: any) {
      console.error("Submit error:", error);
      toast.error(`Error submitting order: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state
  if (isLoading || !isLoaded) return null;

  const steps = ["Review Cart", "Payment", "Complete"];

  return (
    <CheckoutLayout>
      <div className="flex w-full flex-col gap-6 px-4 pt-18 pb-24 md:px-12 lg:px-24">
        {/* Stepper */}
        {currentStep < 3 && <Stepper activeStep={currentStep} steps={steps} />}

        {/* Mobile step indicator */}
        {currentStep < 3 && (
          <div className="flex items-center justify-center gap-2 md:hidden">
            <span className="font-avenir-heavy text-sm text-[#75C44D]">
              Step {currentStep}
            </span>
            <span className="text-gray-500">/</span>
            <span className="font-avenir-regular text-sm text-gray-500">
              {steps[currentStep - 1]}
            </span>
          </div>
        )}

        {/* Form */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {currentStep === 1 && <Step1ReviewCart onNext={handleNextStep} />}
            {currentStep === 2 && (
              <Step2Payment onPrev={handlePrevStep} isSubmitting={isSubmitting} />
            )}
            {currentStep === 3 && <Step3Complete transactionId={transactionId} />}
          </form>
        </FormProvider>
      </div>
    </CheckoutLayout>
  );
};

export default Checkout;
