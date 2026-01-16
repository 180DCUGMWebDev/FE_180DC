"use client";

import { useState } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
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
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.batch?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.faculty?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPosition =
      selectedPosition === "all" || submission.firstChoicePosition === selectedPosition;

    return matchesSearch && matchesPosition;
  });

  const uniquePositions = [
    ...new Set(submissions.map((s) => s.firstChoicePosition).filter(Boolean)),
  ] as string[];

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
      "Name",
      "Email",
      "Batch",
      "Phone",
      "Faculty",
      "Major",
      "GPA",
      "Active Student",
      "180DC Alumni",
      "Past Position",
      "Past Batch",
      "First Choice",
      "Second Choice",
      "Motivation Document",
      "CV Link",
      "Twibbon Post",
      "Instagram Proof",
      "How Hear About Us",
      "Consent Agreed",
      "Submitted At",
    ];
    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((submission) =>
        [
          `"${submission.name}"`,
          `"${submission.email}"`,
          `"${submission.batch}"`,
          `"${submission.phone}"`,
          `"${submission.faculty}"`,
          `"${submission.major}"`,
          submission.gpa,
          submission.activeStudent ? "Yes" : "No",
          submission.is180DCAlumni ? "Yes" : "No",
          `"${submission.pastPosition || ""}"`,
          `"${submission.pastBatch || ""}"`,
          `"${submission.firstChoicePosition}"`,
          `"${submission.secondChoicePosition || ""}"`,
          `"${submission.documentLink}"`,
          `"${submission.cvLink}"`,
          `"${submission.twibbonPost}"`,
          `"${submission.instagramProofLink}"`,
          `"${Array.isArray(submission.hearAboutUs) ? submission.hearAboutUs.join("; ") : submission.hearAboutUs}"`,
          submission.consentAgreed ? "Yes" : "No",
          `"${formatDate(submission.submitted_at)}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `consulting-cycle2-oprec-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-8 rounded-lg bg-white/90 p-6 backdrop-blur-xs">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Consulting Cycle 2 Dashboard</h1>
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
          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                <p className="text-3xl font-bold text-green-300">{submissions.length}</p>
              </div>
              <div className="rounded-full bg-green-300/10 p-3">
                <Mail className="h-6 w-6 text-green-300" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today&apos;s Submissions</p>
                <p className="text-3xl font-bold text-green-300">
                  {
                    submissions.filter(
                      (s) => new Date(s.submitted_at).toDateString() === new Date().toDateString()
                    ).length
                  }
                </p>
              </div>
              <div className="rounded-full bg-green-300/10 p-3">
                <Calendar className="h-6 w-6 text-green-300" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unique Applicants</p>
                <p className="text-3xl font-bold text-green-300">
                  {new Set(submissions.map((s) => s.email)).size}
                </p>
              </div>
              <div className="rounded-full bg-green-300/10 p-3">
                <User className="h-6 w-6 text-green-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 rounded-lg border border-neutral-200 bg-white/90 p-6 backdrop-blur-xs">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative max-w-md flex-1">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Cari nama, email, batch, fakultas..."
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
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-300 focus:ring-1 focus:ring-green-300 focus:outline-hidden"
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

            <Button onClick={exportToCSV} className="flex items-center gap-2 text-white">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-4 rounded-lg border border-neutral-200 bg-white/90 p-4 backdrop-blur-xs">
          <h2 className="text-xl font-semibold text-gray-900">
            Submissions ({filteredSubmissions.length})
          </h2>
        </div>

        {/* Submissions List */}
        <div className="space-y-2 border border-neutral-200 p-4">
          {filteredSubmissions.length === 0 ? (
            <div className="rounded-lg bg-white/90 p-8 text-center backdrop-blur-xs">
              <p className="text-gray-500">
                {searchTerm || selectedPosition !== "all"
                  ? "Tidak ada submission yang cocok dengan filter."
                  : "Belum ada submission."}
              </p>
            </div>
          ) : (
            filteredSubmissions.map((submission) => (
              <div key={submission.id} className="rounded-lg bg-white/90 p-6 backdrop-blur-xs">
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
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="rounded-full bg-green-300/10 px-3 py-1 text-sm font-medium text-green-300">
                      {formatDate(submission.submitted_at)}
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                        <span className="font-medium">180DC Alumni:</span>{" "}
                        {submission.is180DCAlumni ? "Yes" : "No"}
                      </p>
                      {submission.is180DCAlumni && (
                        <>
                          <p>
                            <span className="font-medium">Past Position:</span>{" "}
                            {submission.pastPosition || "N/A"}
                          </p>
                          <p>
                            <span className="font-medium">Past Batch:</span>{" "}
                            {submission.pastBatch || "N/A"}
                          </p>
                        </>
                      )}
                      <p>
                        <span className="font-medium">1st Choice:</span>{" "}
                        {submission.firstChoicePosition}
                      </p>
                      <p>
                        <span className="font-medium">2nd Choice:</span>{" "}
                        {submission.secondChoicePosition || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">Documents & Links</p>
                    <div className="mt-1 space-y-1 text-sm">
                      <p>
                        <span className="font-medium">CV:</span>{" "}
                        <a
                          href={submission.cvLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-300 hover:underline"
                        >
                          View
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Motivation Document:</span>{" "}
                        <a
                          href={submission.documentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-300 hover:underline"
                        >
                          View
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Twibbon Post:</span>{" "}
                        <a
                          href={submission.twibbonPost}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-300 hover:underline"
                        >
                          View
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Instagram Proof:</span>{" "}
                        <a
                          href={submission.instagramProofLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-300 hover:underline"
                        >
                          View
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-4 grid grid-cols-1 gap-4 border-t border-gray-200 pt-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Additional Information</p>
                    <div className="mt-1 space-y-1 text-sm">
                      <p>
                        <span className="font-medium">How heard about us:</span>{" "}
                        {Array.isArray(submission.hearAboutUs)
                          ? submission.hearAboutUs.join(", ")
                          : submission.hearAboutUs}
                      </p>
                      <p>
                        <span className="font-medium">Consent:</span>{" "}
                        {submission.consentAgreed ? "Agreed" : "Not Agreed"}
                      </p>
                    </div>
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
    </section>
  );
}
