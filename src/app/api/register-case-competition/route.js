import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { driveFolderId, GetJWTAuth, saveFileToDrive, uploadData } from "./utils";
import { google } from "googleapis";

export async function POST(request) {
  try {
    const auth = await GetJWTAuth();
    const drive = google.drive({ version: "v3", auth });
    const form = await request.formData();

    const teamLeader = JSON.parse(form.get("teamLeader"));
    const teamMember = JSON.parse(form.get("teamMembers"));

    const formattedDate = new Date()
      .toISOString()
      .replace(/:/g, "-") // Menghindari karakter tidak valid
      .split(".")[0]; // Menghapus bagian milidetik

    const fileBaseName = `${teamLeader.namaLengkap} - ${formattedDate}`;
    const idCardLink = await saveFileToDrive(fileBaseName, "idCard", drive, form);
    const followLink = await saveFileToDrive(fileBaseName, "follow", drive, form);
    const mentionLink = await saveFileToDrive(fileBaseName, "mention", drive, form);
    const repostLink = await saveFileToDrive(fileBaseName, "repost", drive, form);
    const twibbonLink = await saveFileToDrive(fileBaseName, "twibbon", drive, form);

    const doc = new GoogleSpreadsheet(driveFolderId.spreadsheet, auth);
    await doc.loadInfo();
    const target = "Data";
    const sheet = doc.sheetsByTitle[target];
    if (!sheet) {
      throw new Error(`Sheet with title "${target}" not found`);
    }
    await uploadData(sheet, teamLeader, teamMember, {
      idCard: idCardLink,
      follow: followLink,
      mention: mentionLink,
      repost: repostLink,
      twibbon: twibbonLink,
    });
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
