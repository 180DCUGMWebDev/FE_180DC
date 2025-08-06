"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogOut, Search, Mail, User, Calendar, Globe, Filter, Download } from "lucide-react";
import { createClient } from "@/integrations/supabase/client";
import { useRouter } from "next/navigation";

export function Admin({ submissions, adminUser }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("all");
  const router = useRouter();
  const supabase = createClient();

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.faculty?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.major?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.batch?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPosition =
      selectedPosition === "all" ||
      submission.firstChoice === selectedPosition ||
      submission.secondChoice === selectedPosition;

    return matchesSearch && matchesPosition;
  });

  const uniquePositions = [
    ...new Set([
      ...submissions.map((s) => s.firstChoice).filter(Boolean),
      ...submissions.map((s) => s.secondChoice).filter(Boolean),
    ]),
  ];

  async function handleLogout() {
    setIsLoggingOut(true);
    await supabase.auth.signOut();
    router.push("/admin/login");
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
      "Name",
      "Email",
      "Phone",
      "Batch",
      "Faculty",
      "Major",
      "GPA",
      "Active Student",
      "180DC Alumni",
      "Past Position",
      "Past Batch",
      "First Choice",
      "Second Choice",
      "One Position",
      "Two Positions",
      "First CV Link",
      "First Document Link",
      "First Portfolio Link",
      "Second CV Link",
      "Second Document Link",
      "Second Portfolio Link",
      "Twibbon Post Link",
      "Twibbon Proof Link",
      "Consent Agreed",
      "First Choice Roles",
      "Second Choice Roles",
      "Submitted At",
    ];

    const getSelectedRoles = (submission, prefix) => {
      const roles = [];
      // Marketing roles
      if (submission[`${prefix}_content`]) roles.push("Content");
      if (submission[`${prefix}_graphicDesigner`]) roles.push("Graphic Designer");
      if (submission[`${prefix}_videographer`]) roles.push("Videographer");
      if (submission[`${prefix}_partnership`]) roles.push("Partnership");
      // IT roles
      if (submission[`${prefix}_frontend`]) roles.push("Frontend");
      if (submission[`${prefix}_backend`]) roles.push("Backend");
      if (submission[`${prefix}_uiux`]) roles.push("UI/UX");
      // SNG roles
      if (submission[`${prefix}_sngManager`]) roles.push("SNG Manager");
      if (submission[`${prefix}_sngAnalyst`]) roles.push("SNG Analyst");
      return roles.join("; ");
    };

    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((submission) =>
        [
          `"${submission.name || ""}"`,
          `"${submission.email || ""}"`,
          `"${submission.phone || ""}"`,
          `"${submission.batch || ""}"`,
          `"${submission.faculty || ""}"`,
          `"${submission.major || ""}"`,
          submission.gpa || "",
          submission.activeStudent ? "Yes" : "No",
          submission.is180DCAlumni ? "Yes" : "No",
          `"${submission.pastPosition || ""}"`,
          `"${submission.pastBatch || ""}"`,
          `"${submission.firstChoice || ""}"`,
          `"${submission.secondChoice || ""}"`,
          submission.onePosition ? "Yes" : "No",
          submission.twoPositions ? "Yes" : "No",
          `"${submission.first_cvLink || ""}"`,
          `"${submission.first_documentLink || ""}"`,
          `"${submission.first_portfolioLink || ""}"`,
          `"${submission.second_cvLink || ""}"`,
          `"${submission.second_documentLink || ""}"`,
          `"${submission.second_portfolioLink || ""}"`,
          `"${submission.twibbonPostLink || ""}"`,
          `"${submission.twibbonProofLink || ""}"`,
          submission.consentAgreed ? "Yes" : "No",
          `"${getSelectedRoles(submission, "first")}"`,
          `"${getSelectedRoles(submission, "second")}"`,
          `"${formatDate(submission.submitted_at)}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `180dc-oprec-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-8 rounded-lg bg-white/90 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="mt-1 text-gray-600">Selamat datang, {adminUser.email}</p>
            </div>
            <Button variant="outline" onClick={handleLogout} disabled={isLoggingOut}>
              <LogOut className="mr-2 h-4 w-4" />
              {isLoggingOut ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border-[1px] border-neutral-200 bg-white/90 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                <p className="text-3xl font-bold text-primary">{submissions.length}</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border-[1px] border-neutral-200 bg-white/90 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today&apos;s Submissions</p>
                <p className="text-3xl font-bold text-primary">
                  {
                    submissions.filter(
                      (s) => new Date(s.submitted_at).toDateString() === new Date().toDateString()
                    ).length
                  }
                </p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border-[1px] border-neutral-200 bg-white/90 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unique Applicants</p>
                <p className="text-3xl font-bold text-primary">
                  {new Set(submissions.map((s) => s.email)).size}
                </p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <User className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 rounded-lg border-[1px] border-neutral-200 bg-white/90 p-6 backdrop-blur-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="relative max-w-md flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Cari nama, email, phone, fakultas, batch..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <select
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="all">All Positions</option>
                    {uniquePositions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button onClick={exportToCSV} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </div>

          {/* Results Header */}
          <div className="mb-4 rounded-lg border-[1px] border-neutral-200 bg-white/90 p-4 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Submissions ({filteredSubmissions.length})
            </h2>
          </div>

          {/* Submissions List */}
          <div className="space-y-2 border-[1px] border-neutral-200 p-4">
            {filteredSubmissions.length === 0 ? (
              <div className="rounded-lg bg-white/90 p-8 text-center backdrop-blur-sm">
                <p className="text-gray-500">
                  {searchTerm || selectedPosition !== "all"
                    ? "Tidak ada submission yang cocok dengan filter."
                    : "Belum ada submission."}
                </p>
              </div>
            ) : (
              filteredSubmissions.map((submission) => (
                <div key={submission.id} className="rounded-lg bg-white/90 p-6 backdrop-blur-sm">
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between border-b border-gray-200 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{submission.name}</h3>
                      <div className="mt-1 flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {submission.email}
                        </div>
                        <div>Batch: {submission.batch}</div>
                        <div>Phone: {submission.phone}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {formatDate(submission.submitted_at)}
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Personal Info</p>
                      <div className="mt-1 space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Phone:</span> {submission.phone}
                        </p>
                        <p>
                          <span className="font-medium">Faculty:</span> {submission.faculty}
                        </p>
                        <p>
                          <span className="font-medium">Major:</span> {submission.major}
                        </p>
                        <p>
                          <span className="font-medium">Batch:</span> {submission.batch}
                        </p>
                        <p>
                          <span className="font-medium">GPA:</span> {submission.gpa}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500">Application Details</p>
                      <div className="mt-1 space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Active Student:</span>{" "}
                          {submission.activeStudent ? "Yes" : "No"}
                        </p>
                        <p>
                          <span className="font-medium">One Position:</span>{" "}
                          {submission.onePosition ? "Yes" : "No"}
                        </p>
                        <p>
                          <span className="font-medium">Two Positions:</span>{" "}
                          {submission.twoPositions ? "Yes" : "No"}
                        </p>
                        <p>
                          <span className="font-medium">180DC Alumni:</span>{" "}
                          {submission.is180DCAlumni ? "Yes" : "No"}
                        </p>
                        {submission.is180DCAlumni && (
                          <>
                            <p>
                              <span className="font-medium">Past Position:</span>{" "}
                              {submission.pastPosition}
                            </p>
                            <p>
                              <span className="font-medium">Past Batch:</span>{" "}
                              {submission.pastBatch}
                            </p>
                          </>
                        )}

                        <p>
                          <span className="font-medium">1st Choice:</span> {submission.firstChoice}
                        </p>
                        <p>
                          <span className="font-medium">2nd Choice:</span>{" "}
                          {submission.secondChoice || "None"}
                        </p>
                        <p>
                          <span className="font-medium">Consent Agreed:</span>{" "}
                          {submission.consentAgreed ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500">First Choice Documents</p>
                      <div className="mt-1 space-y-1 text-sm">
                        <p>
                          <span className="font-medium">CV:</span>{" "}
                          {submission.first_cvLink ? (
                            <a
                              href={submission.first_cvLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              View
                            </a>
                          ) : (
                            "Not provided"
                          )}
                        </p>
                        <p>
                          <span className="font-medium">Document:</span>{" "}
                          {submission.first_documentLink ? (
                            <a
                              href={submission.first_documentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              View
                            </a>
                          ) : (
                            "Not provided"
                          )}
                        </p>
                        <p>
                          <span className="font-medium">Portfolio:</span>{" "}
                          {submission.first_portfolioLink ? (
                            <a
                              href={submission.first_portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              View
                            </a>
                          ) : (
                            "Not provided"
                          )}
                        </p>
                      </div>

                      {/* First Choice Roles */}
                      <div className="mt-3">
                        <p className="text-xs font-medium text-gray-500">Selected Roles:</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {submission.first_content && (
                            <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                              Content
                            </span>
                          )}
                          {submission.first_graphicDesigner && (
                            <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                              Graphic Designer
                            </span>
                          )}
                          {submission.first_videographer && (
                            <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                              Videographer
                            </span>
                          )}
                          {submission.first_partnership && (
                            <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                              Partnership
                            </span>
                          )}
                          {submission.first_frontend && (
                            <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                              Frontend
                            </span>
                          )}
                          {submission.first_backend && (
                            <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                              Backend
                            </span>
                          )}
                          {submission.first_uiux && (
                            <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                              UI/UX
                            </span>
                          )}
                          {submission.first_sngManager && (
                            <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs text-red-800">
                              SNG Manager
                            </span>
                          )}
                          {submission.first_sngAnalyst && (
                            <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs text-red-800">
                              SNG Analyst
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500">Second Choice & Others</p>
                      <div className="mt-1 space-y-1 text-sm">
                        {submission.secondChoice && (
                          <>
                            <p>
                              <span className="font-medium">2nd CV:</span>{" "}
                              {submission.second_cvLink ? (
                                <a
                                  href={submission.second_cvLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  View
                                </a>
                              ) : (
                                "Not provided"
                              )}
                            </p>
                            <p>
                              <span className="font-medium">2nd Document:</span>{" "}
                              {submission.second_documentLink ? (
                                <a
                                  href={submission.second_documentLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  View
                                </a>
                              ) : (
                                "Not provided"
                              )}
                            </p>
                            <p>
                              <span className="font-medium">2nd Portfolio:</span>{" "}
                              {submission.second_portfolioLink ? (
                                <a
                                  href={submission.second_portfolioLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  View
                                </a>
                              ) : (
                                "Not provided"
                              )}
                            </p>
                          </>
                        )}
                        <p>
                          <span className="font-medium">Twibbon Post:</span>{" "}
                          {submission.twibbonPostLink ? (
                            <a
                              href={submission.twibbonPostLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              View
                            </a>
                          ) : (
                            "Not provided"
                          )}
                        </p>
                        <p>
                          <span className="font-medium">Twibbon Proof:</span>{" "}
                          {submission.twibbonProofLink ? (
                            <a
                              href={submission.twibbonProofLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              View
                            </a>
                          ) : (
                            "Not provided"
                          )}
                        </p>
                      </div>

                      {/* Second Choice Roles */}
                      {submission.secondChoice && (
                        <div className="mt-3">
                          <p className="text-xs font-medium text-gray-500">2nd Choice Roles:</p>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {submission.second_content && (
                              <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">
                                Content
                              </span>
                            )}
                            {submission.second_graphicDesigner && (
                              <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">
                                Graphic Designer
                              </span>
                            )}
                            {submission.second_videographer && (
                              <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">
                                Videographer
                              </span>
                            )}
                            {submission.second_partnership && (
                              <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">
                                Partnership
                              </span>
                            )}
                            {submission.second_frontend && (
                              <span className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                Frontend
                              </span>
                            )}
                            {submission.second_backend && (
                              <span className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                Backend
                              </span>
                            )}
                            {submission.second_uiux && (
                              <span className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                UI/UX
                              </span>
                            )}
                            {submission.second_sngManager && (
                              <span className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                                SNG Manager
                              </span>
                            )}
                            {submission.second_sngAnalyst && (
                              <span className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                                SNG Analyst
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      IP: {submission.ip_address}
                    </div>
                    <div className="truncate">User Agent: {submission.user_agent}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
