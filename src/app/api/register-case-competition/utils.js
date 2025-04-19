const nodemailer = require("nodemailer");
const moment = require("moment");
import { JWT } from "google-auth-library";
import { Readable } from "stream";

export const driveFolderId = {
  follow: "1miiYf9kIuXems8nb4NvSxhJwpDycclm1",
  idCard: "1N8WL6PlYekVJoZkEt1FIMPKGLki1xkC7",
  mention: "1qIpYsukeS2QUpSP22_SLdV2T4gNRkGf4",
  repost: "1kfpWnBI5kef6-9lXPgNK9xGHXUqM5WmF",
  twibbon: "1rsf6jzYrO-bc-CQZSEZZZ231rn4Tp0o5",
  buktiPembayaran: "1bEYYPH0oBNT3RRTE2nHj4lfKY7M42ezW",
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

export const uploadData = async (sheet, payment, teamLeader, teamMember, link, bukti) => {
  try {
    await sheet.addRow({
      timestamp: moment().startOf("second").format("YYYY-MM-DD HH:mm:ss").toString(),
      Status: "-",
      Payment: payment,
      "Leader's Name": teamLeader.namaLengkap,
      "Leader's University": teamLeader.universitas,
      "Leader's Major": teamLeader.prodi,
      "Leader's Batch": teamLeader.batch,
      "Leader's Email": teamLeader.email,
      "Leader's Phone": teamLeader.nomorHP,
      "1st Member's Name": teamMember[0].namaLengkap,
      "1st Member's University": teamMember[0].universitas,
      "1st Member's Major": teamMember[0].prodi,
      "1st Member's Batch": teamMember[0].batch,
      "1st Member's Email": teamMember[0].email,
      "1st Member's Phone": teamMember[0].nomorHP,
      "2nd Member's Name": teamMember[1].namaLengkap,
      "2nd Member's University": teamMember[1].universitas,
      "2nd Member's Major": teamMember[1].prodi,
      "2nd Member's Batch": teamMember[1].batch,
      "2nd Member's Email": teamMember[1].email,
      "2nd Member's Phone": teamMember[1].nomorHP,
      "ID Card": link.idCard,
      Follow: link.follow,
      Mention: link.mention,
      Repost: link.repost,
      Twibbon: link.twibbon,
      "Bukti Pembayaran": bukti?.buktiPembayaran ? bukti.buktiPembayaran : "-",
      Rekening: bukti?.rekening ? bukti.rekening : "-",
    });
  } catch (error) {
    throw new Error("Failed to upload data");
  }
};

export const saveFileToDrive = async (fileName, column, drive, form, opsional = false) => {
  if (opsional) return null;
  const file = form.get(column);

  if (!file) {
    if (opsional) {
      return null;
    } else {
      throw new Error("File not found");
    }
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const stream = new Readable();
  stream.push(buffer);
  stream.push(null); // Akhiri stream

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
    // upload file
    uploadedFile = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });
  } catch (error) {
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
    throw new Error("Failed to share file");
  }

  //  Return link file
  return `https://drive.google.com/file/d/${uploadedFile.data.id}/preview`;
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
