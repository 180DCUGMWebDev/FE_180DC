import { createClient } from "@/integrations/supabase/server";
import { appendToSheet } from "@/integrations/google-sheets/client";
import { NextResponse } from "next/server";

const TABLE_NAME = "functional-batch1-26-27-submissions";
const SHEET_TAB = process.env.GOOGLE_SHEETS_FUNCTIONAL_2627_TAB || "Functional Oprec";

// Role flags, labelled exactly as the form presents them. Eighteen booleans
// would make the sheet unreadable, so each choice collapses into one cell.
const ROLE_LABELS = [
  ["content", "Content"],
  ["graphicDesigner", "Graphic Designer"],
  ["videographer", "Videographer"],
  ["partnership", "Partnership"],
  ["frontend", "Frontend Developer"],
  ["backend", "Backend Developer"],
  ["uiux", "UI/UX Designer"],
  ["sngCeoCC", "CEO of 180DC Case Competition (CEO CC)"],
  ["sngAnalyst", "SNG Analyst"],
];

function selectedRoles(submissionData, prefix) {
  return ROLE_LABELS.filter(([key]) => submissionData[`${prefix}_${key}`])
    .map(([, label]) => label)
    .join(", ");
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Initialize Supabase client with the service role key
    // This bypasses Row Level Security (RLS) and allows inserts without user authentication.
    const supabase = createClient();

    // Prepare submission data from FormData
    const submissionData = {
      // Personal Information
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      faculty: formData.get("faculty"),
      major: formData.get("major"),
      batch: formData.get("batch"),
      gpa: Number.parseFloat(formData.get("gpa")),
      activeStudent: formData.get("activeStudent") === "true", // Convert to boolean

      // Alumni Information
      is180DCAlumni: formData.get("is180DCAlumni") === "true", // Convert to boolean
      pastPosition: formData.get("pastPosition") || "", // Ensure no null values
      pastBatch: formData.get("pastBatch") || "", // Ensure no null values

      // Position Choices
      firstChoice: formData.get("firstChoice"),
      secondChoice: formData.get("secondChoice"),

      // First Choice Role Preferences
      first_content: formData.get("first_content") === "true",
      first_graphicDesigner: formData.get("first_graphicDesigner") === "true",
      first_videographer: formData.get("first_videographer") === "true",
      first_partnership: formData.get("first_partnership") === "true",
      first_frontend: formData.get("first_frontend") === "true",
      first_backend: formData.get("first_backend") === "true",
      first_uiux: formData.get("first_uiux") === "true",
      first_sngCeoCC: formData.get("first_sngCeoCC") === "true",
      first_sngAnalyst: formData.get("first_sngAnalyst") === "true",

      // First Choice Documents
      first_cvLink: formData.get("first_cvLink"),
      first_documentLink: formData.get("first_documentLink"),
      first_portfolioLink: formData.get("first_portfolioLink"),

      // Second Choice Role Preferences
      second_content: formData.get("second_content") === "true",
      second_graphicDesigner: formData.get("second_graphicDesigner") === "true",
      second_videographer: formData.get("second_videographer") === "true",
      second_partnership: formData.get("second_partnership") === "true",
      second_frontend: formData.get("second_frontend") === "true",
      second_backend: formData.get("second_backend") === "true",
      second_uiux: formData.get("second_uiux") === "true",
      second_sngCeoCC: formData.get("second_sngCeoCC") === "true",
      second_sngAnalyst: formData.get("second_sngAnalyst") === "true",

      // Second Choice Documents
      second_cvLink: formData.get("second_cvLink"),
      second_documentLink: formData.get("second_documentLink"),
      second_portfolioLink: formData.get("second_portfolioLink"),

      // Social Media Requirements
      twibbonPostLink: formData.get("twibbonPostLink"),
      twibbonProofLink: formData.get("twibbonProofLink"),

      // Consent and Meta Information
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

    // Mirror the row into Google Sheets so HR can follow applications live.
    // Runs after the insert, and never rethrows: Supabase is the source of
    // truth, so a Sheets outage must not fail a submission the applicant has
    // already completed.
    try {
      const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
      if (spreadsheetId) {
        const sheetRow = [
          submissionData.submitted_at,
          submissionData.name,
          submissionData.email,
          submissionData.phone,
          submissionData.faculty,
          submissionData.major,
          submissionData.batch,
          submissionData.gpa?.toString() || "",
          submissionData.activeStudent ? "Yes" : "No",
          submissionData.is180DCAlumni ? "Yes" : "No",
          submissionData.pastPosition || "",
          submissionData.pastBatch || "",
          submissionData.firstChoice,
          selectedRoles(submissionData, "first"),
          submissionData.first_documentLink,
          submissionData.first_cvLink,
          submissionData.first_portfolioLink || "",
          submissionData.secondChoice || "No second choice",
          selectedRoles(submissionData, "second"),
          submissionData.second_documentLink || "",
          submissionData.second_cvLink || "",
          submissionData.second_portfolioLink || "",
          submissionData.twibbonPostLink,
          submissionData.twibbonProofLink,
          submissionData.consentAgreed ? "Yes" : "No",
          submissionData.ip_address,
          submissionData.user_agent,
        ];

        await appendToSheet(spreadsheetId, `${SHEET_TAB}!A:AA`, [sheetRow]);
        console.log("Successfully submitted to Google Sheets");
      } else {
        console.warn("Google Sheets ID not configured, skipping Google Sheets submission");
      }
    } catch (sheetsError) {
      console.error("Failed to submit to Google Sheets:", sheetsError);
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
