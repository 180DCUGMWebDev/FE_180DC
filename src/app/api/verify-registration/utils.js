const nodemailer = require("nodemailer");
import { JWT } from "google-auth-library";

import { committeHTML, participantHTML } from "./confirmationEmail";

export const driveFolderId = {
  follow: "1miiYf9kIuXems8nb4NvSxhJwpDycclm1",
  idCard: "1N8WL6PlYekVJoZkEt1FIMPKGLki1xkC7",
  mention: "1qIpYsukeS2QUpSP22_SLdV2T4gNRkGf4",
  repost: "1kfpWnBI5kef6-9lXPgNK9xGHXUqM5WmF",
  twibbon: "1rsf6jzYrO-bc-CQZSEZZZ231rn4Tp0o5",
  buktiPembayaran: "1HDKEeyjj1D__9_Ggp5aEQRrmin1QX399",
  spreadsheet: "1e2CSou81IKNyoi4UZ11UVpBWVwMB1gsqN4yiVnPQ2qM",
};

export const GetJWTAuth = async () => {
  const auth = new JWT({
    email: process.env.APP_CLIENT_EMAIL ?? "",
    key: (process.env.APP_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive",
    ],
  });
  return auth;
};

export const updateVerificationStatus = async (sheet, payment, teamLeader, teamMember, status) => {
  try {
    const rows = await sheet.getRows();

    const compareMemberData = (row, member, prefix) => {
      return (
        row.get(`${prefix} Name`) === member?.namaLengkap &&
        row.get(`${prefix} University`) === member?.universitas &&
        row.get(`${prefix} Major`) === member?.prodi &&
        row.get(`${prefix} Batch`) === member?.batch &&
        row.get(`${prefix} Email`) === member?.email &&
        row.get(`${prefix} Phone`) ===
          (member?.nomorHP?.startsWith("+") ? member.nomorHP.slice(1) : member.nomorHP)
      );
    };

    let targetRow = null;
    for (let i = rows.length - 1; i >= 0; --i) {
      if (
        rows[i].get("Payment") === payment &&
        compareMemberData(rows[i], teamLeader, "Leader's") &&
        compareMemberData(rows[i], teamMember[0], "1st Member's") &&
        compareMemberData(rows[i], teamMember[1], "2nd Member's")
      ) {
        targetRow = rows[i];
        break;
      }
    }

    if (!targetRow) {
      throw new Error("Matching row not found");
    }

    targetRow.set("Status", status);
    await targetRow.save();
  } catch (error) {
    throw new Error("Failed to update verification status: " + error.message);
  }
};

export const sendEmail = async ({ teamLeader }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_EMAIL ?? "",
        pass: process.env.APP_PASSWORD ?? "",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await Promise.all([
      transporter.sendMail({
        to: teamLeader.email,
        subject: "Verification Status",
        html: participantHTML(teamLeader),
      }),
      transporter.sendMail({
        to: process.env.APP_EMAIL ?? "",
        subject: "Verification Status",
        html: committeHTML(teamLeader),
      }),
    ]);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
};
