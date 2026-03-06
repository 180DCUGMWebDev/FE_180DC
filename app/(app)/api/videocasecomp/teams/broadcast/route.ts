import { NextResponse } from "next/server";
import { createClient } from "@/integrations/supabase/server";
import { sendBroadcastEmail } from "./utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { targetGroup, subject, content } = body;

    if (!targetGroup || !subject || !content) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const supabase = createClient();

    // Fetch users based on target group
    let query = supabase.from("vcc-registrations").select("team_name, leader_name, leader_email");

    if (targetGroup !== "all") {
      query = query.eq("status", targetGroup);
    }

    const { data: teams, error } = await query;

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    if (!teams || teams.length === 0) {
      return NextResponse.json(
        { message: "No teams found for the selected group" },
        { status: 404 }
      );
    }

    // Send emails
    await sendBroadcastEmail({ teams, subject, content });

    return NextResponse.json(
      {
        message: `Broadcast sent successfully to ${teams.length} teams`,
        count: teams.length,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending broadcast:", error);
    return NextResponse.json(
      { message: error.message || "Failed to send broadcast" },
      { status: 500 }
    );
  }
}
