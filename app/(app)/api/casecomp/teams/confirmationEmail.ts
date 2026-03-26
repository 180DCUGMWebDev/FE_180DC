export const acceptedParticipantHTML = (teamLeader) => `
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
            <h1>Registration Accepted!</h1>
        </div>
        <div class="content">
            <p>Dear <strong>${teamLeader.name}</strong>,</p>
            <p>Congratulations! Your registration for the <strong>180DC Case Competition 2026</strong> has been **Accepted**.</p>
            
            <p>You have been officially registered as a participant. We will send further information regarding the next steps and the technical meeting through your registered email and WhatsApp.</p>
            
            <p>Please make sure to join our official communication group (if provided in later emails) and stay tuned for more updates.</p>

            <p>Best regards,<br><strong>180DC UGM Committee</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 180 Degrees Consulting UGM. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export const rejectedParticipantHTML = (teamLeader, reason) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Avenir', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
        .header { background-color: #e53e3e; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 20px; }
        .rejection-box { background-color: #fff5f5; border-left: 4px solid #e53e3e; padding: 15px; margin: 20px 0; }
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
            <p>We are sorry to inform you that your registration for the <strong>180DC Case Competition 2026</strong> could not be processed at this time.</p>
            
            <div class="rejection-box">
                <p><strong>Reason for Rejection:</strong></p>
                <p>${reason}</p>
            </div>

            <p>If you believe this is a mistake or have already updated your documents/payment, you may try to register again or contact our committee for clarification.</p>
            
            <p>Thank you for your interest.</p>

            <p>Best regards,<br><strong>180DC UGM Committee</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 180 Degrees Consulting UGM. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
