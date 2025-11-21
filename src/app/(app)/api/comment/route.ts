import { NextRequest, NextResponse } from "next/server";

const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const telescopeId = searchParams.get("telescopeId");

    console.log("📡 Fetching comments for telescopeId:", telescopeId);

    if (!telescopeId) {
      return NextResponse.json(
        { error: "telescopeId is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${PAYLOAD_API_URL}/api/telescope_comments?where[telescope_id][equals]=${telescopeId}&sort=-createdAt&limit=100`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("❌ Payload API error:", response.status, response.statusText);
      return NextResponse.json(
        { error: "Failed to fetch comments from Payload" },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("✅ Fetched comments:", data.docs?.length || 0);

    const comments = data.docs.map((doc: any) => ({
      id: doc.id,
      username: doc.username,
      comment: doc.comment,
      created_at: doc.createdAt,
    }));

    return NextResponse.json(comments);
  } catch (error) {
    console.error("❌ Error fetching comments:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { telescope_id, username, user_email, comment } = body;

    console.log("📝 Creating comment for telescope:", telescope_id);

    if (!telescope_id || !username || !comment) {
      return NextResponse.json(
        { error: "telescope_id, username, and comment are required" },
        { status: 400 }
      );
    }

    const response = await fetch(`${PAYLOAD_API_URL}/api/telescope_comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        telescope_id,
        username,
        user_email,
        comment,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Payload create error:", errorData);
      return NextResponse.json(
        { error: "Failed to create comment", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("✅ Comment created:", data.doc?.id);

    return NextResponse.json(data.doc);
  } catch (error) {
    console.error("❌ Error creating comment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}