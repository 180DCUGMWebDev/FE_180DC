// Midtrans Snap instance
import midtransClient from "midtrans-client";

export const isProduction = process.env.MIDTRANS_IS_PRODUCTION === "true";

export const MIDTRANS_SERVER_KEY = isProduction
  ? process.env.MIDTRANS_SERVER_KEY
  : process.env.MIDTRANS_SERVER_KEY_SB;

export const MIDTRANS_CLIENT_KEY = isProduction
  ? process.env.MIDTRANS_CLIENT_KEY
  : process.env.MIDTRANS_CLIENT_KEY_SB;

export const snap = new midtransClient.Snap({
  isProduction,
  serverKey: MIDTRANS_SERVER_KEY,
  clientKey: MIDTRANS_CLIENT_KEY,
});
