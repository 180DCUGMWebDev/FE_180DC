import { NextResponse } from "next/server";
import { createClient } from "@/integrations/supabase/server";
import { sendBroadcastEmail } from "../utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { targetGroup, subject, content } = body;

    if (!targetGroup || !subject || !content) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const supabase = createClient();
    
    let query = supabase.from("casecomp-registrations").select("leader_name, leader_email, team_name");
    
    if (targetGroup !== "all") {
      query = query.eq("status", targetGroup);
    }
    
    const { data: teams, error } = await query;

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    if (!teams || teams.length === 0) {
      return NextResponse.json({ message: "No teams found for this group" }, { status: 404 });
    }

    // Send emails in background chunks to avoid timeout
    let successCount = 0;
    for (const team of teams) {
      try {
        const personalizedContent = content
          .replace(/{LeaderName}/g, team.leader_name)
          .replace(/{TeamName}/g, team.team_name);
          
        await sendBroadcastEmail({
          recipient: { email: team.leader_email },
          subject,
          content: personalizedContent
        });
        successCount++;
      } catch (e) {
        console.error(`Failed to send broadcast to ${team.leader_email}:`, e);
      }
    }

    return NextResponse.json({ message: `Broadcast sent to ${successCount} teams.`, count: successCount }, { status: 200 });
  } catch (error: any) {
    console.error("Error broadcasting:", error);
    return NextResponse.json(
      { message: error.message || "Failed to broadcast" },
      { status: 500 }
    );
  }
}
