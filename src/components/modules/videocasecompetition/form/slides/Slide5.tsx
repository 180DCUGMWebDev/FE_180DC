import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight, Upload, CheckCircle, Loader2 } from "lucide-react";
import { FileLimitModal } from "@/components/elements/FileLimitModal";

const Slide5 = ({ formData, updateFormData, onNext, isSubmitting, onSubmit }) => {
  const [buktiPembayaranFile, setBuktiPembayaranFile] = useState<File | null>(
    formData.buktiPembayaranFile || null
  );
  const [rekening, setRekening] = useState(formData.rekening || "");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    const latestData = { buktiPembayaranFile, rekening };
    updateFormData(latestData);
    // Pass latest data directly to avoid stale closure
    onSubmit(latestData);
  };

  const isValid = buktiPembayaranFile && rekening.trim();

  return (
    <div className="animate-fade-in space-y-6">
      <FileLimitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Payment
        </h2>
        <p className="font-lato-regular text-gray-600">Complete your team registration payment</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">$</span>
          </div>
          Payment Details
        </h3>

        <div className="flex flex-col gap-6">
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
              <strong className="text-gray-700">Rp 20.000,00</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="font-lato-regular text-xs">or transfer via bank</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="rounded-lg border border-gray-100 bg-gray-50 px-6 py-4">
            <p className="font-avenir-heavy mb-1 text-sm text-gray-700">Bank Transfer</p>
            <p className="font-lato-regular text-sm text-gray-500">BNI</p>
            <p className="font-lato-bold text-lg tracking-wide text-gray-900">2022144115</p>
            <p className="font-lato-regular text-sm text-gray-500">
              a.n <strong className="text-gray-700">Zufar Purwa Sanosuke</strong>
            </p>
            <p className="font-lato-regular mt-2 text-xs text-gray-400">
              Transfer amount: <strong className="text-gray-700">Rp 20.000,00</strong>
            </p>
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Payment Proof (Transfer Rp 20.000,00) *
            </Label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed px-4 py-3 transition-all duration-200 ${
                buktiPembayaranFile
                  ? "border-green-400 bg-green-50"
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
              placeholder="Ex: Mandiri 12345678 a.n John Doe / Gopay 081234..."
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          onClick={handleNext}
          disabled={!isValid || isSubmitting}
          className="font-avenir-regular disabled:text-black-300 flex items-center gap-2 bg-green-300 text-white transition-all duration-200 hover:scale-105 hover:bg-green-300/90 disabled:opacity-50 disabled:hover:scale-100"
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
