import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight, Upload, CheckCircle, Loader2 } from "lucide-react";
import { FileLimitModal } from "@/components/elements/FileLimitModal";

const Slide5 = ({ formData, updateFormData, onNext, isSubmitting, onSubmit }) => {
  const [paymentType, setPaymentType] = useState(formData.paymentType || "national");
  const [buktiPembayaranFile, setBuktiPembayaranFile] = useState<File | null>(
    formData.buktiPembayaranFile || null
  );
  const [rekening, setRekening] = useState(formData.rekening || "");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const isTeam = formData.regType === "team";
  const isValid = buktiPembayaranFile && rekening.trim() && paymentType;

  // Phase Handling
  const now = new Date();
  const earlyEnd = new Date("2026-04-05T23:59:59+07:00");
  const normalEnd = new Date("2026-04-27T23:59:59+07:00");

  let phaseName = "Normal";
  let priceIDR = "125.000";
  let priceUSD = "10";
  let phaseKey = "normal";

  if (now <= earlyEnd) {
    phaseName = "Early Bird";
    priceIDR = isTeam ? "100.000" : "65.000";
    priceUSD = isTeam ? "8" : "4";
    phaseKey = "early";
  } else if (now <= normalEnd) {
    phaseName = "Normal";
    priceIDR = isTeam ? "125.000" : "85.000";
    priceUSD = isTeam ? "10" : "6";
    phaseKey = "normal";
  } else {
    phaseName = "Late";
    priceIDR = isTeam ? "150.000" : "95.000";
    priceUSD = isTeam ? "12" : "8";
    phaseKey = "late";
  }

  const handleNext = () => {
    if (!isValid) {
      setShowErrors(true);
      return;
    }
    const latestData = {
      paymentType,
      ...(buktiPembayaranFile && { buktiPembayaranFile }),
      rekening,
      registrationPhase: phaseKey,
    };
    updateFormData(latestData);
    onSubmit(latestData);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <FileLimitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Payment
        </h2>
        <p className="font-lato-regular text-gray-600">Complete your registration payment</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">$</span>
          </div>
          Payment Selection ({isTeam ? "Team" : "Individual"} Registration - {phaseName} Phase)
        </h3>

        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setPaymentType("national")}
            className={`flex-1 rounded-xl border-2 p-4 transition-all duration-200 ${
              paymentType === "national"
                ? "border-green-300 bg-green-300 text-white shadow-md"
                : "border-gray-100 bg-gray-50 hover:border-green-200"
            }`}
          >
            <p
              className={`font-avenir-black text-lg ${paymentType === "national" ? "text-white" : "text-gray-800"}`}
            >
              National
            </p>
            <p
              className={`font-lato-regular text-sm ${paymentType === "national" ? "text-white" : "text-gray-500"}`}
            >
              IDR {priceIDR}
            </p>
          </button>
          <button
            onClick={() => setPaymentType("international")}
            className={`flex-1 rounded-xl border-2 p-4 transition-all duration-200 ${
              paymentType === "international"
                ? "border-green-300 bg-green-300 text-white shadow-md"
                : "border-gray-100 bg-gray-50 hover:border-green-200"
            }`}
          >
            <p
              className={`font-avenir-black text-lg ${paymentType === "international" ? "text-white" : "text-gray-800"}`}
            >
              International
            </p>
            <p
              className={`font-lato-regular text-sm ${paymentType === "international" ? "text-white" : "text-gray-500"}`}
            >
              ${priceUSD} USD
            </p>
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {paymentType === "national" ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 bg-gray-50 py-6">
                <Image
                  src="/img/videocasecomp/qris.jpeg"
                  alt="QRIS Payment"
                  width={250}
                  height={350}
                  className="rounded-xl object-contain shadow-md"
                />
                <p className="font-lato-regular mt-4 text-center text-sm text-gray-500">
                  Please scan the QRIS code above to complete your payment of{" "}
                  <strong className="text-gray-700">Rp {priceIDR},00</strong>.
                </p>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="font-lato-regular text-xs">or transfer via bank</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="rounded-lg border border-gray-100 bg-gray-50 px-6 py-4">
                <p className="font-avenir-heavy mb-1 text-sm text-gray-700">Bank Transfer (BNI)</p>
                <p className="font-lato-bold text-lg tracking-wide text-gray-900">2022144115</p>
                <p className="font-lato-regular text-sm text-gray-500">
                  a.n <strong className="text-gray-700">Zufar Purwa Sanosuke</strong>
                </p>
                <p className="font-lato-regular mt-2 text-xs text-gray-400">
                  Transfer amount: <strong className="text-gray-700">Rp {priceIDR},00</strong>
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-gray-100 bg-gray-50 px-6 py-4">
              <p className="font-avenir-heavy mb-1 text-sm text-blue-600">
                International Bank Transfer (SWIFT)
              </p>
              <div className="mt-3 space-y-2">
                <p className="font-lato-regular text-sm text-gray-600">
                  Bank Name:{" "}
                  <span className="font-lato-bold text-gray-900">BNI (Bank Negara Indonesia)</span>
                </p>
                <p className="font-lato-regular text-sm text-gray-600">
                  SWIFT Code: <span className="font-lato-bold text-gray-900">BNINIDJAXXX</span>
                </p>
                <p className="font-lato-regular text-sm text-gray-600">
                  Account Number: <span className="font-lato-bold text-gray-900">2022144115</span>
                </p>
                <p className="font-lato-regular text-sm text-gray-600">
                  Beneficiary:{" "}
                  <span className="font-lato-bold text-gray-900">Zufar Purwa Sanosuke</span>
                </p>
                <p className="font-lato-regular text-sm text-gray-600">
                  Transfer amount:{" "}
                  <span className="font-lato-bold text-gray-900">${priceUSD}.00 USD</span>
                </p>
              </div>
            </div>
          )}

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Payment Proof (Transfer{" "}
              {paymentType === "national" ? `Rp ${priceIDR},00` : `$${priceUSD},00 USD`}) *
            </Label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed px-4 py-3 transition-all duration-200 ${
                buktiPembayaranFile
                  ? "border-green-400 bg-green-50"
                  : showErrors
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 bg-gray-50 hover:border-green-300 hover:bg-green-50/50"
              }`}
            >
              {buktiPembayaranFile ? (
                <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
              ) : (
                <Upload className="h-5 w-5 shrink-0 text-gray-400" />
              )}
              <span
                className={`font-lato-regular truncate text-sm ${buktiPembayaranFile ? "text-green-700" : "text-gray-500"}`}
              >
                {buktiPembayaranFile ? buktiPembayaranFile.name : "Click to upload payment proof"}
              </span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, application/pdf"
              className="hidden"
              onChange={(e) => {
                const selected = e.target.files?.[0] || null;
                if (selected && selected.size > 2 * 1024 * 1024) {
                  setIsModalOpen(true);
                  setBuktiPembayaranFile(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                  return;
                }
                setBuktiPembayaranFile(selected);
              }}
            />
            {showErrors && !buktiPembayaranFile && (
              <p className="mt-1 text-xs text-red-500">Payment proof is required</p>
            )}
          </div>

          <div>
            <Label
              htmlFor="rekening"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Registrant Account Number / E-Wallet Number *
            </Label>
            <Input
              id="rekening"
              type="text"
              value={rekening}
              onChange={(e) => setRekening(e.target.value)}
              placeholder={
                paymentType === "national"
                  ? "Ex: Mandiri 12345678 a.n John Doe"
                  : "Ex: HSBC 12345678 a.n John Doe"
              }
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          onClick={handleNext}
          disabled={isSubmitting}
          className="font-avenir-regular flex items-center gap-2 bg-green-300 text-white transition-all duration-200 hover:scale-105 hover:bg-green-300/90 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Registration
              <ChevronRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Slide5;
