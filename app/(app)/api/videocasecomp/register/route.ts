import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { driveFolderId, GetJWTAuth, saveFileToDrive, sendEmail, uploadData } from "./utils";
import { google } from "googleapis";
import { requestCreatePayment } from "../../midtrans/create-payment/utils";
import { createClient } from "@/integrations/supabase/server";

export async function POST(request) {
  try {
    const form = await request.formData();
    const payment = form.get("payment");
    const isInternational = payment === "international";

    // Payment
    // let paymentJson = {
    //   order_id: null,
    //   gross_amount: null,
    //   snap_token: null,
    // };
    // if (!isInternational) {
    //   const paymentMidtrans = await requestCreatePayment(form);

    //   if (!paymentMidtrans) {
    //     console.error("Failed to create payment");
    //     throw new Error("Failed to create payment");
    //   }

    //   paymentJson = await paymentMidtrans.json();

    //   if (paymentJson.error) {
    //     console.error("Payment error:", paymentJson.error);
    //     throw new Error(`Payment error`);
    //   }
    // }

    const auth = await GetJWTAuth();
    const drive = google.drive({ version: "v3", auth });

    const teamLeader = JSON.parse(form.get("teamLeader"));
    const teamMember = JSON.parse(form.get("teamMembers"));

    const formattedDate = new Date()
      .toISOString()
      .replace(/:/g, "-") // Menghindari karakter tidak valid
      .split(".")[0]; // Menghapus bagian milidetik

    const doc = new GoogleSpreadsheet(driveFolderId.spreadsheet, auth);
    const fileBaseName = `${teamLeader.namaLengkap} - ${formattedDate}`;
    const [idCardLink, followLink, mentionLink, repostLink, twibbonLink, buktiLink] =
      await Promise.all([
        saveFileToDrive(fileBaseName, "idCard", drive, form),
        saveFileToDrive(fileBaseName, "follow", drive, form),
        saveFileToDrive(fileBaseName, "mention", drive, form),
        saveFileToDrive(fileBaseName, "repost", drive, form),
        saveFileToDrive(fileBaseName, "twibbon", drive, form),
        saveFileToDrive(fileBaseName, "buktiPembayaran", drive, form),
        doc.loadInfo(),
      ]);

    const target = "Data";
    const sheet = doc.sheetsByTitle[target];
    if (!sheet) {
      throw new Error(`Sheet with title "${target}" not found`);
    }
    await uploadData(
      sheet,
      payment,
      teamLeader,
      teamMember,
      {
        idCard: idCardLink,
        follow: followLink,
        mention: mentionLink,
        repost: repostLink,
        twibbon: twibbonLink,
      },
      {
        buktiPembayaran: buktiLink,
        rekening: form.get("rekening"),
      }
    );

    // Insert into Supabase
    const supabase = createClient();
    const { error: supabaseError } = await supabase.from("vcc-registrations").insert({
      status: "pending",
      payment: payment,
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
      doc_follow: followLink,
      doc_mention: mentionLink,
      doc_repost: repostLink,
      doc_twibbon: twibbonLink,
      doc_bukti_pembayaran: buktiLink,
      rekening: form.get("rekening") || null,
    });

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);
      // Don't throw - Google Sheets already has the data
    }

    await sendEmail({
      teamLeader,
    }).catch(() => {
      throw new Error("Failed to send email");
    });

    // Return payment
    // const { order_id, gross_amount, snap_token } = paymentJson;

    return NextResponse.json({
      message: "Success sent!",
      status: 200,
      // body: { order_id, gross_amount, snap_token },
    });
  } catch (error) {
    console.error("Error:", error);
    let errorMessage = "An error occurred";
    if (error.response) {
      errorMessage = `Google API error: ${error.response.data.error.message}`;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
