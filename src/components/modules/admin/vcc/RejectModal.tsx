"use client";

import { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { XCircle, X, Loader2 } from "lucide-react";

interface RejectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => Promise<void>;
  teamName: string;
  isLoading: boolean;
}

export function RejectModal({ isOpen, onClose, onSubmit, teamName, isLoading }: RejectModalProps) {
  const [reason, setReason] = useState("");

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!reason.trim()) return;
    await onSubmit(reason.trim());
    setReason("");
  }

  function handleClose() {
    if (isLoading) return;
    setReason("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative z-10 mx-4 w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={isLoading}
          className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-full bg-red-100 p-2">
            <XCircle className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h2 className="font-avenir-black text-xl text-gray-900">Reject Registration</h2>
            <p className="font-lato-regular text-sm text-gray-500">
              Team: <span className="font-lato-bold">{teamName}</span>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="rejection-reason"
              className="font-lato-regular mb-2 block text-sm font-medium text-gray-700"
            >
              Rejection Reason <span className="text-red-500">*</span>
            </label>
            <p className="font-lato-regular mb-3 text-xs text-gray-500">
              This message will be sent to the team leader via email.
            </p>
            <textarea
              id="rejection-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please provide the reason for rejecting this registration..."
              rows={5}
              required
              disabled={isLoading}
              className="font-lato-regular w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-red-400 focus:ring-1 focus:ring-red-400 focus:outline-hidden disabled:opacity-50"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={handleClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!reason.trim() || isLoading}
              className="bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <XCircle className="mr-2 h-4 w-4" />
                  Send Rejection
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
