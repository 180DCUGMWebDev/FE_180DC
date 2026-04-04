export const acceptedParticipantHTML = (teamLeader) => {
  const isIndividual = teamLeader.teamName === "-";
  const emailTarget = isIndividual ? "your" : "the Team Leader’s";

  const content = isIndividual
    ? `
            <h1>🎉 Congratulations! Your registration has been accepted.</h1>
            <p>Dear <strong>${teamLeader.name}</strong>,</p>
            <p>Your registration has been successfully recorded. Thank you for registering for the 180DC Case Competition 2026 by 180DC UGM. We are excited to officially welcome you and your team to this journey! 🚀</p>
            <p><strong>Next Step</strong></p>
            <p>Please ensure that you join WhatsApp group to stay updated with announcements and further instructions regarding the competition:</p>
            <p><strong>📌 WhatsApp Group</strong><br>
            <a href="https://180dcugm.com/WAGPreliminaryCC">180dcugm.com/WAGPreliminaryCC</a><br>
            <a href="https://180dcugm.com/WAGMatchmaking">180dcugm.com/WAGMatchmaking</a></p>`
    : `
            <h1>Registration Approved!</h1>
            <p>Dear <strong>${teamLeader.name}</strong>,</p>
            <p>You are successfully registered for the 180DC Case Competition! 🎉</p>
            <p>A confirmation email will be sent to the Team Leader’s email address in 1x24 hours. Please check your inbox carefully, including Spam or Junk folders. If you have not received the email, kindly contact our contact persons for assistance.</p>
            <p>Thank you and we are excited to have you join the competition!</p>
            <p><strong>Next Step</strong></p>
            <p>Please ensure that your team leader joins our WhatsApp group to stay updated with announcements and further instructions regarding the competition:</p>
            <p><strong>📌 WhatsApp Group</strong><br>
            WAG prelim: <a href="https://180dcugm.com/WAGPreliminaryCC">180dcugm.com/WAGPreliminaryCC</a></p>`;

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
        .contact-box { background-color: #f7fafc; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #e2e8f0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            ${isIndividual ? "<h1>Registration Accepted!</h1>" : "<h1>Registration Approved!</h1>"}
        </div>
        <div class="content">
            ${content}
            
            <p><strong>📖 Guidebook</strong><br>
            <a href="https://180dcugm.com/GuidebookCC">180dcugm.com/GuidebookCC</a></p>

            <div class="contact-box">
                <p><strong>Contact Persons</strong></p>
                <p>If you have any questions, feel free to reach out to our contact persons:</p>
                <p>Naifa (+62 811-6824-001)<br>
                sharon (+62 819-3443-3146)</p>
            </div>

            <p>We can’t wait to see the creative and impactful ideas you will bring to the table. Best of luck! 💫</p>
            <p>Warm regards,<br><strong>180DC Case Competition 2026</strong></p>
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
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Registration Status Update</h1>
        </div>
        <div class="content">
            <p>Dear <strong>${teamLeader.name}</strong>,</p>
            <p>Your registration for the <strong>180DC Case Competition</strong> has not been approved.</p>
            <p>This may be due to incomplete registration requirements or unsuccessful payment verification.</p>
            <p><strong>Rejection Detail:</strong> ${reason}</p>
            
            <p>If you believe this was a mistake or have any questions regarding your registration, please contact our contact persons for further assistance.</p>
            <p>Thank you for your interest in the 180DC Case Competition.</p>

            <p>Best regards,<br><strong>180DC Case Competition 2026</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 180 Degrees Consulting UGM. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
