import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { GetJWTAuth, updateVerificationStatus } from "./utils";

export async function POST(request) {
  try {
    const form = await request.formData();
    const teamLeader = JSON.parse(form.get("teamLeader"));
    const teamMember = JSON.parse(form.get("teamMembers"));
    const payment = form.get("payment");
    const status = form.get("status");

    const serviceAccountAuth = await GetJWTAuth();
    const doc = new GoogleSpreadsheet(
      "1e2CSou81IKNyoi4UZ11UVpBWVwMB1gsqN4yiVnPQ2qM",
      serviceAccountAuth,
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Data"];

    // console.log("sheet", teamLeader, teamMember, payment, status);
    // verify
    await updateVerificationStatus(sheet, payment, teamLeader, teamMember, status);

    if (!sheet) {
      throw new Error(`Sheet with title "${target}" not found`);
    }

    return NextResponse.json({ message: "Success sent!" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    let errorMessage = "An error occurred";
    if (error.response) {
      errorMessage = `Google API error: ${error.response.data.error.message}`;
    } else if (error.message) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
