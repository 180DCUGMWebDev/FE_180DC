import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight } from "lucide-react";

const Slide3 = ({ formData, updateFormData, onNext, showButtons = true }) => {
  const [member2NamaLengkap, setMember2NamaLengkap] = useState(formData.member2NamaLengkap || "");
  const [member2AsalSekolah, setMember2AsalSekolah] = useState(formData.member2AsalSekolah || "");
  const [member2Batch, setMember2Batch] = useState(formData.member2Batch || "");
  const [member2Email, setMember2Email] = useState(formData.member2Email || "");
  const [member2NomorHP, setMember2NomorHP] = useState(formData.member2NomorHP || "");
  const [showErrors, setShowErrors] = useState(false);

  React.useEffect(() => {
    updateFormData({
      member2NamaLengkap,
      member2AsalSekolah,
      member2Batch,
      member2Email,
      member2NomorHP,
    });
  }, [member2NamaLengkap, member2AsalSekolah, member2Batch, member2Email, member2NomorHP]);

  const handleNext = () => {
    if (!isValid) {
      setShowErrors(true);
      return;
    }
    onNext();
  };

  const isValid =
    member2NamaLengkap.trim() &&
    member2AsalSekolah.trim() &&
    member2Batch.trim() &&
    member2Email.trim() &&
    member2Email.includes("@") &&
    member2NomorHP.trim();

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Team Member 2
        </h2>
        <p className="font-lato-regular text-gray-600">
          Enter the personal information of the second team member
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">4</span>
          </div>
          2nd Member Details
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <Label
              htmlFor="member2NamaLengkap"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Your Full Name *
            </Label>
            <Input
              id="member2NamaLengkap"
              type="text"
              value={member2NamaLengkap}
              onChange={(e) => setMember2NamaLengkap(e.target.value)}
              placeholder="Enter full name"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="member2AsalSekolah"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              University - Faculty *
            </Label>
            <Input
              id="member2AsalSekolah"
              type="text"
              value={member2AsalSekolah}
              onChange={(e) => setMember2AsalSekolah(e.target.value)}
              placeholder="e.g., Universitas Gadjah Mada - Faculty of Economics"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="member2Batch"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Batch *
            </Label>
            <Input
              id="member2Batch"
              type="text"
              value={member2Batch}
              onChange={(e) => setMember2Batch(e.target.value)}
              placeholder="e.g., 2024"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="member2Email"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address *
            </Label>
            <Input
              id="member2Email"
              type="email"
              value={member2Email}
              onChange={(e) => setMember2Email(e.target.value)}
              placeholder="member2.email@example.com"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="member2NomorHP"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              WhatsApp Number *
            </Label>
            <Input
              id="member2NomorHP"
              type="tel"
              value={member2NomorHP}
              onChange={(e) => setMember2NomorHP(e.target.value)}
              placeholder="62 8xx-xxxx-xxxx"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>
        </div>
      </div>

      {showButtons && (
        <div className="flex justify-end pt-4">
          <Button
            onClick={handleNext}
            className="font-avenir-regular flex items-center gap-2 bg-green-300 text-white transition-all duration-200 hover:scale-105 hover:bg-green-300/90"
          >
            Continue to Next Step
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
      {showErrors && !isValid && (
        <p className="mt-2 text-right text-sm font-medium text-red-500">
          Please complete all member fields properly.
        </p>
      )}
    </div>
  );
};

export default Slide3;
