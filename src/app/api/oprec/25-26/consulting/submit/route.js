import { createClient } from "@/integrations/supabase/server";
import { NextResponse } from "next/server";

const TABLE_NAME = "consulting-batch1-25-26-submissions";

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Initialize Supabase client
    const supabase = createClient();

    // Prepare submission data matching slide6 formData structure
    const submissionData = {
      // Personal Information
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      faculty: formData.get("faculty"),
      major: formData.get("major"),
      batch: formData.get("batch"),
      gpa: formData.get("gpa") ? Number.parseFloat(formData.get("gpa")) : null,
      activeStudent: formData.get("activeStudent") === "true",

      // Alumni Information
      is180DCAlumni: formData.get("is180DCAlumni") === "true",
      pastPosition: formData.get("pastPosition") || "",
      pastBatch: formData.get("pastBatch") || "",

      // Position Choices (matching slide6 field names)
      firstChoicePosition: formData.get("firstChoicePosition"),
      secondChoicePosition: formData.get("secondChoicePosition"),

      // Documents (matching slide6 field names)
      documentLink: formData.get("documentLink"),
      cvLink: formData.get("cvLink"),

      // Social Media Requirements (matching slide6 field names)
      twibbonPost: formData.get("twibbonPost"),
      instagramProofLink: formData.get("instagramProofLink"),
      registrationProofLink: formData.get("registrationProofLink"),

      // Additional fields from slide6
      hearAboutUs: formData.get("hearAboutUs"),
      consentAgreed: formData.get("consentAgreed") === "true",
      consentConsultingAgreed: formData.get("consentConsultingAgreed") === "true",

      // Meta Information
      user_agent: request.headers.get("user-agent"),
      ip_address:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        request.ip ||
        "unknown",
      submitted_at: new Date().toISOString(),
    };

    console.log("Submitting to table:", TABLE_NAME);
    console.log("Submission data:", submissionData);

    // Validate required fields based on slide6 validation
    if (
      !submissionData.name ||
      !submissionData.email ||
      !submissionData.batch ||
      !submissionData.phone ||
      !submissionData.faculty ||
      !submissionData.major ||
      !submissionData.gpa ||
      submissionData.activeStudent === undefined ||
      !submissionData.firstChoicePosition ||
      !submissionData.documentLink ||
      !submissionData.cvLink ||
      !submissionData.twibbonPost ||
      !submissionData.instagramProofLink ||
      !submissionData.registrationProofLink ||
      !submissionData.hearAboutUs?.length ||
      !submissionData.consentAgreed ||
      !submissionData.consentConsultingAgreed
    ) {
      return NextResponse.json(
        {
          error: "Missing required fields. Please complete all required information.",
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

    // Test Supabase connection
    try {
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

    if (error && Object.keys(error).length > 0) {
      console.error("Supabase insert error:", error);
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

    console.log("Form submitted successfully:", data);
    return NextResponse.json(
      { success: true, message: "Application submitted successfully!" },
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
