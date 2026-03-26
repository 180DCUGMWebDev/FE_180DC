import nodemailer from "nodemailer";
import { acceptedParticipantHTML, rejectedParticipantHTML } from "./confirmationEmail";

const createTransporter = () =>
  nodemailer.createTransport({
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

export const sendAcceptedEmail = async ({ teamLeader }) => {
  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"180DC Case Competition" <${process.env.APP_EMAIL}>`,
      to: teamLeader.email,
      subject: "Registration Accepted - 180 Case Competition",
      html: acceptedParticipantHTML(teamLeader),
    });
  } catch (error) {
    console.error("Failed to send accepted email:", error);
    throw new Error("Failed to send email");
  }
};

export const sendRejectedEmail = async ({ teamLeader, reason }) => {
  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"180DC Case Competition" <${process.env.APP_EMAIL}>`,
      to: teamLeader.email,
      subject: "Registration Rejected - 180 Case Competition",
      html: rejectedParticipantHTML(teamLeader, reason),
    });
  } catch (error) {
    console.error("Failed to send rejected email:", error);
    throw new Error("Failed to send email");
  }
};

export const sendBroadcastEmail = async ({ recipient, subject, content }) => {
  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"180DC Case Competition" <${process.env.APP_EMAIL}>`,
      to: recipient.email,
      subject: subject,
      html: content,
    });
  } catch (error) {
    console.error("Failed to send broadcast email:", error);
    throw new Error("Failed to send broadcast email");
  }
};
