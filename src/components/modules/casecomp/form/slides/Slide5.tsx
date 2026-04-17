import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight, Upload, CheckCircle, Loader2 } from "lucide-react";
import { FileLimitModal } from "@/components/elements/FileLimitModal";

const Slide5 = ({
  formData,
  updateFormData,
  onNext,
  isSubmitting,
  onSubmit,
  validCodes = [],
}) => {
  const [paymentType, setPaymentType] = useState(formData.paymentType || "national");
  const [bundle, setBundle] = useState(formData.bundle || "none");
  const [referralCode, setReferralCode] = useState(formData.referralCode || "");
  const [buktiPembayaranFile, setBuktiPembayaranFile] = useState<File | null>(
    formData.buktiPembayaranFile || null
  );
  const [rekening, setRekening] = useState(formData.rekening || "");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const isTeam = formData.regType === "team";

  const [discount, setDiscount] = React.useState(0);
  const [discountLabel, setDiscountLabel] = React.useState("");
  const [isReferralValid, setIsReferralValid] = React.useState(false);
  const [isValidating, setIsValidating] = React.useState(false);
  const [validationCache, setValidationCache] = React.useState<Record<string, any>>({});

  const normalizedInput = referralCode.trim().toUpperCase();
  const isNormalRegistration = bundle === "none";

  React.useEffect(() => {
    const validateCode = async () => {
      if (!isNormalRegistration || !referralCode.trim()) {
        setDiscount(0);
        setDiscountLabel("");
        setIsReferralValid(false);
        return;
      }

      // Check cache first
      if (validationCache[normalizedInput]) {
        const cached = validationCache[normalizedInput];
        setDiscount(cached.discount);
        setDiscountLabel(cached.label);
        setIsReferralValid(cached.valid);
        setIsValidating(false);
        return;
      }

      setIsValidating(true);
      try {
        const res = await fetch(`/api/casecomp/referrals/validate?code=${referralCode}`);
        const data = await res.json();
        
        // Update cache
        setValidationCache(prev => ({ ...prev, [normalizedInput]: data }));

        if (data.valid) {
          setDiscount(data.discount);
          setDiscountLabel(data.label);
          setIsReferralValid(true);
        } else {
          setDiscount(0);
          setDiscountLabel("");
          setIsReferralValid(false);
        }
      } catch (err) {
        console.error("Referral validation error:", err);
      } finally {
        setIsValidating(false);
      }
    };

    const timeout = setTimeout(validateCode, 300);
    return () => clearTimeout(timeout);
  }, [referralCode, isNormalRegistration, normalizedInput, validationCache]);

  const hasReferral = isNormalRegistration && isReferralValid;

  // Phase Handling
  const now = new Date();
  const earlyEnd = new Date("2026-04-11T23:59:59+07:00");
  const normalEnd = new Date("2026-04-27T23:59:59+07:00");

  let phaseName = "Normal";
  let basePriceIDR = 125000;
  let basePriceUSD = 10;
  let phaseKey = "normal";

  // Base Prices (Normal Phase)
  if (isTeam) {
    if (bundle === "none") {
      basePriceIDR = 125000;
      basePriceUSD = 10;
    } else if (bundle === "casebook") {
      basePriceIDR = 280000;
      basePriceUSD = 19;
    } else if (bundle === "framework") {
      basePriceIDR = 325000;
      basePriceUSD = 22;
    } else if (bundle === "all") {
      basePriceIDR = 460000;
      basePriceUSD = 30;
    }
  } else {
    // Individual
    if (bundle === "none") {
      basePriceIDR = 85000;
      basePriceUSD = 6;
    } else if (bundle === "casebook") {
      basePriceIDR = 140000;
      basePriceUSD = 9;
    } else if (bundle === "framework") {
      basePriceIDR = 155000;
      basePriceUSD = 10;
    } else if (bundle === "all") {
      basePriceIDR = 210000;
      basePriceUSD = 13;
    }
  }

  // Early Bird handling
  if (now <= earlyEnd) {
    phaseName = "Early Bird";
    if (bundle === "none") {
      basePriceIDR = isTeam ? 100000 : 65000;
      basePriceUSD = isTeam ? 8 : 4;
    }
    phaseKey = "early";
  } else if (now <= normalEnd) {
    phaseName = "Normal";
    phaseKey = "normal";
  } else {
    phaseName = "Late";
    if (bundle === "none") {
      basePriceIDR = isTeam ? 150000 : 95000;
      basePriceUSD = isTeam ? 12 : 8;
    }
    phaseKey = "late";
  }

  // Apply Referral Discount
  const finalPriceIDR = hasReferral ? Math.round(basePriceIDR * (1 - discount)) : basePriceIDR;
  const finalPriceUSD = hasReferral ? Number((basePriceUSD * (1 - discount)).toFixed(2)) : basePriceUSD;

  const priceIDRStr = finalPriceIDR.toLocaleString("id-ID");
  const priceUSDStr = finalPriceUSD.toString();

  const isFree = discount === 1;
  const isValid = isFree ? !!paymentType : (!!buktiPembayaranFile && !!rekening.trim() && !!paymentType);

  const handleNext = () => {
    if (!isValid) {
      setShowErrors(true);
      return;
    }
    const latestData = {
      paymentType,
      bundle,
      referralCode: normalizedInput,
      isBundle: bundle !== "none",
      isReferral: hasReferral,
      ...(buktiPembayaranFile && { buktiPembayaranFile }),
      rekening,
      registrationPhase: phaseKey,
      finalPrice: paymentType === "national" ? `IDR ${priceIDRStr}` : `USD ${priceUSDStr}`,
      revenue: paymentType === "national" ? finalPriceIDR : finalPriceUSD,
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
        <div className="mb-6 space-y-6">
          <h3 className="font-avenir-black mb-4 flex items-center gap-2 text-xl text-gray-800 border-b pb-2">
             Bundle & Referral
          </h3>
          
          <div>
            <Label className="font-avenir-regular mb-3 block text-sm font-medium text-gray-700">
              Registration Type & Bundle *
            </Label>
            <div className="relative">
              <select
                value={bundle}
                onChange={(e) => setBundle(e.target.value)}
                className="font-lato-regular w-full rounded-lg border border-gray-100 bg-white p-3 text-sm text-gray-800 shadow-sm outline-none transition-all focus:border-green-300 focus:ring-2 focus:ring-green-300/20 appearance-none"
              >
                <option value="none">Normal Registration (Regular Entry)</option>
                <option value="casebook">
                  Reg + Casebook {isTeam ? "(IDR 280K)" : "(IDR 140K)"}
                </option>
                <option value="framework">
                  Reg + Frameworks Bank {isTeam ? "(IDR 325K)" : "(IDR 155K)"}
                </option>
                <option value="all">
                  Reg + Full Bundle {isTeam ? "(IDR 460K)" : "(IDR 210K)"}
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronRight className="h-4 w-4 rotate-90 text-gray-400" />
              </div>
            </div>
            <p className="mt-2 text-[10px] text-gray-400 font-lato-regular">
              Choose "Normal Registration" to apply a referral code. Bundles already include a special price.
            </p>
          </div>

          <div>
            <Label
              htmlFor="referralCode"
              className={`font-avenir-regular mb-2 block text-sm font-medium ${!isNormalRegistration ? "text-gray-300" : "text-gray-700"}`}
            >
              Referral Code {isNormalRegistration ? "(Optional)" : "(Not available for bundles)"}
            </Label>
            <div className="flex flex-col gap-1">
              <Input
                id="referralCode"
                type="text"
                disabled={!isNormalRegistration}
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                placeholder={isNormalRegistration ? "Enter referral code" : "Bundles cannot use referral codes"}
                className={`font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50 ${
                  !isNormalRegistration ? "bg-gray-50 opacity-60 cursor-not-allowed" : 
                  referralCode.trim() !== "" ? (isValidating ? "border-gray-300" : isReferralValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""
                }`}
              />
              {isValidating && (
                 <div className="flex items-center gap-1 mt-1">
                   <Loader2 className="h-3 w-3 animate-spin text-gray-400" />
                   <span className="text-[10px] text-gray-400 font-lato-regular">Validating code...</span>
                 </div>
              )}
              {isNormalRegistration && referralCode.trim() !== "" && !isValidating && (
                <p className={`text-[10px] font-lato-bold uppercase ${isReferralValid ? "text-green-600" : "text-red-500"}`}>
                  {isReferralValid ? `✓ Code valid: ${discountLabel}` : "✗ Invalid referral code"}
                </p>
              )}
              {!isNormalRegistration && referralCode.trim() !== "" && (
                <p className="text-[10px] text-orange-500 font-lato-bold uppercase">
                  ⚠ Referral codes only work for Normal Registration
                </p>
              )}
            </div>
          </div>
        </div>

        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800 border-t pt-6">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">$</span>
          </div>
          Payment Selection ({isTeam ? "Team" : "Individual"} - {phaseName} Phase)
        </h3>

        {hasReferral && (
          <div className="mb-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-800 font-lato-regular animate-pulse">
            Referral Code Applied: <strong>{normalizedInput}</strong> ({discountLabel})
          </div>
        )}

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
              IDR {priceIDRStr}
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
              ${priceUSDStr} USD
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
                  <strong className="text-gray-700">Rp {priceIDRStr}</strong>.
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
                  Transfer amount: <strong className="text-gray-700">Rp {priceIDRStr}</strong>
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-100 bg-blue-50/50 px-6 py-4">
                <p className="font-avenir-heavy mb-1 text-sm text-blue-600">
                  PayPal (Recommended)
                </p>
                <div className="mt-3 space-y-2">
                  <p className="font-lato-regular text-sm text-gray-600">
                    Email: <span className="font-lato-bold text-gray-900">zufarpurwa13@gmail.com</span>
                  </p>
                  <p className="font-lato-regular text-sm text-gray-600">
                    Username: <span className="font-lato-bold text-gray-900">@zufarpurwa10</span>
                  </p>
                  <p className="font-lato-regular text-sm text-gray-600">
                    Transfer amount:{" "}
                    <span className="font-lato-bold text-gray-900">${priceUSDStr} USD</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="font-lato-regular text-xs">or international bank transfer</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="rounded-lg border border-gray-100 bg-gray-50 px-6 py-4">
                <p className="font-avenir-heavy mb-1 text-sm text-gray-700">
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
                </div>
              </div>
            </div>
          )}

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Payment Proof (Transfer{" "}
              {paymentType === "national" ? `Rp ${priceIDRStr}` : `$${priceUSDStr} USD`}){isFree ? " (Optional)" : " *"}
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
              Registrant Account Number / E-Wallet Number {isFree ? "(Optional)" : "*"}
            </Label>
            <Input
              id="rekening"
              type="text"
              value={rekening}
              onChange={(e) => setRekening(e.target.value)}
              placeholder={
                paymentType === "national"
                  ? "Ex: Mandiri 12345678 a.n John Doe"
                  : "Ex: PayPal / HSBC 12345678 a.n John Doe"
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
