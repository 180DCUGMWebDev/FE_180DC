"use client";

import { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import {
  LogOut,
  Search,
  Mail,
  User,
  Calendar,
  Filter,
  Download,
  Users,
  Package,
} from "lucide-react";
import { createClient } from "@/integrations/supabase/client";
import { useRouter } from "next/navigation";

export function Admin({ submissions, adminUser }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [selectedRegType, setSelectedRegType] = useState("all");
  const router = useRouter();
  const supabase = createClient();

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.p1_full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.p1_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.p1_university?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.p1_batch?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.p2_full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.p2_email?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegType = selectedRegType === "all" || submission.reg_type === selectedRegType;

    return matchesSearch && matchesRegType;
  });

  // Count registrations
  const individualCount = submissions.filter((s) => s.reg_type === "individual").length;
  const duoCount = submissions.filter((s) => s.reg_type === "duo").length;
  const withCasebookCount = submissions.filter((s) => s.buy_casebook === true).length;

  async function handleLogout() {
    setIsLoggingOut(true);
    await supabase.auth.signOut();
    router.push("/dashboard/login");
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    });
  }

  function exportToCSV() {
    const headers = [
      "Registration Type",
      "Buy Casebook",
      "Full Name",
      "Email",
      "WhatsApp",
      "University",
      "Batch",
      "Faculty",
      "Major",
      "Motivation",
      "CV Link",
      "Full Name P2",
      "Email P2",
      "WhatsApp P2",
      "University P2",
      "Batch P2",
      "Faculty P2",
      "Major P2",
      "Motivation P2",
      "CV Link P2",
      "Find Us",
      "Social Proof Link",
      "Refund Bank",
      "Refund Account Number",
      "Payment Proof URL",
      "Submitted At",
      "IP Address",
    ];

    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((submission) =>
        [
          `"${submission.reg_type}"`,
          submission.buy_casebook ? "Yes" : "No",
          `"${submission.p1_full_name}"`,
          `"${submission.p1_email}"`,
          `"${submission.p1_whatsapp}"`,
          `"${submission.p1_university}"`,
          `"${submission.p1_batch}"`,
          `"${submission.p1_faculty || ""}"`,
          `"${submission.p1_major || ""}"`,
          `"${submission.p1_motivation?.replace(/"/g, '""') || ""}"`,
          `"${submission.p1_cv_link}"`,
          `"${submission.p2_full_name || ""}"`,
          `"${submission.p2_email || ""}"`,
          `"${submission.p2_whatsapp || ""}"`,
          `"${submission.p2_university || ""}"`,
          `"${submission.p2_batch || ""}"`,
          `"${submission.p2_faculty || ""}"`,
          `"${submission.p2_major || ""}"`,
          `"${submission.p2_motivation?.replace(/"/g, '""') || ""}"`,
          `"${submission.p2_cv_link || ""}"`,
          `"${submission.find_us || ""}"`,
          `"${submission.drive_link || ""}"`,
          `"${submission.refundbank || ""}"`,
          `"${submission.refundnumber || ""}"`,
          `"${submission.payment_proof_url || ""}"`,
          `"${formatDate(submission.submitted_at)}"`,
          `"${submission.ip_address || ""}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bootcamp-2025-registrations-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-8 rounded-lg bg-white/90 p-6 shadow-sm backdrop-blur-xs">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-avenir-black text-3xl text-gray-900">
                Bootcamp 2025 - Admin Dashboard
              </h1>
              <p className="font-lato-regular mt-1 text-gray-600">
                Selamat datang, {adminUser.email}
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout} disabled={isLoggingOut}>
              <LogOut className="mr-2 h-4 w-4" />
              {isLoggingOut ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-lato-regular text-sm font-medium text-gray-600">
                  Total Registrations
                </p>
                <p className="font-avenir-black text-3xl text-green-300">{submissions.length}</p>
              </div>
              <div className="rounded-full bg-green-300/10 p-3">
                <Mail className="h-6 w-6 text-green-300" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-lato-regular text-sm font-medium text-gray-600">Individual</p>
                <p className="font-avenir-black text-3xl text-blue-300">{individualCount}</p>
              </div>
              <div className="rounded-full bg-blue-300/10 p-3">
                <User className="h-6 w-6 text-blue-300" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-lato-regular text-sm font-medium text-gray-600">Duo</p>
                <p className="font-avenir-black text-3xl text-cyan-300">{duoCount}</p>
              </div>
              <div className="rounded-full bg-cyan-300/10 p-3">
                <Users className="h-6 w-6 text-cyan-300" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-lato-regular text-sm font-medium text-gray-600">With Casebook</p>
                <p className="font-avenir-black text-3xl text-lime-300">{withCasebookCount}</p>
              </div>
              <div className="rounded-full bg-lime-300/10 p-3">
                <Package className="h-6 w-6 text-lime-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative max-w-md flex-1">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by name, email, university, batch..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  value={selectedRegType}
                  onChange={(e) => setSelectedRegType(e.target.value)}
                  className="font-lato-regular rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-300 focus:ring-1 focus:ring-green-300 focus:outline-hidden"
                >
                  <option value="all">All Types</option>
                  <option value="individual">Individual</option>
                  <option value="duo">Duo</option>
                </select>
              </div>
            </div>

            <Button onClick={exportToCSV} className="flex items-center gap-2 text-white">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-4 rounded-lg border border-neutral-200 bg-white/90 p-4 shadow-sm backdrop-blur-xs">
          <h2 className="font-avenir-regular text-xl font-bold text-gray-900">
            Registrations ({filteredSubmissions.length})
          </h2>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="rounded-lg bg-white/90 p-8 text-center shadow-sm backdrop-blur-xs">
              <p className="font-lato-regular text-gray-500">
                {searchTerm || selectedRegType !== "all"
                  ? "No registrations match your filters."
                  : "No registrations yet."}
              </p>
            </div>
          ) : (
            filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between border-b border-gray-200 pb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-avenir-black text-xl text-gray-900">
                        {submission.p1_full_name}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          submission.reg_type === "individual"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-cyan-100 text-cyan-600"
                        }`}
                      >
                        {submission.reg_type.toUpperCase()}
                      </span>
                      {submission.buy_casebook && (
                        <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-600">
                          + CASEBOOK
                        </span>
                      )}
                    </div>
                    <div className="font-lato-regular mt-2 flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {submission.p1_email}
                      </div>
                      <div>Batch: {submission.p1_batch}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-lato-regular rounded-full bg-green-300/10 px-3 py-1 text-sm font-medium text-green-300">
                      {formatDate(submission.submitted_at)}
                    </div>
                  </div>
                </div>

                {/* Participant 1 Info */}
                <div className="mb-4">
                  <p className="font-avenir-regular mb-3 text-sm font-bold text-gray-700">
                    Participant 1
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="font-lato-regular text-sm font-medium text-gray-500">
                        Contact Info
                      </p>
                      <div className="mt-1 space-y-1 text-sm">
                        <p className="font-lato-regular">
                          <span className="font-lato-bold">WhatsApp:</span> {submission.p1_whatsapp}
                        </p>
                        <p className="font-lato-regular">
                          <span className="font-lato-bold">University:</span>{" "}
                          {submission.p1_university}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="font-lato-regular text-sm font-medium text-gray-500">
                        Academic Info
                      </p>
                      <div className="mt-1 space-y-1 text-sm">
                        <p className="font-lato-regular">
                          <span className="font-lato-bold">Faculty:</span>{" "}
                          {submission.p1_faculty || "-"}
                        </p>
                        <p className="font-lato-regular">
                          <span className="font-lato-bold">Major:</span>{" "}
                          {submission.p1_major || "-"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="font-lato-regular text-sm font-medium text-gray-500">
                        Documents
                      </p>
                      <div className="mt-1 space-y-1 text-sm">
                        <p className="font-lato-regular">
                          <span className="font-lato-bold">CV:</span>{" "}
                          <a
                            href={submission.p1_cv_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-300 hover:underline"
                          >
                            View Link
                          </a>
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="font-lato-regular text-sm font-medium text-gray-500">
                        Motivation
                      </p>
                      <div className="mt-1 text-sm">
                        <p className="font-lato-regular line-clamp-3 text-gray-700">
                          {submission.p1_motivation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Participant 2 Info (if duo) */}
                {submission.reg_type === "duo" && submission.p2_full_name && (
                  <div className="mb-4 border-t border-gray-200 pt-4">
                    <p className="font-avenir-regular mb-3 text-sm font-bold text-gray-700">
                      Participant 2
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <p className="font-lato-regular text-sm font-medium text-gray-500">
                          Personal Info
                        </p>
                        <div className="mt-1 space-y-1 text-sm">
                          <p className="font-lato-regular">
                            <span className="font-lato-bold">Name:</span> {submission.p2_full_name}
                          </p>
                          <p className="font-lato-regular">
                            <span className="font-lato-bold">Email:</span> {submission.p2_email}
                          </p>
                          <p className="font-lato-regular">
                            <span className="font-lato-bold">WhatsApp:</span>{" "}
                            {submission.p2_whatsapp}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="font-lato-regular text-sm font-medium text-gray-500">
                          Academic Info
                        </p>
                        <div className="mt-1 space-y-1 text-sm">
                          <p className="font-lato-regular">
                            <span className="font-lato-bold">University:</span>{" "}
                            {submission.p2_university}
                          </p>
                          <p className="font-lato-regular">
                            <span className="font-lato-bold">Batch:</span> {submission.p2_batch}
                          </p>
                          <p className="font-lato-regular">
                            <span className="font-lato-bold">Faculty:</span>{" "}
                            {submission.p2_faculty || "-"}
                          </p>
                          <p className="font-lato-regular">
                            <span className="font-lato-bold">Major:</span>{" "}
                            {submission.p2_major || "-"}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="font-lato-regular text-sm font-medium text-gray-500">
                          Documents
                        </p>
                        <div className="mt-1 space-y-1 text-sm">
                          <p className="font-lato-regular">
                            <span className="font-lato-bold">CV:</span>{" "}
                            <a
                              href={submission.p2_cv_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-300 hover:underline"
                            >
                              View Link
                            </a>
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="font-lato-regular text-sm font-medium text-gray-500">
                          Motivation
                        </p>
                        <div className="mt-1 text-sm">
                          <p className="font-lato-regular line-clamp-3 text-gray-700">
                            {submission.p2_motivation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                <div className="mb-4 border-t border-gray-200 pt-4">
                  <p className="font-avenir-regular mb-3 text-sm font-bold text-gray-700">
                    Additional Information
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <p className="font-lato-regular text-sm font-medium text-gray-500">
                        How did they find us?
                      </p>
                      <div className="mt-1 text-sm">
                        <p className="font-lato-regular text-gray-700">
                          {submission.find_us || "-"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-lato-regular text-sm font-medium text-gray-500">
                        Social Media Proof
                      </p>
                      <div className="mt-1 text-sm">
                        {submission.drive_link ? (
                          <a
                            href={submission.drive_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            View Drive Link
                          </a>
                        ) : (
                          <p className="font-lato-regular text-gray-500">No link provided</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="font-lato-regular text-sm font-medium text-gray-500">
                        Refund Bank Account
                      </p>
                      <div className="mt-1 space-y-1 text-sm">
                        <p className="font-lato-regular text-gray-700">
                          <span className="font-lato-bold">Bank:</span>{" "}
                          {submission.refundbank || "-"}
                        </p>
                        <p className="font-lato-regular text-gray-700">
                          <span className="font-lato-bold">Number:</span>{" "}
                          {submission.refundnumber || "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Proof */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-lato-regular text-sm font-medium text-gray-500">
                    Payment Proof
                  </p>
                  <div className="mt-2">
                    {submission.payment_proof_url ? (
                      <a
                        href={submission.payment_proof_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-green-300/10 px-4 py-2 text-sm font-medium text-green-300 hover:bg-green-300/20"
                      >
                        <Package className="h-4 w-4" />
                        View Payment Proof
                      </a>
                    ) : (
                      <p className="font-lato-regular text-sm text-gray-500">No proof uploaded</p>
                    )}
                  </div>
                </div>

                {/* Footer - IP Address */}
                {submission.ip_address && (
                  <div className="mt-4 border-t border-gray-200 pt-3">
                    <p className="font-lato-regular text-xs text-gray-400">
                      IP: {submission.ip_address}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
