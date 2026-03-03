import nodemailer from "nodemailer";
import { acceptedParticipantHTML, acceptedCommitteeHTML } from "./confirmationEmail";

const createTransporter = () =>
  nodemailer.createTransport({
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

export const sendAcceptedEmail = async ({ teamLeader }) => {
  try {
    const transporter = createTransporter();

    await Promise.all([
      transporter.sendMail({
        from: `"180DC UGM" <${process.env.APP_EMAIL}>`,
        to: teamLeader.email,
        subject: "Video Case Competition - Registration Accepted!",
        html: acceptedParticipantHTML(teamLeader),
      }),
      transporter.sendMail({
        from: `"180DC UGM" <${process.env.APP_EMAIL}>`,
        to: process.env.APAC_EMAIL ?? "",
        subject: "Video Case Competition - Team Accepted",
        html: acceptedCommitteeHTML(teamLeader),
      }),
    ]);
  } catch (error) {
    console.error("Failed to send accepted email:", error);
    throw new Error("Failed to send email");
  }
};
