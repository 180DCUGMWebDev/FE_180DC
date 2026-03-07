import React, { useState, useRef } from "react";
import { Button } from "@/components/elements/Form/button";
import { Label } from "@/components/elements/Form/label";
import { ChevronRight, Upload, CheckCircle } from "lucide-react";
import Link from "next/link";

const FileInput = ({
  label,
  file,
  onChange,
  accept = "image/png, image/jpeg, application/pdf",
}: {
  label: React.ReactNode;
  file: File | null;
  onChange: (f: File | null) => void;
  accept?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Label className="font-avenir-regular mb-2 block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div
        onClick={() => inputRef.current?.click()}
        className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed px-4 py-3 transition-all duration-200 ${
          file
            ? "border-green-400 bg-green-50"
            : "border-gray-300 bg-gray-50 hover:border-green-300 hover:bg-green-50/50"
        }`}
      >
        {file ? (
          <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
        ) : (
          <Upload className="h-5 w-5 shrink-0 text-gray-400" />
        )}
        <span
          className={`font-lato-regular truncate text-sm ${file ? "text-green-700" : "text-gray-500"}`}
        >
          {file ? file.name : "Click to upload file"}
        </span>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => {
          const selected = e.target.files?.[0] || null;
          if (selected && selected.size > 2 * 1024 * 1024) {
            alert("File size exceeds 2MB limit. Please upload a smaller file.");
            onChange(null);
            if (inputRef.current) inputRef.current.value = "";
            return;
          }
          onChange(selected);
        }}
      />
    </div>
  );
};

const Slide4 = ({ formData, updateFormData, onNext }) => {
  const [idCardFile, setIdCardFile] = useState<File | null>(formData.idCardFile || null);
  const [followFile, setFollowFile] = useState<File | null>(formData.followFile || null);
  const [mentionFile, setMentionFile] = useState<File | null>(formData.mentionFile || null);
  const [repostFile, setRepostFile] = useState<File | null>(formData.repostFile || null);
  const [twibbonFile, setTwibbonFile] = useState<File | null>(formData.twibbonFile || null);

  const isValid = idCardFile && followFile && repostFile && twibbonFile && mentionFile;

  const handleNext = () => {
    updateFormData({
      idCardFile,
      followFile,
      mentionFile,
      repostFile,
      twibbonFile,
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
          Upload your verification documents (image or PDF)
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
          <FileInput
            label="Student ID Card (all team members compiled) *"
            file={idCardFile}
            onChange={setIdCardFile}
          />

          <FileInput
            label={
              <>
                Screenshot Follow{" "}
                <Link
                  href="https://www.instagram.com/180dcugm/"
                  target="_blank"
                  className="font-bold text-green-500 hover:text-green-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  @180dcugm
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.instagram.com/180dc.casecomp/"
                  target="_blank"
                  className="font-bold text-green-500 hover:text-green-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  @180dc.casecomp
                </Link>{" "}
                *
              </>
            }
            file={followFile}
            onChange={setFollowFile}
          />

          <FileInput
            label={
              <>
                Screenshot Repost our{" "}
                <Link
                  href="https://180dcugm.com/AttachmentVCC"
                  target="_blank"
                  className="font-bold text-green-500 hover:text-green-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Poster
                </Link>{" "}
                *
              </>
            }
            file={repostFile}
            onChange={setRepostFile}
          />

          <FileInput
            label={
              <>
                Screenshot Post our{" "}
                <Link
                  href="https://180dcugm.com/AttachmentVCC"
                  target="_blank"
                  className="font-bold text-green-500 hover:text-green-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Twibbon
                </Link>{" "}
                *
              </>
            }
            file={twibbonFile}
            onChange={setTwibbonFile}
          />

          <FileInput
            label="Screenshot Mention on Twibbon Caption *"
            file={mentionFile}
            onChange={setMentionFile}
          />
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
