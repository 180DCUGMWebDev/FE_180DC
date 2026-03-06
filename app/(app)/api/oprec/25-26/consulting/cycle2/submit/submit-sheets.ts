import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/integrations/google-sheets/client";

interface ConsultingFormData {
  name: string;
  email: string;
  batch: string;
  phone: string;
  faculty: string;
  major: string;
  gpa: string;
  activeStudent: boolean;
  is180DCAlumni: boolean;
  pastPosition?: string;
  pastBatch?: string;
  firstChoicePosition: string;
  secondChoicePosition?: string;
  documentLink: string;
  cvLink: string;
  [key: string]: any;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ConsultingFormData = await request.json();

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      return NextResponse.json({ error: "Spreadsheet ID not configured" }, { status: 500 });
    }

    // Format the data for Google Sheets
    const timestamp = new Date().toISOString();
    const row = [
      timestamp,
      formData.name,
      formData.email,
      formData.batch,
      formData.phone,
      formData.faculty,
      formData.major,
      formData.gpa,
      formData.activeStudent ? "Yes" : "No",
      formData.is180DCAlumni ? "Yes" : "No",
      formData.pastPosition || "",
      formData.pastBatch || "",
      formData.firstChoicePosition,
      formData.secondChoicePosition || "",
      formData.documentLink,
      formData.cvLink,
      // Add any other fields from Slide 4, 5, 6 as needed
    ];

    // Append to Google Sheet
    await appendToSheet(spreadsheetId, "Consulting Responses!A:P", [row]);

    return NextResponse.json(
      { success: true, message: "Data submitted to Google Sheets successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to submit to Google Sheets" },
      { status: 500 }
    );
  }
}
