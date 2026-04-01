import nodemailer from "nodemailer";
import moment from "moment";
import { JWT } from "google-auth-library";
import { Readable } from "stream";
import { committeeHTML, participantHTML } from "./confirmationEmail";

const DRIVE_FOLDER = "1DCHj2PmBzDNqZpjTIcalDMx6C0u_pJ90";

export const driveFolderId = {
  follow: DRIVE_FOLDER,
  idCard: DRIVE_FOLDER,
  mention: DRIVE_FOLDER,
  repost: DRIVE_FOLDER,
  twibbon: DRIVE_FOLDER,
  cv: DRIVE_FOLDER,
  buktiPembayaran: DRIVE_FOLDER,
  spreadsheet: "18XtOIz8LAw05swyzNWX9jBx8y3ZJs4zo09BID_a87cE",
};

import { getGoogleAuth, getGoogleOAuth } from "@/lib/googleAuth";
export const GetJWTAuth = async () => getGoogleAuth();
export const GetOAuth = async () => getGoogleOAuth();

export const uploadData = async (sheet, payment, teamLeader, teamMember, link, bukti, registrationPhase) => {
  try {
    await sheet.addRow({
      timestamp: moment().startOf("second").format("YYYY-MM-DD HH:mm:ss").toString(),
      Status: "-",
      "Enrollment Type": teamLeader.regType || "team",
      Role: teamLeader.role || "leader",
      Payment: payment,
      "Registration Phase": registrationPhase || "normal",
      "Team Name": teamLeader.namaTim,
      "Leader's Name": teamLeader.namaLengkap,
      "Leader's University": teamLeader.universitas,
      "Leader's Major": teamLeader.prodi,
      "Leader's Batch": teamLeader.batch,
      "Leader's Email": teamLeader.email,
      "Leader's Phone": teamLeader.nomorHP,
      "1st Member's Name": teamMember[0]?.namaLengkap || "-",
      "1st Member's University": teamMember[0]?.universitas || "-",
      "1st Member's Major": teamMember[0]?.prodi || "-",
      "1st Member's Batch": teamMember[0]?.batch || "-",
      "1st Member's Email": teamMember[0]?.email || "-",
      "1st Member's Phone": teamMember[0]?.nomorHP || "-",
      "2nd Member's Name": teamMember[1]?.namaLengkap || "-",
      "2nd Member's University": teamMember[1]?.universitas || "-",
      "2nd Member's Major": teamMember[1]?.prodi || "-",
      "2nd Member's Batch": teamMember[1]?.batch || "-",
      "2nd Member's Email": teamMember[1]?.email || "-",
      "2nd Member's Phone": teamMember[1]?.nomorHP || "-",
      "ID Card Link": link.idCard,
      "CV Link": link.cv,
      "Follow, Comment, Repost Proof": link.follow,
      "Twibbon & Mention 5 Friends Proof": link.twibbon,
      "Bukti Pembayaran": bukti.buktiPembayaran,
      Rekening: bukti.rekening,
    });
  } catch (error) {
    console.error("Sheet upload error:", error);
    throw new Error(
      `Failed to upload data: ${error instanceof Error ? error.message : String(error)}`
    );
  }
};

export const saveFileToDrive = async (fileName, column, drive, form, opsional = false) => {
  const file = form.get(column);

  if (!file) {
    if (opsional) return null;
    throw new Error(`File not found for field: ${column}`);
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const stream = Readable.from(buffer);

  //   Prepare file metadata
  const extension = file.name.split(".").pop();

  const folderId = driveFolderId[column];
  if (!folderId) {
    throw new Error("Google Drive folder ID is missing or invalid");
  }

  const fileMetadata = {
    name: `${fileName}.${extension}`,
    parents: [folderId], // Diisi sama folder ID yang diinginkan
  };

  //   Jenis file yang dikirim
  const media = {
    mimeType: file.type, // bisa juga application/jpeg / application/png
    body: stream, // Gunakan stream agar bisa diproses oleh Google Drive API
  };

  let uploadedFile = null;
  try {
    // upload file — supportsAllDrives needed for service account (no personal quota)
    uploadedFile = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
      supportsAllDrives: true,
    });
  } catch (error) {
    console.error(`Failed to upload file for ${column}:`, error);
    throw new Error(
      `Failed to upload file for ${column}: ${error instanceof Error ? error.message : String(error)}`
    );
  }

  //   Share file
  const permission = {
    type: "anyone",
    role: "reader",
  };

  try {
    await drive.permissions.create({
      fileId: uploadedFile.data.id,
      resource: permission,
      supportsAllDrives: true,
    });
  } catch (error) {
    throw new Error("Failed to share file");
  }

  //  Return link file
  return `https://drive.google.com/file/d/${uploadedFile.data.id}/view`;
};

export const uploadSubscribe = async (data, sheet) => {
  try {
    // Avoid duplicates
    const newsletterEmails = await sheet.getRows().then((rows) => {
      return rows.map((row) => {
        const emailHeaderIndex = sheet.headerValues.indexOf("email");
        if (emailHeaderIndex !== -1) {
          return row._rawData[emailHeaderIndex] || "";
        } else {
          console.warn("Email header not found in sheet!");
          return "";
        }
      });
    });

    const emailExists = newsletterEmails.includes(data);
    if (emailExists) return;

    await sheet.addRow({
      timestamp: moment().startOf("second").format("YYYY-MM-DD HH:mm:ss").toString(),
      email: data,
    });

    await sendEmail({ teamLeader: data });
  } catch (error) {
    throw new Error("Failed to upload subscription");
  }
};

export const sendEmail = async ({ teamLeader }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.APP_EMAIL ?? "",
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        refreshToken: process.env.APP_MAIL_REFRESH_TOKEN ?? "",
      },
    });

    await Promise.all([
      transporter.sendMail({
        from: `"180DC Case Competition" <${process.env.APP_EMAIL}>`,
        to: teamLeader.email,
        subject: "Registration Received - 180 Case Competition",
        html: participantHTML(teamLeader),
      }),
      transporter.sendMail({
        from: `"180DC Case Competition" <${process.env.APP_EMAIL}>`,
        to: process.env.APAC_EMAIL ?? "",
        subject: "Case Competition - New Registration (Pending Review)",
        html: committeeHTML(teamLeader),
      }),
    ]);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
};
