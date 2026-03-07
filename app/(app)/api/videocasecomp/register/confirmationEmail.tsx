export const committeHTML = (teamLeader) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Registration</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      padding: 24px;
      background-color: #f9f9f9;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: auto;
        background: white;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      "
    >
      <h2 style="color: #6faa26">🎉 New Video Case Competition Registration!</h2>
      <p>Hi Committee! 👋</p>
      <p>A new team has just registered for the Video Case Competition. Here are the leader's details:</p>
      <ul>
        <li><strong>Team Name:</strong> ${teamLeader.namaTim}</li>
        <li><strong>Name:</strong> ${teamLeader.namaLengkap}</li>
        <li><strong>Email:</strong> ${teamLeader.email}</li>
        <li><strong>University:</strong> ${teamLeader.universitas}</li>
        <li><strong>Phone:</strong> ${teamLeader.nomorHP}</li>
      </ul>
      <p>Please review the registration in the spreadsheet.</p>
      <hr style="margin: 32px 0" />
      <p style="font-size: 12px; color: #777">
        This is an automated notification from the 180DC UGM registration system.
      </p>
    </div>
  </body>
</html>
`;

export const participantHTML = (teamLeader) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Confirmation</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      padding: 24px;
      background-color: #f9f9f9;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: auto;
        background: white;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      "
    >
      <h2 style="color: #6faa26">📝 Registration Received!</h2>
      <p>Hi ${teamLeader.namaLengkap}! 👋</p>
      <p>
        Thank you for registering your team <strong>${teamLeader.namaTim}</strong> for the
        <strong>180DC Video Case Competition</strong>!
      </p>
      <p>
        We have received your registration and it is currently <strong>under review</strong>.
        Our team will carefully review your submission and you will receive another email within 1x24 hours
        once your registration has been accepted or if any changes are needed.
      </p>
      <p>If you have any questions, feel free to reach out to us.</p>
      <hr style="margin: 32px 0" />
      <p style="font-size: 12px; color: #777">
        If you didn't register for this competition, please ignore this email.
      </p>
    </div>
  </body>
</html>
`;
