import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight } from "lucide-react";

const Slide2 = ({ formData, updateFormData, onNext }) => {
  const [member1NamaLengkap, setMember1NamaLengkap] = useState(formData.member1NamaLengkap || "");
  const [member1AsalSekolah, setMember1AsalSekolah] = useState(formData.member1AsalSekolah || "");
  const [member1Batch, setMember1Batch] = useState(formData.member1Batch || "");
  const [member1Email, setMember1Email] = useState(formData.member1Email || "");
  const [member1NomorHP, setMember1NomorHP] = useState(formData.member1NomorHP || "");

  const handleNext = () => {
    updateFormData({
      member1NamaLengkap,
      member1AsalSekolah,
      member1Batch,
      member1Email,
      member1NomorHP,
    });
    onNext();
  };

  const isValid =
    member1NamaLengkap.trim() &&
    member1AsalSekolah.trim() &&
    member1Batch.trim() &&
    member1Email.trim() &&
    member1Email.includes("@") &&
    member1NomorHP.trim();

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          1st Member Information
        </h2>
        <p className="font-lato-regular text-gray-600">
          Enter the personal information of the first team member
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">3</span>
          </div>
          1st Member Details
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <Label
              htmlFor="member1NamaLengkap"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name *
            </Label>
            <Input
              id="member1NamaLengkap"
              type="text"
              value={member1NamaLengkap}
              onChange={(e) => setMember1NamaLengkap(e.target.value)}
              placeholder="Enter full name"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="member1AsalSekolah"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              High School *
            </Label>
            <Input
              id="member1AsalSekolah"
              type="text"
              value={member1AsalSekolah}
              onChange={(e) => setMember1AsalSekolah(e.target.value)}
              placeholder="e.g., SMA Negeri 1"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="member1Batch"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Batch *
            </Label>
            <Input
              id="member1Batch"
              type="text"
              value={member1Batch}
              onChange={(e) => setMember1Batch(e.target.value)}
              placeholder="e.g., 2024"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="member1Email"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address *
            </Label>
            <Input
              id="member1Email"
              type="email"
              value={member1Email}
              onChange={(e) => setMember1Email(e.target.value)}
              placeholder="member1.email@example.com"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="member1NomorHP"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              WhatsApp Number *
            </Label>
            <Input
              id="member1NomorHP"
              type="tel"
              value={member1NomorHP}
              onChange={(e) => setMember1NomorHP(e.target.value)}
              placeholder="62 8xx-xxxx-xxxx"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          className="font-avenir-regular disabled:text-black-300 flex items-center gap-2 bg-green-300 text-white transition-all duration-200 hover:scale-105 hover:bg-green-300/90 disabled:opacity-50 disabled:hover:scale-100"
        >
          Continue to Next Step
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide2;
