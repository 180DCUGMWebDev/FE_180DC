import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { getAuth, uploadData, uploadSubscribe } from "./utils";

export async function POST(request) {
  try {
    const { data, target } = await request.json();

    // Connect to Spreadsheets
    const serviceAccountAuth = new JWT({
      email: process.env.APP_CLIENT_EMAIL ?? "",
      key: (process.env.APP_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    // const serviceAccountAuth = await getAuth();

    const doc = new GoogleSpreadsheet(
      "18Gq2AKH2qXwBMdlhrTGyJ10HAS304FgiQgWpRTTYP2o",
      serviceAccountAuth,
    );

    await doc.loadInfo();

    const sheet = doc.sheetsByTitle[target];

    if (!sheet) {
      throw new Error(`Sheet with title "${target}" not found`);
    }

    if (target === "Applicants") {
      await uploadData(data, sheet);
    } else if (target === "Newsletter") {
      await uploadSubscribe(data, sheet);
    } else {
      throw new Error(`Invalid target: "${target}"`);
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
