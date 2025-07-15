"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, User, GraduationCap, Briefcase, Upload, Loader2 } from "lucide-react";
import Link from "next/link";

const Slide5 = ({ formData, onSubmit, isSubmitting }) => {
  const isValid =
    formData.name &&
    formData.email &&
    formData.nim &&
    formData.phone &&
    formData.faculty &&
    formData.major &&
    formData.gpa &&
    formData.activeStudent !== undefined &&
    formData.firstChoicePosition &&
    formData.whyApplyingLink &&
    formData.howHelpGoalsLink &&
    formData.cvLink &&
    formData.instagramProofLink &&
    formData.hearAboutUs?.length > 0 &&
    formData.consentAgreed;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    // Call the parent's submit handler
    await onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
      <div className="text-center">
        <h2 className="mb-1 mt-2 font-avenirBlack text-2xl leading-snug text-primary lg:text-3xl">
          Review Your Application
        </h2>
        <p className="font-latoRegular text-gray-600">
          Please review all information before submitting your application
        </p>
      </div>

      {/* Personal Information */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <User className="h-3 w-3 text-white" />
            </div>
            Personal Information
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Full Name:</span>
            <p className="font-latoRegular text-gray-600">{formData.name || "Not provided"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Email:</span>
            <p className="font-latoRegular text-gray-600">{formData.email || "Not provided"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Student ID (NIM):
            </span>
            <p className="font-latoRegular text-gray-600">{formData.nim || "Not provided"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Phone Number:
            </span>
            <p className="font-latoRegular text-gray-600">{formData.phone || "Not provided"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Faculty:</span>
            <p className="font-latoRegular text-gray-600">{formData.faculty || "Not provided"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">Major:</span>
            <p className="font-latoRegular text-gray-600">{formData.major || "Not provided"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Current GPA:
            </span>
            <p className="font-latoRegular text-gray-600">{formData.gpa || "Not provided"}</p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Active UGM Student:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.activeStudent ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>

      {/* Alumni Information */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <GraduationCap className="h-3 w-3 text-white" />
            </div>
            Alumni Information
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              180DC UGM Alumni:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.is180DCAlumni === true
                ? "Yes"
                : formData.is180DCAlumni === false
                  ? "No"
                  : "Not specified"}
            </p>
          </div>
          {formData.is180DCAlumni && (
            <>
              <div>
                <span className="font-avenirRegular text-sm font-medium text-gray-700">
                  Past Position:
                </span>
                <p className="font-latoRegular text-gray-600">
                  {formData.pastPosition || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-avenirRegular text-sm font-medium text-gray-700">
                  Past Batch:
                </span>
                <p className="font-latoRegular text-gray-600">
                  {formData.pastBatch || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-avenirRegular text-sm font-medium text-gray-700">
                  Applying Position:
                </span>
                <p className="font-latoRegular text-gray-600">
                  {formData.applyingPosition || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-avenirRegular text-sm font-medium text-gray-700">
                  Second Choice:
                </span>
                <p className="font-latoRegular text-gray-600">
                  {formData.secondChoice || "No second choice"}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Position & Motivation */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <Briefcase className="h-3 w-3 text-white" />
            </div>
            Position & Motivation
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              First Choice Position:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.firstChoicePosition || "Not provided"}
            </p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Second Choice Position:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.secondChoicePosition || "No second choice"}
            </p>
          </div>
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Why Applying Document:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.whyApplyingLink ? (
                <Link
                  href={formData.whyApplyingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Document
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              How 180DC Helps Goals Document:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.howHelpGoalsLink ? (
                <Link
                  href={formData.howHelpGoalsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Document
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Documents & Information */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-avenirBlack text-xl text-gray-800">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <Upload className="h-3 w-3 text-white" />
            </div>
            Documents & Information
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              CV (McKinsey Format):
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.cvLink ? (
                <Link
                  href={formData.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View CV
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
          <div className="md:col-span-2">
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Instagram Story Proof:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.instagramProofLink ? (
                <Link
                  href={formData.instagramProofLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Proof
                </Link>
              ) : (
                "Not provided"
              )}
            </p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              How did you hear about us:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.hearAboutUs?.length > 0 ? formData.hearAboutUs.join(", ") : "Not provided"}
            </p>
          </div>
          <div>
            <span className="font-avenirRegular text-sm font-medium text-gray-700">
              Consent Agreement:
            </span>
            <p className="font-latoRegular text-gray-600">
              {formData.consentAgreed ? "Agreed" : "Not agreed"}
            </p>
          </div>
        </div>
      </div>

      {/* Validation Warning */}
      {!isValid && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600">
              <span className="text-xs font-bold text-white">!</span>
            </div>
            <p className="font-avenirRegular text-sm font-medium text-red-800">
              Please complete all required fields before submitting your application.
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="flex items-center gap-2 bg-primary font-avenirRegular text-white transition-all duration-200 hover:scale-105 hover:bg-primary/90 disabled:text-black disabled:opacity-50 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <ChevronRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default Slide5;
