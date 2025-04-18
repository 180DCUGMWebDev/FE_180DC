export const committeHTML = (teamLeader) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verification Success</title>
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
      <h2 style="color: #6faa26">🎉 New Participant Already Registered!</h2>
      <p>Hi!👋</p>
      <p>Leader's Identity:</p>
      <ul>
        <li><strong>Name :</strong> ${teamLeader.namaLengkap}</li>
        <li><strong>Email :</strong> ${teamLeader.email}</li>
        <li><strong>University: </strong> ${teamLeader.universitas}</li>
        <li><strong>Phone :</strong> ${teamLeader.nomorHP}</li>
      </ul>
  </body>
</html>
`;

export const participantHTML = (teamLeader) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verification Success</title>
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
      <h2 style="color: #6faa26">🎉 APAC Registration Verification</h2>
      <p>Hi ${teamLeader.namaLengkap}! 👋</p>
      <p>
        Thanks for registering! Stay tuned for the latest info and announcements — we'll keep you updated through our official channels.
      </p>
      <hr style="margin: 32px 0" />
      <p style="font-size: 12px; color: #777">
        If you didn’t register for this, please ignore this email.
      </p>
    </div>
  </body>
</html>
`;
