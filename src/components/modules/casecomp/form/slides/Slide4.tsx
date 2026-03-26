import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight, Link as LinkIcon } from "lucide-react";
import Button180 from "@/components/elements/Button180";

const Slide4 = ({ formData, updateFormData, onNext }) => {
  const [idCardLink, setIdCardLink] = useState(formData.idCardLink || "");
  const [cvLink, setCvLink] = useState(formData.cvLink || "");
  const [followLink, setFollowLink] = useState(formData.followLink || "");
  const [twibbonLink, setTwibbonLink] = useState(formData.twibbonLink || "");
  const [showErrors, setShowErrors] = useState(false);

  const isValid =
    idCardLink.trim() && cvLink.trim() && followLink.trim() && twibbonLink.trim();

  const handleNext = () => {
    if (!isValid) {
      setShowErrors(true);
      return;
    }
    updateFormData({
      idCardLink,
      cvLink,
      followLink,
      twibbonLink,
    });
    onNext();
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Required Records Submission
        </h2>
        <p className="font-lato-regular text-gray-600">
          Please provide the drive links for your team documents
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">3</span>
          </div>
          Document Drive Links
        </h3>

        <div className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800">
          <p className="font-lato-bold flex items-center gap-2">
            💡 Important Instructions:
          </p>
          <ul className="font-lato-regular mt-2 list-disc pl-5 space-y-1">
            <li>Compile all team members&apos; files into the linked drive folder/file.</li>
            <li>Ensure the link sharing permission is set to <strong>&ldquo;Anyone with the link can view&rdquo;</strong>.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div>
              <Label className="font-avenir-regular mb-1 block text-sm font-medium text-gray-700">
                Student ID Card Link *
              </Label>
              <p className="font-lato-regular mb-2 text-xs text-gray-500">
                Make sure that this link includes all team members
              </p>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  value={idCardLink}
                  onChange={(e) => setIdCardLink(e.target.value)}
                  placeholder="https://drive.google.com/..."
                  className={`pl-10 ${showErrors && !idCardLink.trim() ? "border-red-500 bg-red-50" : ""}`}
                />
              </div>
              {showErrors && !idCardLink.trim() && (
                <p className="mt-1 text-xs text-red-500">Document link is required</p>
              )}
            </div>

            <div>
              <Label className="font-avenir-regular mb-1 block text-sm font-medium text-gray-700">
                Curriculum Vitae Link *
              </Label>
              <p className="font-lato-regular mb-2 text-xs text-gray-500">
                Make sure that this link includes all team members
              </p>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  value={cvLink}
                  onChange={(e) => setCvLink(e.target.value)}
                  placeholder="https://drive.google.com/..."
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
                Follow Instagram, Comment and Repost Proof (Link) *
              </Label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  value={followLink}
                  onChange={(e) => setFollowLink(e.target.value)}
                  placeholder="https://drive.google.com/..."
                  className="pl-10"
                />
              </div>
              <div className="mt-2 flex gap-2">
                <Button180
                  href="https://www.instagram.com/180dcugm/"
                  text="@180dcugm"
                  color="green"
                  size="sm"
                />
                <Button180
                  href="https://www.instagram.com/180dc.casecomp/"
                  text="@180dc.casecomp"
                  color="green"
                  size="sm"
                />
              </div>
            </div>

            <div>
              <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
                Posting Twibbon and Mentioning 5 Friends Proof (Link) *
              </Label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  value={twibbonLink}
                  onChange={(e) => setTwibbonLink(e.target.value)}
                  placeholder="https://drive.google.com/..."
                  className="pl-10"
                />
              </div>
               <div className="mt-2 flex gap-2">
                <Button180
                  href="https://180dcugm.com/AttachmentCC"
                  text="View Poster & Twibbon"
                  color="green"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          className="font-avenir-regular disabled:text-black-300 flex items-center gap-2 bg-green-300 text-white transition-all duration-200 hover:scale-105 hover:bg-green-300/90 disabled:opacity-50 disabled:hover:scale-100"
        >
          Continue to Payment
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Slide4;
