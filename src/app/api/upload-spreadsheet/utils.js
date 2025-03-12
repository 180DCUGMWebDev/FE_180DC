const nodemailer = require("nodemailer");
const moment = require("moment");
const { google } = require("googleapis");

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

export const getAuth = async () => {
  return new google.auth.GoogleAuth({
    credentials: {
      type: "service_account",
      client_email: process.env.APP_CLIENT_EMAIL ?? "",
      private_key: (process.env.APP_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });
};
