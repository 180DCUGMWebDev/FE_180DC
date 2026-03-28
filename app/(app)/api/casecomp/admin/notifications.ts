export const pendingReminderHTML = (teams) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
        .header { background-color: #f6ad55; color: white; padding: 15px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 20px; }
        .team-list { margin: 20px 0; border-collapse: collapse; width: 100%; }
        .team-list th, .team-list td { border: 1px solid #eee; padding: 10px; text-align: left; }
        .team-list th { background-color: #f9f9f9; }
        .footer { font-size: 12px; color: #777; text-align: center; margin-top: 20px; }
        .btn { display: inline-block; padding: 10px 20px; background-color: #f6ad55; color: white; text-decoration: none; border-radius: 5px; margin-top: 15px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🚨 Pending Review Reminder</h2>
        </div>
        <div class="content">
            <p>Admin, the following teams have been pending for more than <strong>24 hours</strong>. Please review them promptly to ensure a smooth registration experience.</p>
            
            <table class="team-list">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Submitted At</th>
                    </tr>
                </thead>
                <tbody>
                    ${teams.map(team => `
                        <tr>
                            <td>${team.team_name || team.leader_name}</td>
                            <td>${new Date(team.created_at).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <a href="https://180dcugm.com/admin/casecomp" class="btn">Go to Admin Dashboard</a>

            <p>Best regards,<br><strong>System Notification</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 180 Degrees Consulting UGM.</p>
        </div>
    </div>
</body>
</html>
`;
