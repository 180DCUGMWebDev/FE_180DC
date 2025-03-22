import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { GetJWTAuth, saveFileToDrive, uploadData } from "./utils";

export async function POST(request) {
  try {
    // Dapatkan nama file
    // Dapatkan nama tim leader
    // Generate Date
    const currentTime = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
    });

    const form = await request.formData();
    const teamLeader = JSON.parse(form.get("teamLeader"));
    console.log(teamLeader.namaLengkap);
    const fileBaseName = `${teamLeader.namaLengkap} - ${currentTime}`;
    // saveFileToDrive("test.pdf", request);
    // const { data, target } = await request.json();
    // const serviceAccountAuth = GetJWTAuth();
    // const doc = new GoogleSpreadsheet(
    //   "18Gq2AKH2qXwBMdlhrTGyJ10HAS304FgiQgWpRTTYP2o",
    //   serviceAccountAuth,
    // );
    // await doc.loadInfo();
    // const sheet = doc.sheetsByTitle[target];
    // if (!sheet) {
    //   throw new Error(`Sheet with title "${target}" not found`);
    // }
    // await uploadData(data, sheet);
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
