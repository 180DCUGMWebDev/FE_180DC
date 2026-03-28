export const participantHTML = (teamLeader) => {
  const isIndividual = teamLeader.regType === "individual";
  const emailTarget = isIndividual ? "your" : "the Team Leader’s";

  return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Avenir', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
        .header { background-color: #5bbd8b; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 20px; }
        .footer { font-size: 12px; color: #777; text-align: center; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Registration Received!</h1>
        </div>
        <div class="content">
            <p>Dear <strong>${teamLeader.namaLengkap}</strong>,</p>
            <p>You are successfully registered for the <strong>180DC Case Competition 2026</strong>! 🎉</p>
            <p>A confirmation email will be sent to <strong>${emailTarget}</strong> email address in 1x24 hours. Please check your inbox carefully, including Spam or Junk folders. If you have not received the email, kindly contact our contact persons for assistance.</p>
            <p>Thank you and we are excited to have you join the competition!</p>

            <p>Best regards,<br><strong>180DC UGM Committee</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 180 Degrees Consulting UGM. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
};

export const committeeHTML = (teamLeader) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .info-box { background: #f4f4f4; padding: 15px; border-left: 5px solid #5bbd8b; }
    </style>
</head>
<body>
    <div class="container">
        <h2>New Case Competition Registration</h2>
        <p>A new registration has been received and requires review.</p>
        
        <div class="info-box">
            <p><strong>Team Name:</strong> ${teamLeader.namaTim || "-"}</p>
            <p><strong>Leader:</strong> ${teamLeader.namaLengkap} (${teamLeader.email})</p>
            <p><strong>University:</strong> ${teamLeader.universitas}</p>
            <p><strong>Registration Phase:</strong> ${teamLeader.registrationPhase || "Normal"}</p>
        </div>

        <p><a href="https://180dcugm.com/admin/casecomp">View in Admin Dashboard</a></p>
    </div>
</body>
</html>
`;
