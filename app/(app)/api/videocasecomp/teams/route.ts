import { NextResponse } from "next/server";
import { createClient } from "@/integrations/supabase/server";

export async function GET() {
  try {
    const supabase = createClient();

    const { data: registrations, error } = await supabase
      .from("vcc-registrations")
      .select("*")
      .order("submitted_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    const teams = (registrations || []).map((row) => ({
      id: row.id,
      timestamp: row.submitted_at || "",
      status: row.status || "pending",
      payment: row.payment || "",
      teamName: row.team_name || "",
      rejectionReason: row.rejection_reason || "",
      leader: {
        name: row.leader_name || "",
        university: row.leader_university || "",
        major: row.leader_major || "",
        batch: row.leader_batch || "",
        email: row.leader_email || "",
        phone: row.leader_phone || "",
      },
      member1: {
        name: row.member1_name || "",
        university: row.member1_university || "",
        major: row.member1_major || "",
        batch: row.member1_batch || "",
        email: row.member1_email || "",
        phone: row.member1_phone || "",
      },
      member2: {
        name: row.member2_name || "",
        university: row.member2_university || "",
        major: row.member2_major || "",
        batch: row.member2_batch || "",
        email: row.member2_email || "",
        phone: row.member2_phone || "",
      },
      documents: {
        idCard: row.doc_id_card || "",
        follow: row.doc_follow || "",
        mention: row.doc_mention || "",
        repost: row.doc_repost || "",
        twibbon: row.doc_twibbon || "",
        buktiPembayaran: row.doc_bukti_pembayaran || "",
      },
      rekening: row.rekening || "",
    }));

    return NextResponse.json({ teams }, { status: 200 });
  } catch (error) {
    console.error("Error fetching teams:", error);
    return NextResponse.json(
      { message: error.message || "Failed to fetch teams" },
      { status: 500 }
    );
  }
}
