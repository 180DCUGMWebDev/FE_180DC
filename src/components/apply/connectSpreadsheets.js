import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
const moment = require("moment");

const creds = require("./googless.json");

const getServiceAccountAuth = () => {
  return new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });
};

export const connectSS = async (data, target, flush) => {
  // Connect to Spreadsheets
  const serviceAccountAuth = getServiceAccountAuth();

  const doc = new GoogleSpreadsheet(
    "18Gq2AKH2qXwBMdlhrTGyJ10HAS304FgiQgWpRTTYP2o",
    serviceAccountAuth,
  );

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[target];

  if (target === "Applicants") uploadData(data, sheet);
  else if (target === "Newsletter") uploadSubscribe(data, sheet);
  flush();
};

const uploadData = async (data, sheet) => {
  await sheet.addRow({
    timestamp: moment().startOf("second").format("YYYY-MM-DD HH:mm:ss").toString(),
    name: data[0].answer,
    position: data[1].answer,
    email: data[2].answer,
    phone: data[3].answer,
    entity_name: data[4].answer,
    entity_loc: data[5].answer,
    entity_social: data[6].answer,
    entity_background: data[7].answer,
    entity_length: data[8].answer,
    entity_size: data[9].answer,
    scope: data[10].answer,
    outcome: data[11].answer,
    info_source: data[12].answer,
  });
};

const uploadSubscribe = async (data, sheet) => {
  // Avoid duplicates
  const newsletterEmails = await sheet.getRows().then((rows) => {
    return rows.map((row) => {
      const emailHeaderIndex = sheet.headerValues.indexOf("email");
      if (emailHeaderIndex !== -1) {
        return row._rawData[emailHeaderIndex] || "";
      } else {
        console.warn("Email header not found in sheet!");
        return "";
      }
    });
  });
  const emailExists = newsletterEmails.includes(data);
  if (emailExists) return;

  await sheet.addRow({
    timestamp: moment().startOf("second").format("YYYY-MM-DD HH:mm:ss").toString(),
    email: data,
  });
};
