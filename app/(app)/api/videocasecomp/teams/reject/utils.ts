import nodemailer from "nodemailer";
import { rejectedParticipantHTML, rejectedCommitteeHTML } from "./confirmationEmail";

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

export const sendRejectedEmail = async ({ teamLeader, reason }) => {
  try {
    const transporter = createTransporter();

    await Promise.all([
      transporter.sendMail({
        from: `"180DC Video Case Competition" <${process.env.APP_EMAIL}>`,
        to: teamLeader.email,
        subject: "Registration Rejected - 180DC Video Case Competition",
        html: rejectedParticipantHTML(teamLeader, reason),
      }),
      transporter.sendMail({
        from: `"180DC Video Case Competition" <${process.env.APP_EMAIL}>`,
        to: process.env.APAC_EMAIL ?? "",
        subject: "Video Case Competition - Team Rejected",
        html: rejectedCommitteeHTML(teamLeader, reason),
      }),
    ]);
  } catch (error) {
    console.error("Failed to send rejected email:", error);
    throw new Error("Failed to send email");
  }
};
