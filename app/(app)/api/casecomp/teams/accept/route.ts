import { NextResponse } from "next/server";
import { createClient } from "@/integrations/supabase/server";
import { sendAcceptedEmail } from "../utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, leader } = body;

    if (!id || !leader) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const supabase = createClient();

    const { error } = await supabase
      .from("casecomp-registrations")
      .update({ status: "accepted", reviewed_at: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    try {
      await sendAcceptedEmail({ teamLeader: leader });
    } catch (e) {
      console.error("Email send warning (but row updated):", e);
    }

    return NextResponse.json({ message: "Team accepted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error accepting team:", error);
    return NextResponse.json(
      { message: error.message || "Failed to accept team" },
      { status: 500 }
    );
  }
}
