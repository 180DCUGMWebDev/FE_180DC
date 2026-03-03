export const acceptedParticipantHTML = (teamLeader) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Accepted</title>
  </head>
  <body style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9f9f9;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #6faa26;">🎉 Congratulations! Your Registration Has Been Accepted!</h2>
      <p>Hi ${teamLeader.name}! 👋</p>
      <p>
        Great news! Your team <strong>${teamLeader.teamName || ""}</strong> has been officially accepted
        for the <strong>180DC UGM Video Case Competition</strong>.
      </p>
      <p>
        Please make sure to join our WhatsApp group for important announcements, competition
        details, and further instructions:
      </p>
      <div style="text-align: center; margin: 24px 0;">
        <a
          href="https://chat.whatsapp.com/Ifz0bQ52rX54u3wG34F0v9"
          style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;"
        >
          Join WhatsApp Group
        </a>
      </div>
      <p>We look forward to seeing your team compete. Good luck!</p>
      <hr style="margin: 32px 0;" />
      <p style="font-size: 12px; color: #777;">
        If you didn't register for this competition, please ignore this email.
      </p>
    </div>
  </body>
</html>
`;

export const acceptedCommitteeHTML = (teamLeader) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Accepted</title>
  </head>
  <body style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9f9f9;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #6faa26;">✅ Team Accepted</h2>
      <p>Hi Committee! 👋</p>
      <p>The following team has been accepted for the Video Case Competition:</p>
      <ul>
        <li><strong>Team Name:</strong> ${teamLeader.teamName || ""}</li>
        <li><strong>Leader Name:</strong> ${teamLeader.name}</li>
        <li><strong>Email:</strong> ${teamLeader.email}</li>
        <li><strong>University:</strong> ${teamLeader.university}</li>
        <li><strong>Phone:</strong> ${teamLeader.phone}</li>
      </ul>
      <hr style="margin: 32px 0;" />
      <p style="font-size: 12px; color: #777;">
        This is an automated notification from the 180DC UGM registration system.
      </p>
    </div>
  </body>
</html>
`;
