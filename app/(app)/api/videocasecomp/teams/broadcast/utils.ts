import nodemailer from "nodemailer";

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

export const sendBroadcastEmail = async ({ teams, subject, content }) => {
  try {
    const transporter = createTransporter();

    // To prevent hitting rate limits immediately, we map through and send them sequentially 
    // or you could use promise.all but map is somewhat safer for bulk.
    // However, if the list is small, Promise.all is fine.
    
    const emailPromises = teams.map((team) => {
      // Replace variables in content like {TeamName} or {LeaderName} if needed
      let personalizedContent = content
        .replace(/\{TeamName\}/gi, team.team_name)
        .replace(/\{LeaderName\}/gi, team.leader_name);
        
      // Ensure the content is wrapped in some basic HTML styling
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
          ${personalizedContent.replace(/\n/g, "<br/>")}
        </div>
      `;
      
      return transporter.sendMail({
        from: `"180DC UGM Video Case Competition" <${process.env.APP_EMAIL}>`,
        to: team.leader_email,
        subject: subject,
        html: htmlBody,
      });
    });

    await Promise.all(emailPromises);
  } catch (error) {
    console.error("Failed to send broadcast emails:", error);
    throw new Error("Failed to send broadcast emails");
  }
};


