import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { uploadData, uploadSubscribe } from "./utils";

export async function POST(request) {
  const { data, target } = await request.json();

  //   Connect to Spreadsheets
  const serviceAccountAuth = new JWT({
    email: process.env.APP_CLIENT_EMAIL ?? "",
    key: process.env.APP_PRIVATE_KEY ?? "",
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });

  const doc = new GoogleSpreadsheet(
    "18Gq2AKH2qXwBMdlhrTGyJ10HAS304FgiQgWpRTTYP2o",
    serviceAccountAuth,
  );

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[target];

  if (target === "Applicants") uploadData(data, sheet);
  else if (target === "Newsletter") uploadSubscribe(data, sheet);

  return NextResponse.json({ message: "Success sent!" }, { status: 200 });
}
