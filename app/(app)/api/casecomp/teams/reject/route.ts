import { NextResponse } from "next/server";
import { createClient } from "@/integrations/supabase/server";
import { sendRejectedEmail } from "../utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, leader, reason } = body;

    if (!id || !leader || !reason) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const supabase = createClient();

    const { error } = await supabase
      .from("casecomp-registrations")
      .update({
        status: "rejected",
        rejection_reason: reason,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    try {
      await sendRejectedEmail({ teamLeader: leader, reason });
    } catch (e) {
      console.error("Email send warning (but row updated):", e);
    }

    return NextResponse.json({ message: "Team rejected successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error rejecting team:", error);
    return NextResponse.json(
      { message: error.message || "Failed to reject team" },
      { status: 500 }
    );
  }
}
