const nodemailer = require("nodemailer");
const moment = require("moment");
import { JWT } from "google-auth-library";
import { google } from "googleapis";
import { Readable } from "stream";

export const GetJWTAuth = async () => {
  const auth = new JWT({
    email: process.env.APP_CLIENT_EMAIL ?? "",
    key: (process.env.APP_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });
  return auth;
};

export const uploadData = async (data, sheet) => {
  try {
    await sheet.addRow({
      timestamp: moment().startOf("second").format("YYYY-MM-DD HH:mm:ss").toString(),
      name: data[0].answer,
      position: data[1].answer,
      email: data[2].answer,
      phone: data[3].answer,
      entity_name: data[4].answer,
      entity_loc: data[5].answer,
      entity_social: data[6].answer,
      entity_background: data[7].answer,
      entity_length: data[8].answer,
      entity_size: data[9].answer,
      scope: data[10].answer,
      outcome: data[11].answer,
      info_source: data[12].answer,
    });
  } catch (error) {
    console.error("Failed to upload data:", error);
    throw new Error("Failed to upload data");
  }
};

export const saveFileToDrive = async (fileName, request) => {
  const form = await request.formData();
  const file = form.get("proofData");

  if (!file) {
    throw new Error("File not found");
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const stream = new Readable();
  stream.push(buffer);
  stream.push(null); // Akhiri stream

  //   Initilize Google Drive API
  const auth = await GetJWTAuth();
  const drive = google.drive({ version: "v3", auth });

  //   Prepare file metadata
  const fileMetadata = {
    name: fileName,
    parents: ["12njAYopcsE6-fhsHdz6jVjEyVd1oY2pj"], // Diisi sama folder ID yang diinginkan
  };

  //   Jenis file yang dikirim
  const media = {
    mimeType: file.type, // bisa juga application/jpeg / application/png
    body: stream, // Gunakan stream agar bisa diproses oleh Google Drive API
  };

  let uploadedFile = null;
  try {
    // upload file
    uploadedFile = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });
  } catch (error) {
    console.error("Failed to upload file:", error);
    throw new Error("Failed to upload file");
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
    });
  } catch (error) {
    console.error("Failed to share file:", error);
    throw new Error("Failed to share file");
  }
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

    await sendEmail({ email: data });
  } catch (error) {
    console.error("Failed to upload subscription:", error);
    throw new Error("Failed to upload subscription");
  }
};

const sendEmail = async (body) => {
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

    await transporter.sendMail({
      to: process.env.APP_EMAIL ?? "",
      subject: "Subsciber baru!",
      text: `Email baru: ${body.email}`,
      html: `<p><b>${body.email}</b> telah melakukan subscibe</p> `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
};
