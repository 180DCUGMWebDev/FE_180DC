import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import {
  driveFolderId,
  GetJWTAuth,
  GetOAuth,
  saveFileToDrive,
  sendEmail,
  uploadData,
} from "./utils";
import { google } from "googleapis";
import { createClient } from "@/integrations/supabase/server";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

const SHEET_HEADERS = [
  "timestamp",
  "Status",
  "Enrollment Type",
  "Role",
  "Payment",
  "Registration Phase",
  "Team Name",
  "Leader's Name",
  "Leader's University",
  "Leader's Major",
  "Leader's Batch",
  "Leader's Email",
  "Leader's Phone",
  "1st Member's Name",
  "1st Member's University",
  "1st Member's Major",
  "1st Member's Batch",
  "1st Member's Email",
  "1st Member's Phone",
  "2nd Member's Name",
  "2nd Member's University",
  "2nd Member's Major",
  "2nd Member's Batch",
  "2nd Member's Email",
  "2nd Member's Phone",
  "ID Card Link",
  "CV Link",
  "Follow, Comment, Repost Proof",
  "Twibbon & Mention 5 Friends Proof",
  "Bukti Pembayaran",
  "Rekening",
];

export async function POST(request) {
  try {
    const form = await request.formData();
    const payment = form.get("payment");
    const registrationPhase = form.get("registrationPhase") || "normal";

    const [auth, oauth] = await Promise.all([GetJWTAuth(), GetOAuth()]);
    const drive = google.drive({ version: "v3", auth: oauth });

    const teamLeader = JSON.parse(form.get("teamLeader"));
    const teamMember = JSON.parse(form.get("teamMembers"));

    const formattedDate = new Date().toISOString().replace(/:/g, "-").split(".")[0];
    const fileBaseName = `${teamLeader.namaLengkap} - ${formattedDate}`;
    const doc = new GoogleSpreadsheet(driveFolderId.spreadsheet, auth);

    // ✅ Validate required fields (now links except buktiPembayaran)
    const requiredFields: string[] = ["idCard", "cv", "follow", "twibbon"];
    const missingFields = requiredFields.filter((field) => !form.get(field));
    if (payment !== "international" && !form.get("buktiPembayaran")) {
      missingFields.push("buktiPembayaran");
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          message: `Missing required file(s): ${missingFields.join(", ")}. Please go back and re-upload your files.`,
        },
        { status: 400 }
      );
    }

    const idCardLink = form.get("idCard");
    const cvLink = form.get("cv");
    const followLink = form.get("follow");
    const twibbonLink = form.get("twibbon");

    // ✅ Run only file uploads for buktiPembayaran AND spreadsheet loading in parallel
    const [buktiLink] = await Promise.all([
      saveFileToDrive(fileBaseName, "buktiPembayaran", drive, form, true), // optional = true
      doc.loadInfo(),
    ]);

    // Resolve sheet (create/fix if needed)
    const TARGET_SHEET = "Data";
    let sheet = doc.sheetsByTitle[TARGET_SHEET];

    if (!sheet) {
      const defaultSheet = doc.sheetsByIndex[0];
      if (defaultSheet && defaultSheet.title === "CaseComp") {
        await defaultSheet.updateProperties({ title: TARGET_SHEET });
        if (defaultSheet.columnCount < 31) {
          await defaultSheet.resize({ rowCount: defaultSheet.rowCount, columnCount: 32 });
        }
        await defaultSheet.setHeaderRow(SHEET_HEADERS);
        sheet = defaultSheet;
      } else {
        sheet = await doc.addSheet({ title: TARGET_SHEET, headerValues: SHEET_HEADERS });
      }
    } else {
      if (sheet.columnCount < 31) {
        await sheet.resize({ rowCount: sheet.rowCount, columnCount: 32 });
      }
      await sheet.loadHeaderRow().catch(() => sheet.setHeaderRow(SHEET_HEADERS));
    }

    // Write to Google Sheets (blocking — must complete before returning)
    await uploadData(
      sheet,
      payment,
      teamLeader,
      teamMember,
      { idCard: idCardLink, cv: cvLink, follow: followLink, twibbon: twibbonLink },
      { buktiPembayaran: buktiLink, rekening: form.get("rekening") },
      registrationPhase as string
    );

    // ✅ Run Supabase insert + email in parallel (both non-critical for response)
    const supabase = createClient();
    await Promise.all([
      supabase
        .from("casecomp-registrations")
        .insert({
          status: "pending",
          payment,
          team_name: teamLeader.namaTim,
          leader_name: teamLeader.namaLengkap,
          leader_university: teamLeader.universitas,
          leader_major: teamLeader.prodi,
          leader_batch: teamLeader.batch,
          leader_email: teamLeader.email,
          leader_phone: teamLeader.nomorHP,
          member1_name: teamMember[0]?.namaLengkap || null,
          member1_university: teamMember[0]?.universitas || null,
          member1_major: teamMember[0]?.prodi || null,
          member1_batch: teamMember[0]?.batch || null,
          member1_email: teamMember[0]?.email || null,
          member1_phone: teamMember[0]?.nomorHP || null,
          member2_name: teamMember[1]?.namaLengkap || null,
          member2_university: teamMember[1]?.universitas || null,
          member2_major: teamMember[1]?.prodi || null,
          member2_batch: teamMember[1]?.batch || null,
          member2_email: teamMember[1]?.email || null,
          member2_phone: teamMember[1]?.nomorHP || null,
          doc_id_card: idCardLink,
          doc_cv: cvLink,
          doc_follow: followLink,
          doc_twibbon: twibbonLink,
          doc_bukti_pembayaran: buktiLink,
          rekening: form.get("rekening") || null,
          registration_phase: registrationPhase,
        })
        .then(({ error }) => {
          if (error) console.error("Supabase insert error:", error);
        }),
      sendEmail({ teamLeader }).catch((e) => {
        console.error("Failed to send email:", e);
      }),
    ]);

    return NextResponse.json({ message: "Success sent!", status: 200 });
  } catch (error) {
    console.error("Error:", error);
    const errorMessage =
      error?.response?.data?.error?.message ?? error?.message ?? "An error occurred";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
