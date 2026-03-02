import { JWT } from "google-auth-library";

/**
 * Initializes and returns a Google Auth JWT client using globals
 * defined in .env (GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY).
 *
 * Default scopes requested: spreadsheets, drive.file, drive
 */
export const getGoogleAuth = () => {
  return new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL ?? "",
    key: (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive",
    ],
  });
};
