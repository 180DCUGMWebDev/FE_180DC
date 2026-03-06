import { isProduction, MIDTRANS_CLIENT_KEY } from "../consts";

export async function GET(request) {
  return new Response(
    JSON.stringify({ client_key: MIDTRANS_CLIENT_KEY, is_production: isProduction }),
    { status: 200 },
  );
}
