export const acceptedParticipantHTML = (teamLeader: any) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Confirmed - 180DC Video Case Competition</title>
  </head>
  <body style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9f9f9; color: #333; line-height: 1.6;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 32px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; color: #333;">Young Minds, Big Ideas! 🌟</h3>
      <h2 style="color: #6faa26; margin-top: 0; margin-bottom: 24px;">🎉 Congratulations, your registration has been accepted!</h2>

      <p>Dear <strong>${teamLeader.teamName || "Participant"}</strong>,</p>

      <p>Your registration has been successfully recorded! Thank you for registering for the <strong>180DC Video Case Competition</strong> by 180DC UGM x Gadjah Mada Business Case Club. We are excited to officially welcome you and your team to this journey! 🚀</p>

      <p>Next step, please make sure the team leader to join our WhatsApp group to stay updated with announcements and further instructions regarding the competition:</p>

      <p style="margin-bottom: 4px;"><strong>📌 WhatsApp Group</strong></p>
      <p style="margin-top: 0;"><a href="https://bit.ly/WhatsAppGroupVCC" style="color: #6faa26; font-weight: bold; text-decoration: none;">https://bit.ly/WhatsAppGroupVCC</a></p>

      <p>And here are the documents! Please make sure to review the Guidebook, Casebook, and Submission Form carefully as they contain essential information for your participation:</p>

      <p style="margin-bottom: 4px;"><strong>📖 Guidebook</strong><br/>
      <a href="https://bit.ly/GuidebookVCC" style="color: #6faa26; text-decoration: none;">bit.ly/GuidebookVCC</a></p>

      <p style="margin-bottom: 4px;"><strong>📘 Casebook</strong><br/>
      <a href="https://bit.ly/CasebookVCC" style="color: #6faa26; text-decoration: none;">bit.ly/CasebookVCC</a></p>

      <p style="margin-bottom: 24px;"><strong>🎬 Submission Form</strong><br/>
      <a href="https://bit.ly/SubmissionVideoCaseComp" style="color: #6faa26; text-decoration: none;">bit.ly/SubmissionVideoCaseComp</a></p>

      <p>If you have any questions, feel free to reach out to our Contact Persons:</p>
      <ul style="margin-top: 0; padding-left: 20px;">
        <li>Joylin (+62 817-0005-889)</li>
        <li>Anindya (+62 812-5734-0001)</li>
      </ul>

      <p style="margin-top: 24px;">We cannot wait to see the creative and impactful ideas you will bring to the table. Have fun with the case and best of luck in preparing your video! 💫</p>

      <br/>
      <p style="margin-bottom: 0;">Warm regards,<br/>
      <strong>180DC Case Competition 2026</strong></p>
    </div>
  </body>
</html>`;

export const acceptedCommitteeHTML = (teamLeader: any) => `<!DOCTYPE html>
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
</html>`;
