import { google } from "googleapis";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

// Handler for the GET request to /api
export async function GET(request) {
  try {
    // Load the service account key JSON file from the /config directory
    const keyFilePath = path.join(
      process.cwd(),
      "config/dcugm-406407-f437499904d4.json"
    );
    const serviceAccount = JSON.parse(fs.readFileSync(keyFilePath, "utf8"));

    // Create a JWT client
    const authClient = new google.auth.JWT({
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    // Authorize the client
    await authClient.authorize();

    console.log("Authorized");

    // Create a Google Analytics Data API client (for GA4)
    const analyticsData = google.analyticsdata({
      version: "v1beta",
      auth: authClient,
    });

    // Make the API request to get GA4 data
    const response = await analyticsData.properties.runReport({
      property: "properties/456094568", // Replace with your actual GA4 Property ID
      requestBody: {
        dateRanges: [
          {
            startDate: "30daysAgo",
            endDate: "today",
          },
        ],
        metrics: [
          {
            name: "sessions",
          },

          {
            name: "activeUsers",
          },
          {
            name: "newUsers",
          },
          {
            name: "eventCount", // GA4 valid metric
          },
          {
            name: "engagementRate", // GA4 valid metric
          },
          {
            name: "screenPageViews",
          },
        ],
        dimensions: [
          {
            name: "country",
          },
        ],
      },
    });

    const data = response.data.rows.map((row) => {
      return {
        country: row.dimensionValues[0].value,
        sessions: row.metricValues[0].value,
        activeUsers: row.metricValues[1].value,
        newUsers: row.metricValues[2].value,
        eventCount: row.metricValues[3].value,
        engagementRate: row.metricValues[4].value,
        screenPageViews: row.metricValues[5].value,
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching report:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 }
    );
  }
}
