"use client";

import { Button } from "@/components/elements/Form/button";
import { AlertCircle, X } from "lucide-react";

interface FileLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function FileLimitModal({ isOpen, onClose, message }: FileLimitModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 mx-4 w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center mt-2">
          <div className="mb-4 rounded-full bg-red-100 p-3">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="font-avenir-black mb-2 text-xl text-gray-900">File Exceeds Limit</h2>
          <p className="font-lato-regular mb-6 text-sm text-gray-500">
            {message ?? "The file you selected is larger than the 2MB limit. Please optimize your file or upload a smaller one."}
          </p>

          <Button
            onClick={onClose}
            className="w-full bg-green-500 text-white hover:bg-green-600 transition-colors font-avenir-regular"
          >
            Understood
          </Button>
        </div>
      </div>
    </div>
  );
}
