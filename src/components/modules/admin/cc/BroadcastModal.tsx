"use client";

import { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Mail, X, Loader2, Info } from "lucide-react";

interface BroadcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (targetGroup: string, subject: string, content: string) => Promise<void>;
  isLoading: boolean;
}

export function BroadcastModal({ isOpen, onClose, onSubmit, isLoading }: BroadcastModalProps) {
  const [targetGroup, setTargetGroup] = useState("all");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!subject.trim() || !content.trim()) return;
    await onSubmit(targetGroup, subject.trim(), content.trim());

    // Only reset if it succeeded
    if (!isLoading) {
      setSubject("");
      setContent("");
      setTargetGroup("all");
    }
  }

  function handleClose() {
    if (isLoading) return;
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl">
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
          <div className="rounded-full bg-blue-100 p-2">
            <Mail className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h2 className="font-avenir-black text-xl text-gray-900">Broadcast Email</h2>
            <p className="font-lato-regular text-sm text-gray-500">
              Send mass emails to specific team groups.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Target Group */}
          <div>
            <label className="font-lato-regular mb-1 block text-sm font-medium text-gray-700">
              Target Audience
            </label>
            <select
              value={targetGroup}
              onChange={(e) => setTargetGroup(e.target.value)}
              disabled={isLoading}
              className="font-lato-regular w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-hidden"
            >
              <option value="all">All Registered Teams</option>
              <option value="accepted">Accepted Teams Only</option>
              <option value="rejected">Rejected Teams Only</option>
              <option value="pending">Pending Teams Only</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="font-lato-regular mb-1 block text-sm font-medium text-gray-700">
              Email Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. 180DC Case Competition - Important Update"
              required
              disabled={isLoading}
              className="font-lato-regular w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-hidden disabled:opacity-50"
            />
          </div>

          {/* Variables Info */}
          <div className="flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p className="font-lato-regular">
              You can personalize your emails! Use <strong>{"{TeamName}"}</strong> or{" "}
              <strong>{"{LeaderName}"}</strong> in your content to automatically inject their
              specific details.
            </p>
          </div>

          {/* Body */}
          <div>
            <label className="font-lato-regular mb-1 block text-sm font-medium text-gray-700">
              Email Content Html/Text <span className="text-red-500">*</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Hello {LeaderName} from {TeamName},&#10;&#10;We wanted to reach out regarding..."
              rows={8}
              required
              disabled={isLoading}
              className="font-lato-regular w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-hidden disabled:opacity-50"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={handleClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!subject.trim() || !content.trim() || isLoading}
              className="bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Broadcast...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Send to {targetGroup === "all" ? "All" : targetGroup}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
