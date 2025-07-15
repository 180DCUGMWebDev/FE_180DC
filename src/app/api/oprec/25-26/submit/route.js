import { createClient } from "@/integrations/supabase/server";
import { NextResponse } from "next/server";

const TABLE_NAME = "functional-analyst-batch1-25-26-submissions";

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Initialize Supabase client with the service role key
    // This bypasses Row Level Security (RLS) and allows inserts without user authentication.
    const supabase = createClient();

    // Prepare submission data from FormData
    const submissionData = {
      name: formData.get("name"),
      email: formData.get("email"),
      nim: formData.get("nim"),
      phone: formData.get("phone"),
      faculty: formData.get("faculty"),
      major: formData.get("major"),
      gpa: Number.parseFloat(formData.get("gpa")),
      activeStudent: formData.get("activeStudent") === "true", // Convert to boolean
      is180DCAlumni: formData.get("is180DCAlumni") === "true", // Convert to boolean
      pastPosition: formData.get("pastPosition") || "", // Ensure no null values
      pastBatch: formData.get("pastBatch") || "", // Ensure no null values
      applyingPosition: formData.get("applyingPosition") || "", // Ensure no null values
      firstChoicePosition: formData.get("firstChoicePosition"),
      secondChoicePosition: formData.get("secondChoicePosition"),
      whyApplyingLink: formData.get("whyApplyingLink"),
      howHelpGoalsLink: formData.get("howHelpGoalsLink"),
      cvLink: formData.get("cvLink"),
      instagramProofLink: formData.get("instagramProofLink"),
      hearAboutUs: formData.get("hearAboutUs"),
      consentAgreed: formData.get("consentAgreed") === "true", // Convert to boolean
      user_agent: request.headers.get("user-agent"), // Get user agent from request headers
      ip_address:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        request.ip ||
        "unknown", // Get IP address from various headers
      submitted_at: new Date().toISOString(), // Add timestamp
    };

    console.log("Submitting to table:", TABLE_NAME);
    console.log("Submission data:", submissionData);

    // Validate required fields
    if (!submissionData.name || !submissionData.email) {
      return NextResponse.json(
        {
          error: "Missing required fields: name and email are required",
        },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        {
          error: "Server configuration error",
        },
        { status: 500 }
      );
    }

    // Test Supabase connection with more detailed checks
    try {
      // First, check if we can access the table at all
      const { data: testData, error: testError } = await supabase
        .from(TABLE_NAME)
        .select("*")
        .limit(1);

      console.log("Supabase connection test - data:", testData, "error:", testError);

      if (testError) {
        console.error("Supabase connection test failed:", testError);
        return NextResponse.json(
          {
            error: `Database connection failed: ${testError.message}`,
            details: testError,
          },
          { status: 500 }
        );
      }

      // Check table schema
      console.log("Table accessible, sample data:", testData);
    } catch (connError) {
      console.error("Supabase connection error:", connError);
      return NextResponse.json(
        {
          error: `Database connection error: ${connError.message}`,
        },
        { status: 500 }
      );
    }

    console.log("Attempting insert with data:", JSON.stringify(submissionData, null, 2));

    const { data, error } = await supabase.from(TABLE_NAME).insert([submissionData]);

    console.log("Supabase response - data:", data);
    console.log("Supabase response - error:", error);
    console.log("Error type:", typeof error);
    console.log("Error keys:", error ? Object.keys(error) : "N/A");

    if (error && Object.keys(error).length > 0) {
      console.error("Supabase insert error:", error);
      console.error("Error details:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return NextResponse.json(
        {
          error: error.message || "Failed to save data",
          details: error.details,
          hint: error.hint,
          code: error.code,
        },
        { status: 500 }
      );
    }

    // If we get here and error is empty object, treat as success
    console.log("Form submitted successfully:", data);
    return NextResponse.json(
      { success: true, message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error.message || "An internal server error occurred" },
      { status: 500 }
    );
  }
}
