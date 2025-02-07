const nodemailer = require("nodemailer");
const moment = require("moment");

export const uploadData = async (data, sheet) => {
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
    scope: dta[10].answer,
    outcome: data[11].answer,
    info_source: data[12].answer,
  });
};

export const uploadSubscribe = async (data, sheet) => {
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

  sendEmail({ email: data });
};

const sendEmail = async (body) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter
    .sendMail({
      to: process.env.APP_EMAIL,
      subject: "Subsciber baru!",
      text: `Email baru: ${body.email}`,
      html: `<p><b>${body.email}</b> telah melakukan subscibe</p> `,
    })
    .catch((err) => {
      console.log("Fail to send email!", err);
    });
};
