import { NextResponse } from "next/server";
import { createClient } from "@/integrations/supabase/server";
import { sendRejectedEmail } from "./utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, leader, reason } = body;

    if (!id || !leader || !reason) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const supabase = createClient();

    const { error } = await supabase
      .from("vcc-registrations")
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

    await sendRejectedEmail({ teamLeader: leader, reason });

    return NextResponse.json({ message: "Team rejected successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error rejecting team:", error);
    return NextResponse.json(
      { message: error.message || "Failed to reject team" },
      { status: 500 }
    );
  }
}
