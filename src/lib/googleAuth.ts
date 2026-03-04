import { JWT, OAuth2Client } from "google-auth-library";

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

/**
 * Initializes and returns a Google Auth OAuth2 client using credentials
 * defined in .env (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN).
 */
export const getGoogleOAuth = () => {
  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return oAuth2Client;
};
