import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import {
  driveFolderId,
  GetJWTAuth,
  GetOAuth,
  saveFileToDrive,
  sendEmail,
  uploadData,
  validateReferralCode,
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
  "Bundle",
  "Referral Code",
  "Final Fees",
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
    const bundle = form.get("bundle") || "none";
    const referralCode = form.get("referralCode") || "-";
    const finalFees = form.get("finalPrice") || "-";
    const isBundle = form.get("isBundle") === "true";
    const isReferral = form.get("isReferral") === "true";
    const revenue = parseFloat(form.get("revenue") as string || "0");

    console.log("=== CC Registration Attempt ===");
    console.log("Bundle:", bundle);
    console.log("Referral Code:", referralCode);
    console.log("Final Fees:", finalFees);
    console.log("Revenue:", revenue);
    console.log("===============================");

    const supabase = createClient();

    // Server-side referral validation
    const referralResult = await validateReferralCode(referralCode as string, supabase);
    if (!referralResult.valid) {
      return NextResponse.json({ message: referralResult.message }, { status: 400 });
    }

    // Server-side registration phase logic
    const now = new Date();
    const earlyEnd = new Date("2026-04-11T23:59:59+07:00");
    const normalEnd = new Date("2026-04-27T23:59:59+07:00");

    let serverRegistrationPhase = "normal";
    if (now <= earlyEnd) {
      serverRegistrationPhase = "early";
    } else if (now <= normalEnd) {
      serverRegistrationPhase = "normal";
    } else {
      serverRegistrationPhase = "late";
    }

    const registrationPhase = serverRegistrationPhase;

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
    
    // Skip buktiPembayaran if free
    const isFree = referralResult.discount === 1;
    if (!isFree && payment !== "international" && !form.get("buktiPembayaran")) {
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

    const [buktiLink] = await Promise.all([
      saveFileToDrive(fileBaseName, "buktiPembayaran", drive, form, true), // optional = true
    ]);

    // ✅ Execute all backend tasks in parallel to minimize response time
    await Promise.all([
      // 1. Google Sheets Task
      (async () => {
        try {
          await doc.loadInfo();
          const TARGET_SHEET = "Data";
          let sheet = doc.sheetsByTitle[TARGET_SHEET];

          if (!sheet) {
            const defaultSheet = doc.sheetsByIndex[0];
            if (defaultSheet && defaultSheet.title === "Sheet1") {
              await defaultSheet.updateProperties({ title: TARGET_SHEET });
              if (defaultSheet.columnCount < 34) {
                await defaultSheet.resize({ rowCount: defaultSheet.rowCount, columnCount: 35 });
              }
              await defaultSheet.setHeaderRow(SHEET_HEADERS);
              sheet = defaultSheet;
            } else {
              sheet = await doc.addSheet({ title: TARGET_SHEET, headerValues: SHEET_HEADERS });
            }
          } else {
            if (sheet.columnCount < 34) {
              await sheet.resize({ rowCount: sheet.rowCount, columnCount: 35 });
            }
            await sheet.loadHeaderRow().catch(() => sheet.setHeaderRow(SHEET_HEADERS));
          }

          await uploadData(
            sheet,
            payment,
            teamLeader,
            teamMember,
            { idCard: idCardLink, cv: cvLink, follow: followLink, twibbon: twibbonLink },
            { buktiPembayaran: buktiLink, rekening: form.get("rekening") },
            registrationPhase as string,
            { bundle, referralCode, finalFees }
          );
        } catch (e) {
          console.error("Critical: Google Sheets failure:", e);
        }
      })(),

      // 2. Supabase Task
      supabase
        .from("casecomp-registrations")
        .insert({
          status: "pending",
          payment,
          bundle,
          referral_code: referralCode,
          final_fees: finalFees,
          revenue: revenue,
          is_bundle: isBundle,
          is_referral: isReferral,
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

      // 3. Email Task
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
