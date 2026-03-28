export const acceptedParticipantHTML = (teamLeader) => {
  const isIndividual = teamLeader.teamName === "-";
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
            <h1>Registration Approved!</h1>
        </div>
        <div class="content">
            <p>Dear <strong>${teamLeader.name}</strong>,</p>
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

export const rejectedParticipantHTML = (teamLeader, reason) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Avenir', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
        .header { background-color: #e53e3e; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 20px; }
        .footer { font-size: 12px; color: #777; text-align: center; margin-top: 20px; }
        .links-box { background-color: #f7fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin-top: 20px; }
        .link-item { margin-bottom: 8px; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Registration Status Update</h1>
        </div>
        <div class="content">
            <p>Dear <strong>${teamLeader.name}</strong>,</p>
            <p>Your registration for the <strong>180DC Case Competition 2026</strong> has not been approved.</p>
            <p>This may be due to incomplete registration requirements or unsuccessful payment verification.</p>
            <p><strong>Rejection Detail:</strong> ${reason}</p>
            
            <p>If you believe this was a mistake or have any questions regarding your registration, please contact our contact persons for further assistance.</p>
            <p>Thank you for your interest in the 180DC Case Competition.</p>

            <div class="links-box">
                <div class="link-item"><strong>WAG prelim:</strong> <a href="https://180dcugm.com/WAGPreliminaryCC">180dcugm.com/WAGPreliminaryCC</a></div>
                <div class="link-item"><strong>WAG Matchmaking (khusus individu):</strong> <a href="https://180dcugm.com/WAGMatchmaking">180dcugm.com/WAGMatchmaking</a></div>
                <div class="link-item"><strong>Guidebook:</strong> <a href="https://180dcugm.com/GuidebookCC">180dcugm.com/GuidebookCC</a></div>
                <div class="link-item"><strong>Casebook:</strong> <a href="https://180dcugm.com/CasebookCC">180dcugm.com/CasebookCC</a></div>
            </div>

            <p>Best regards,<br><strong>180DC UGM Committee</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 180 Degrees Consulting UGM. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
