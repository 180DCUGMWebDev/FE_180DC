import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { GetJWTAuth, saveFileToDrive, uploadData } from "./utils";

export async function POST(request) {
  try {
    saveFileToDrive("test.pdf", request);
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
