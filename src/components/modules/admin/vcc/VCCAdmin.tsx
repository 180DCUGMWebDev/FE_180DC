"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/elements/Form/button";
import { Input } from "@/components/elements/Form/input";
import {
  LogOut,
  Search,
  Mail,
  User,
  Users,
  Filter,
  Download,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { createClient } from "@/integrations/supabase/client";
import { useRouter } from "next/navigation";
import { RejectModal } from "./RejectModal";
import { BroadcastModal } from "./BroadcastModal";

interface VCCSubmission {
  id: string;
  status: string;
  rejection_reason: string | null;
  payment: string | null;
  team_name: string;
  leader_name: string;
  leader_university: string | null;
  leader_major: string | null;
  leader_batch: string | null;
  leader_email: string;
  leader_phone: string | null;
  member1_name: string | null;
  member1_university: string | null;
  member1_major: string | null;
  member1_batch: string | null;
  member1_email: string | null;
  member1_phone: string | null;
  member2_name: string | null;
  member2_university: string | null;
  member2_major: string | null;
  member2_batch: string | null;
  member2_email: string | null;
  member2_phone: string | null;
  doc_id_card: string | null;
  doc_follow: string | null;
  doc_mention: string | null;
  doc_repost: string | null;
  doc_twibbon: string | null;
  doc_bukti_pembayaran: string | null;
  rekening: string | null;
  submitted_at: string;
  reviewed_at: string | null;
}

export function VCCAdmin({
  submissions: initialSubmissions,
  adminUser,
}: {
  submissions: VCCSubmission[];
  adminUser: any;
}) {
  const [submissions, setSubmissions] = useState<VCCSubmission[]>(initialSubmissions);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [broadcastModalOpen, setBroadcastModalOpen] = useState(false);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<VCCSubmission | null>(null);
  const router = useRouter();
  const supabase = createClient();

  async function refreshData() {
    router.refresh();
  }

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((s) => {
      const search = searchTerm.toLowerCase();
      const matchesSearch =
        s.team_name?.toLowerCase().includes(search) ||
        s.leader_name?.toLowerCase().includes(search) ||
        s.leader_email?.toLowerCase().includes(search) ||
        s.leader_university?.toLowerCase().includes(search) ||
        s.member1_name?.toLowerCase().includes(search) ||
        s.member2_name?.toLowerCase().includes(search);

      const matchesStatus = selectedStatus === "all" || s.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [submissions, searchTerm, selectedStatus]);

  const pendingCount = submissions.filter((s) => s.status === "pending").length;
  const acceptedCount = submissions.filter((s) => s.status === "accepted").length;
  const rejectedCount = submissions.filter((s) => s.status === "rejected").length;

  async function handleAccept(submission: VCCSubmission) {
    setProcessingId(submission.id);
    try {
      const response = await fetch("/api/videocasecomp/teams/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: submission.id,
          leader: {
            name: submission.leader_name,
            email: submission.leader_email,
            university: submission.leader_university || "",
            phone: submission.leader_phone || "",
            teamName: submission.team_name,
          },
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Failed to accept team");
      }

      // Update local state
      setSubmissions((prev) =>
        prev.map((s) => (s.id === submission.id ? { ...s, status: "accepted" } : s))
      );
    } catch (error: any) {
      console.error("Error accepting team:", error);
      alert(error.message || "Failed to accept team");
    } finally {
      setProcessingId(null);
    }
  }

  function openRejectModal(submission: VCCSubmission) {
    setSelectedSubmission(submission);
    setRejectModalOpen(true);
  }

  async function handleReject(reason: string) {
    if (!selectedSubmission) return;
    setProcessingId(selectedSubmission.id);
    try {
      const response = await fetch("/api/videocasecomp/teams/reject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedSubmission.id,
          leader: {
            name: selectedSubmission.leader_name,
            email: selectedSubmission.leader_email,
            university: selectedSubmission.leader_university || "",
            phone: selectedSubmission.leader_phone || "",
            teamName: selectedSubmission.team_name,
          },
          reason,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Failed to reject team");
      }

      setSubmissions((prev) =>
        prev.map((s) =>
          s.id === selectedSubmission.id
            ? { ...s, status: "rejected", rejection_reason: reason }
            : s
        )
      );
      setRejectModalOpen(false);
      setSelectedSubmission(null);
    } catch (error: any) {
      console.error("Error rejecting team:", error);
      alert(error.message || "Failed to reject team");
    } finally {
      setProcessingId(null);
    }
  }

  async function handleBroadcast(targetGroup: string, subject: string, content: string) {
    setIsBroadcasting(true);
    try {
      const res = await fetch("/api/videocasecomp/teams/broadcast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetGroup, subject, content }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert(`Success! Broadcast sent to ${data.count} teams.`);
      setBroadcastModalOpen(false);
    } catch (error: any) {
      console.error("Error broadcasting:", error);
      alert(error.message || "Failed to send broadcast");
    } finally {
      setIsBroadcasting(false);
    }
  }

  async function handleLogout() {
    setIsLoggingOut(true);
    await supabase.auth.signOut();
    router.push("/dashboard/login");
  }

  function formatDate(dateString: string) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    });
  }

  function getStatusBadge(status: string) {
    switch (status) {
      case "accepted":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-600">
            <CheckCircle className="h-3 w-3" /> Accepted
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
            <XCircle className="h-3 w-3" /> Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-600">
            <Clock className="h-3 w-3" /> Pending
          </span>
        );
    }
  }

  function exportToCSV() {
    const headers = [
      "Submitted At",
      "Status",
      "Payment",
      "Team Name",
      "Leader Name",
      "Leader University",
      "Leader Major",
      "Leader Batch",
      "Leader Email",
      "Leader Phone",
      "1st Member Name",
      "1st Member University",
      "1st Member Major",
      "1st Member Batch",
      "1st Member Email",
      "1st Member Phone",
      "2nd Member Name",
      "2nd Member University",
      "2nd Member Major",
      "2nd Member Batch",
      "2nd Member Email",
      "2nd Member Phone",
      "Rekening",
    ];

    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((s) =>
        [
          `"${s.submitted_at || ""}"`,
          `"${s.status}"`,
          `"${s.payment || ""}"`,
          `"${s.team_name}"`,
          `"${s.leader_name}"`,
          `"${s.leader_university || ""}"`,
          `"${s.leader_major || ""}"`,
          `"${s.leader_batch || ""}"`,
          `"${s.leader_email}"`,
          `"${s.leader_phone || ""}"`,
          `"${s.member1_name || ""}"`,
          `"${s.member1_university || ""}"`,
          `"${s.member1_major || ""}"`,
          `"${s.member1_batch || ""}"`,
          `"${s.member1_email || ""}"`,
          `"${s.member1_phone || ""}"`,
          `"${s.member2_name || ""}"`,
          `"${s.member2_university || ""}"`,
          `"${s.member2_major || ""}"`,
          `"${s.member2_batch || ""}"`,
          `"${s.member2_email || ""}"`,
          `"${s.member2_phone || ""}"`,
          `"${s.rekening || ""}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vcc-registrations-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  function renderMember(
    label: string,
    member: {
      name?: string | null;
      email?: string | null;
      phone?: string | null;
      university?: string | null;
      major?: string | null;
      batch?: string | null;
    }
  ) {
    if (!member.name) return null;
    return (
      <div className="mb-4">
        <p className="font-avenir-regular mb-3 text-sm font-bold text-gray-700">{label}</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-lato-regular text-sm font-medium text-gray-500">Personal Info</p>
            <div className="mt-1 space-y-1 text-sm">
              <p className="font-lato-regular">
                <span className="font-lato-bold">Name:</span> {member.name}
              </p>
              <p className="font-lato-regular">
                <span className="font-lato-bold">Email:</span> {member.email || "-"}
              </p>
              <p className="font-lato-regular">
                <span className="font-lato-bold">Phone:</span> {member.phone || "-"}
              </p>
            </div>
          </div>
          <div>
            <p className="font-lato-regular text-sm font-medium text-gray-500">Academic Info</p>
            <div className="mt-1 space-y-1 text-sm">
              <p className="font-lato-regular">
                <span className="font-lato-bold">University:</span> {member.university || "-"}
              </p>
              <p className="font-lato-regular">
                <span className="font-lato-bold">Major:</span> {member.major || "-"}
              </p>
              <p className="font-lato-regular">
                <span className="font-lato-bold">Batch:</span> {member.batch || "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-8 rounded-lg bg-white/90 p-6 shadow-sm backdrop-blur-xs">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-avenir-black text-3xl text-gray-900">
                Video Case Competition - Admin Dashboard
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
                <p className="font-lato-regular text-sm font-medium text-gray-600">Total Teams</p>
                <p className="font-avenir-black text-3xl text-green-500">{submissions.length}</p>
              </div>
              <div className="rounded-full bg-green-500/10 p-3">
                <Users className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-lato-regular text-sm font-medium text-gray-600">Pending</p>
                <p className="font-avenir-black text-3xl text-yellow-500">{pendingCount}</p>
              </div>
              <div className="rounded-full bg-yellow-500/10 p-3">
                <Clock className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-lato-regular text-sm font-medium text-gray-600">Accepted</p>
                <p className="font-avenir-black text-3xl text-green-500">{acceptedCount}</p>
              </div>
              <div className="rounded-full bg-green-500/10 p-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-lato-regular text-sm font-medium text-gray-600">Rejected</p>
                <p className="font-avenir-black text-3xl text-red-500">{rejectedCount}</p>
              </div>
              <div className="rounded-full bg-red-500/10 p-3">
                <XCircle className="h-6 w-6 text-red-500" />
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
                  placeholder="Search by team name, leader, email, university..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="font-lato-regular rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-hidden"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setBroadcastModalOpen(true)}
                className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-400"
              >
                <Mail className="h-4 w-4" />
                Broadcast Email
              </Button>
              <Button onClick={refreshData} variant="outline" className="flex items-center gap-2">
                Refresh
              </Button>
              <Button onClick={exportToCSV} className="flex items-center gap-2 text-white">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-4 rounded-lg border border-neutral-200 bg-white/90 p-4 shadow-sm backdrop-blur-xs">
          <h2 className="font-avenir-regular text-xl font-bold text-gray-900">
            Registrations ({filteredSubmissions.length})
          </h2>
        </div>

        {/* Teams List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="rounded-lg bg-white/90 p-8 text-center shadow-sm backdrop-blur-xs">
              <p className="font-lato-regular text-gray-500">
                {searchTerm || selectedStatus !== "all"
                  ? "No teams match your filters."
                  : "No registrations yet."}
              </p>
            </div>
          ) : (
            filteredSubmissions.map((s) => (
              <div
                key={s.id}
                className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur-xs"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between border-b border-gray-200 pb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-avenir-black text-xl text-gray-900">{s.team_name}</h3>
                      {getStatusBadge(s.status)}
                    </div>
                    <div className="font-lato-regular mt-2 flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {s.leader_name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {s.leader_email}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="font-lato-regular rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-500">
                      {formatDate(s.submitted_at)}
                    </div>
                    {/* Action Buttons - only show for pending */}
                    {s.status === "pending" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleAccept(s)}
                          disabled={processingId === s.id}
                          className="bg-green-500 text-white hover:bg-green-600"
                        >
                          {processingId === s.id ? (
                            <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                          ) : (
                            <CheckCircle className="mr-1 h-3 w-3" />
                          )}
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openRejectModal(s)}
                          disabled={processingId === s.id}
                          className="border-red-300 text-red-500 hover:bg-red-50"
                        >
                          {processingId === s.id ? (
                            <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                          ) : (
                            <XCircle className="mr-1 h-3 w-3" />
                          )}
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Leader Info */}
                {renderMember("Team Leader", {
                  name: s.leader_name,
                  email: s.leader_email,
                  phone: s.leader_phone,
                  university: s.leader_university,
                  major: s.leader_major,
                  batch: s.leader_batch,
                })}

                {/* Member 1 */}
                {s.member1_name && (
                  <div className="border-t border-gray-200 pt-4">
                    {renderMember("1st Member", {
                      name: s.member1_name,
                      email: s.member1_email,
                      phone: s.member1_phone,
                      university: s.member1_university,
                      major: s.member1_major,
                      batch: s.member1_batch,
                    })}
                  </div>
                )}

                {/* Member 2 */}
                {s.member2_name && (
                  <div className="border-t border-gray-200 pt-4">
                    {renderMember("2nd Member", {
                      name: s.member2_name,
                      email: s.member2_email,
                      phone: s.member2_phone,
                      university: s.member2_university,
                      major: s.member2_major,
                      batch: s.member2_batch,
                    })}
                  </div>
                )}

                {/* Documents */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-avenir-regular mb-3 text-sm font-bold text-gray-700">
                    Documents
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: "doc_id_card", label: "ID Card", value: s.doc_id_card },
                      { key: "doc_follow", label: "Follow", value: s.doc_follow },
                      { key: "doc_mention", label: "Mention", value: s.doc_mention },
                      { key: "doc_repost", label: "Repost", value: s.doc_repost },
                      { key: "doc_twibbon", label: "Twibbon", value: s.doc_twibbon },
                      {
                        key: "doc_bukti_pembayaran",
                        label: "Payment Proof",
                        value: s.doc_bukti_pembayaran,
                      },
                    ].map(
                      (doc) =>
                        doc.value && (
                          <a
                            key={doc.key}
                            href={doc.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg bg-green-500/10 px-3 py-2 text-sm font-medium text-green-600 hover:bg-green-500/20"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {doc.label}
                          </a>
                        )
                    )}
                  </div>
                </div>

                {/* Rekening */}
                {s.rekening && (
                  <div className="mt-4 border-t border-gray-200 pt-3">
                    <p className="font-lato-regular text-sm text-gray-500">
                      <span className="font-lato-bold">Rekening:</span> {s.rekening}
                    </p>
                  </div>
                )}

                {/* Rejection Reason */}
                {s.status === "rejected" && s.rejection_reason && (
                  <div className="mt-4 border-t border-gray-200 pt-3">
                    <p className="font-lato-regular text-sm text-red-500">
                      <span className="font-lato-bold">Rejection Reason:</span> {s.rejection_reason}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Reject Modal */}
      <RejectModal
        isOpen={rejectModalOpen}
        onClose={() => {
          setRejectModalOpen(false);
          setSelectedSubmission(null);
        }}
        onSubmit={handleReject}
        teamName={selectedSubmission?.team_name || ""}
        isLoading={processingId !== null}
      />

      {/* Broadcast Modal */}
      <BroadcastModal
        isOpen={broadcastModalOpen}
        onClose={() => setBroadcastModalOpen(false)}
        onSubmit={handleBroadcast}
        isLoading={isBroadcasting}
      />
    </section>
  );
}
