import nodemailer from "nodemailer";
import { acceptedParticipantHTML, acceptedCommitteeHTML } from "./confirmationEmail";

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

    await Promise.all([
      transporter.sendMail({
        from: `"180DC UGM" <${process.env.APP_EMAIL}>`,
        to: teamLeader.email,
        subject: "Registration Confirmed - 180DC Video Case Competition",
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
