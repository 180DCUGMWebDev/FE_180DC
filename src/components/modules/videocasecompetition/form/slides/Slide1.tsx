import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight } from "lucide-react";

const Slide1 = ({ formData, updateFormData, onNext }) => {
  const [namaTim, setNamaTim] = useState(formData.namaTim || "");
  const [teamSize, setTeamSize] = useState(formData.teamSize || "3");
  const isPredefined = [
    "Instagram",
    "WhatsApp/Line",
    "Friend/Teacher",
    "School Announcement",
  ].includes(formData.source || "");
  const initialSource = formData.source ? (isPredefined ? formData.source : "Other") : "";
  const initialOther = formData.source && !isPredefined ? formData.source : "";

  const [source, setSource] = useState(initialSource);
  const [otherSource, setOtherSource] = useState(initialOther);
  const [leaderNamaLengkap, setLeaderNamaLengkap] = useState(formData.leaderNamaLengkap || "");
  const [leaderAsalSekolah, setLeaderAsalSekolah] = useState(formData.leaderAsalSekolah || "");
  const [leaderBatch, setLeaderBatch] = useState(formData.leaderBatch || "");
  const [leaderEmail, setLeaderEmail] = useState(formData.leaderEmail || "");
  const [leaderNomorHP, setLeaderNomorHP] = useState(formData.leaderNomorHP || "");

  const handleNext = () => {
    updateFormData({
      namaTim,
      teamSize,
      source: source === "Other" ? otherSource : source,
      leaderNamaLengkap,
      leaderAsalSekolah,
      leaderBatch,
      leaderEmail,
      leaderNomorHP,
    });
    onNext();
  };

  const isValid =
    namaTim.trim() &&
    teamSize.trim() &&
    (source === "Other" ? otherSource.trim() : source.trim()) &&
    leaderNamaLengkap.trim() &&
    leaderAsalSekolah.trim() &&
    leaderBatch.trim() &&
    leaderEmail.trim() &&
    leaderEmail.includes("@") &&
    leaderNomorHP.trim();

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Team Leader Information
        </h2>
        <p className="font-lato-regular text-gray-600">
          Enter your team details and the leader&apos;s personal information
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">1</span>
          </div>
          Team Details
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-6">
          <div>
            <Label
              htmlFor="namaTim"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Team Name *
            </Label>
            <Input
              id="namaTim"
              type="text"
              value={namaTim}
              onChange={(e) => setNamaTim(e.target.value)}
              placeholder="Enter your team name"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label className="font-avenir-regular mb-3 block text-sm font-medium text-gray-700">
              Team Size (Including Team Leader) *
            </Label>
            <div className="space-y-2">
              <label className="flex cursor-pointer items-center space-x-3">
                <input
                  type="radio"
                  value="2"
                  checked={teamSize === "2"}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="font-lato-regular text-gray-700">2 Students</span>
              </label>
              <label className="flex cursor-pointer items-center space-x-3">
                <input
                  type="radio"
                  value="3"
                  checked={teamSize === "3"}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="font-lato-regular text-gray-700">3 Students</span>
              </label>
            </div>
          </div>

          <div>
            <Label className="font-avenir-regular mb-3 block text-sm font-medium text-gray-700">
              How did you hear about this competition? *
            </Label>
            <div className="space-y-2">
              {["Instagram", "WhatsApp/Line", "Friend/Teacher", "School Announcement", "Other"].map(
                (sourceOption) => (
                  <label key={sourceOption} className="flex cursor-pointer items-center space-x-3">
                    <input
                      type="radio"
                      value={sourceOption}
                      checked={source === sourceOption}
                      onChange={(e) => setSource(e.target.value)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <span className="font-lato-regular text-gray-700">{sourceOption}</span>
                  </label>
                )
              )}
              {source === "Other" && (
                <div className="mt-2 ml-7">
                  <Input
                    type="text"
                    value={otherSource}
                    onChange={(e) => setOtherSource(e.target.value)}
                    placeholder="Please specify"
                    className="font-lato-regular w-full border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50 md:w-1/2"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Leader Information Form */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">2</span>
          </div>
          Leader Information
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <Label
              htmlFor="leaderNamaLengkap"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name *
            </Label>
            <Input
              id="leaderNamaLengkap"
              type="text"
              value={leaderNamaLengkap}
              onChange={(e) => setLeaderNamaLengkap(e.target.value)}
              placeholder="Enter your full name"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="leaderAsalSekolah"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              High School *
            </Label>
            <Input
              id="leaderAsalSekolah"
              type="text"
              value={leaderAsalSekolah}
              onChange={(e) => setLeaderAsalSekolah(e.target.value)}
              placeholder="e.g., SMA Negeri 1"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="leaderBatch"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Batch *
            </Label>
            <Input
              id="leaderBatch"
              type="text"
              value={leaderBatch}
              onChange={(e) => setLeaderBatch(e.target.value)}
              placeholder="e.g., 2024"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="leaderEmail"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address *
            </Label>
            <Input
              id="leaderEmail"
              type="email"
              value={leaderEmail}
              onChange={(e) => setLeaderEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label
              htmlFor="leaderNomorHP"
              className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700"
            >
              WhatsApp Number *
            </Label>
            <Input
              id="leaderNomorHP"
              type="tel"
              value={leaderNomorHP}
              onChange={(e) => setLeaderNomorHP(e.target.value)}
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

export default Slide1;
