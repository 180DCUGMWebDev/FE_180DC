export type KeepAliveConfig = typeof keepAliveConfig;

export const keepAliveConfig = {
  // Table in Supabase to query against
  table: "keep-alive",

  // Column that will be queried with a random string
  column: "name",

  // Allow insert/delete actions to keep the DB active
  allowInsertionAndDeletion: true,

  // Set to true if allowInsertionAndDeletion is true (avoids redundant random-string SELECT)
  disableRandomStringQuery: true,

  // Max rows before oldest entries get deleted
  sizeBeforeDeletions: 10,

  consoleLogOnError: true,

  // Add URLs of other Supabase-backed Vercel projects to ping them too
  otherEndpoints: [] as string[],
};
