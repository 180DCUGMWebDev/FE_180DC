import { createClient } from "@/integrations/supabase/server";
import { keepAliveConfig as config } from "@/config/keep-alive-config";
import { QueryResponse, determineAction, generateRandomString } from "./helper";

export const dynamic = "force-dynamic";

async function querySupabase(
  supabase: ReturnType<typeof createClient>,
  randomStringLength = 12
): Promise<QueryResponse> {
  const currentRandomString = generateRandomString(randomStringLength);

  const { data, error } = await supabase
    .from(config.table)
    .select("*")
    .eq(config.column, currentRandomString);

  const messageInfo = `Results for retrieving '${currentRandomString}' from '${config.table}' at column '${config.column}'`;

  if (error) {
    const errorInfo = `${messageInfo}: ${error.message}`;
    if (config.consoleLogOnError) console.log(errorInfo);
    return { successful: false, message: errorInfo };
  }

  return { successful: true, message: `${messageInfo}: ${JSON.stringify(data)}` };
}

async function fetchOtherEndpoints(): Promise<string[]> {
  if (config.otherEndpoints?.length > 0) {
    const fetchPromises = config.otherEndpoints.map(async (endpoint) => {
      try {
        const res = await fetch(endpoint, { cache: "no-store" });
        const passOrFail = res.status === 200 ? "Passed" : "Failed";
        return `${endpoint} - ${passOrFail}`;
      } catch {
        return `${endpoint} - Failed (network error)`;
      }
    });
    return Promise.all(fetchPromises);
  }
  return [];
}

export async function GET() {
  const supabase = createClient();

  let responseMessage = "";
  let successfulResponses = true;

  // 1. Optional random-string SELECT query
  if (!config.disableRandomStringQuery) {
    const queryResponse = await querySupabase(supabase);
    successfulResponses = successfulResponses && queryResponse.successful;
    responseMessage += queryResponse.message + "\n\n";
  }

  // 2. Optional insert/delete cycle
  if (config.allowInsertionAndDeletion) {
    const actionResponse = await determineAction(supabase);
    successfulResponses = successfulResponses && actionResponse.successful;
    responseMessage += actionResponse.message + "\n\n";
  }

  // 3. Ping other endpoints
  if (config.otherEndpoints?.length > 0) {
    const fetchResults = await fetchOtherEndpoints();
    responseMessage += `\nOther Endpoint Results:\n${fetchResults.join("\n")}`;
  }

  return new Response(responseMessage, {
    status: successfulResponses ? 200 : 400,
  });
}
