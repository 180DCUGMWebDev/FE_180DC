export const participantHTML = (teamLeader) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Avenir', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
        .header { background-color: #5bbd8b; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 20px; }
        .footer { font-size: 12px; color: #777; text-align: center; margin-top: 20px; }
        .team-info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .btn { display: inline-block; padding: 10px 20px; background-color: #5bbd8b; color: white; text-decoration: none; border-radius: 5px; margin-top: 15px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Registration Received!</h1>
        </div>
        <div class="content">
            <p>Dear <strong>${teamLeader.namaLengkap}</strong>,</p>
            <p>Thank you for registering for the <strong>180DC Case Competition 2026</strong>. We have received your submission and it is currently being reviewed by our committee.</p>
            
            <div class="team-info">
                <h3>Submission Summary:</h3>
                <p><strong>Team Name:</strong> ${teamLeader.namaTim || "-"}</p>
                <p><strong>Team Leader:</strong> ${teamLeader.namaLengkap}</p>
                <p><strong>Registration Phase:</strong> ${teamLeader.registrationPhase || "Normal"}</p>
                <p><strong>Status:</strong> Pending Review</p>
            </div>

            <p>We will notify you via email once your registration has been verified. This process usually takes 1-3 business days.</p>
            
            <p>If you have any questions, please contact our CP:</p>
            <ul>
                <li>Naifa (+62 811-6824-001)</li>
                <li>Sharon (+62 819-3443-3146)</li>
            </ul>

            <p>Best regards,<br><strong>180DC UGM Committee</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 180 Degrees Consulting UGM. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

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
