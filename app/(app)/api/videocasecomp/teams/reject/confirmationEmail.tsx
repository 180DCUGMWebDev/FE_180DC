export const rejectedParticipantHTML = (teamLeader, reason: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Update</title>
  </head>
  <body style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9f9f9;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #e74c3c;">Registration Update</h2>
      <p>Hi ${teamLeader.name}! 👋</p>
      <p>
        Thank you for your interest in the <strong>180DC Video Case Competition</strong>.
        After careful review, we regret to inform you that your team
        <strong>${teamLeader.teamName || ""}</strong> registration could not be accepted at this time.
      </p>
      <div style="background-color: #fef2f2; border-left: 4px solid #e74c3c; padding: 16px; margin: 16px 0; border-radius: 4px;">
        <p style="margin: 0; font-weight: bold; color: #e74c3c;">Reason:</p>
        <p style="margin: 8px 0 0 0; color: #333;">${reason}</p>
      </div>
      <p>
        If you would like to re-register, please make sure to register with <strong>another email address</strong>.
      </p>
      <p>
        If you believe this was a mistake or would like further clarification, please don't
        hesitate to reach out to us.
      </p>
      <p>We appreciate your interest and hope to see you in future events!</p>
      <hr style="margin: 32px 0;" />
      <p style="font-size: 12px; color: #777;">
        If you didn't register for this competition, please ignore this email.
      </p>
    </div>
  </body>
</html>
`;

export const rejectedCommitteeHTML = (teamLeader, reason: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Rejected</title>
  </head>
  <body style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9f9f9;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #e74c3c;">❌ Team Rejected</h2>
      <p>Hi Committee! 👋</p>
      <p>The following team has been rejected from the Video Case Competition:</p>
      <ul>
        <li><strong>Team Name:</strong> ${teamLeader.teamName || ""}</li>
        <li><strong>Leader Name:</strong> ${teamLeader.name}</li>
        <li><strong>Email:</strong> ${teamLeader.email}</li>
        <li><strong>University:</strong> ${teamLeader.university}</li>
        <li><strong>Phone:</strong> ${teamLeader.phone}</li>
      </ul>
      <div style="background-color: #fef2f2; border-left: 4px solid #e74c3c; padding: 16px; margin: 16px 0; border-radius: 4px;">
        <p style="margin: 0; font-weight: bold; color: #e74c3c;">Rejection Reason:</p>
        <p style="margin: 8px 0 0 0; color: #333;">${reason}</p>
      </div>
      <hr style="margin: 32px 0;" />
      <p style="font-size: 12px; color: #777;">
        This is an automated notification from the 180DC UGM registration system.
      </p>
    </div>
  </body>
</html>
`;
