import { NextResponse } from "next/server";
import { createClient } from "@/integrations/supabase/server";
import { sendReminderEmail } from "../../teams/utils";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // Optional: Secret token for cron jobs
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const supabase = createClient();
    
    // Calculate 24 hours ago
    const oneDayAgo = new Date();
    oneDayAgo.setHours(oneDayAgo.getHours() - 24);
    
    const { data: pendingTeams, error } = await supabase
      .from("casecomp-registrations")
      .select("id, team_name, leader_name, created_at, status")
      .eq("status", "pending")
      .lt("created_at", oneDayAgo.toISOString());

    if (error) {
      console.error("Supabase query error:", error);
      return NextResponse.json({ message: "Database query failed" }, { status: 500 });
    }

    if (!pendingTeams || pendingTeams.length === 0) {
      return NextResponse.json({ message: "No pending teams older than 24h found." });
    }

    // Send the reminder email
    await sendReminderEmail(pendingTeams);

    return NextResponse.json({ 
      message: `Success! Notification sent for ${pendingTeams.length} pending teams.`,
      count: pendingTeams.length 
    });
  } catch (error) {
    console.error("Error in check-pending route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
