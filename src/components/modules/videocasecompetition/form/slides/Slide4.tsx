import React, { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Slide4 = ({ formData, updateFormData, onNext }) => {
  const [idCardLink, setIdCardLink] = useState(formData.idCardLink || "");
  const [followLink, setFollowLink] = useState(formData.followLink || "");
  const [mentionLink, setMentionLink] = useState(formData.mentionLink || "");
  const [repostLink, setRepostLink] = useState(formData.repostLink || "");
  const [twibbonLink, setTwibbonLink] = useState(formData.twibbonLink || "");

  const isValid = idCardLink.trim() && followLink.trim() && repostLink.trim() && twibbonLink.trim();
  // mention is optional based on payload

  const handleNext = () => {
    updateFormData({
      idCardLink,
      followLink,
      mentionLink,
      repostLink,
      twibbonLink,
    });
    onNext();
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="font-avenir-black mt-2 mb-1 text-2xl leading-snug text-green-300 lg:text-3xl">
          Attachments
        </h2>
        <p className="font-lato-regular text-gray-600">
          Upload your verification documents to Google Drive and provide the links here
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
        <h3 className="font-avenir-black mb-6 flex items-center gap-2 text-xl text-gray-800">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-300">
            <span className="text-sm font-bold text-white">A</span>
          </div>
          Documents
        </h3>

        <div className="flex flex-col gap-6">
          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Student ID Card *
            </Label>
            <Input
              value={idCardLink}
              onChange={(e) => setIdCardLink(e.target.value)}
              placeholder="Google Drive link of the compiled file consisting of all team members’ documents"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Follow{" "}
              <Link
                href="https://www.instagram.com/180dcugm/"
                target="_blank"
                className="font-bold text-green-500 hover:text-green-600 hover:underline"
              >
                @180dcugm
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.instagram.com/180dc.casecomp/"
                target="_blank"
                className="font-bold text-green-500 hover:text-green-600 hover:underline"
              >
                @180dc.casecomp
              </Link>{" "}
              *
            </Label>
            <Input
              value={followLink}
              onChange={(e) => setFollowLink(e.target.value)}
              placeholder="Google Drive link of the compiled file consisting of all team members’ documents"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Repost our Story (Required) *
            </Label>
            <Input
              value={repostLink}
              onChange={(e) => setRepostLink(e.target.value)}
              placeholder="Google Drive link of the compiled file consisting of all team members’ documents"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Post our{" "}
              <Link
                href="#" // Todo: correct twibbon link
                target="_blank"
                className="font-bold text-green-500 hover:text-green-600 hover:underline"
              >
                Twibbon
              </Link>{" "}
              *
            </Label>
            <Input
              value={twibbonLink}
              onChange={(e) => setTwibbonLink(e.target.value)}
              placeholder="Google Drive link of the compiled file consisting of all team members’ documents"
              className="font-lato-regular border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-green-300/50"
            />
          </div>

          <div>
            <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
              Mention (Optional? Required in API? Currently mapped as Twibbon related)
            </Label>
            <Input
              value={mentionLink}
              onChange={(e) => setMentionLink(e.target.value)}
              placeholder="Google Drive link: Mention on your Twibbon’s Caption"
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

export default Slide4;
