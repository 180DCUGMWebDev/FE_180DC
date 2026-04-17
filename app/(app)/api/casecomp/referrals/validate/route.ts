import { NextResponse } from "next/server";
import { createClient } from "@/integrations/supabase/server";
import { validateReferralCode } from "../../register/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ valid: false, message: "Code is required" }, { status: 400 });
  }

  const supabase = createClient();
  const result = await validateReferralCode(code, supabase);

  return NextResponse.json(result);
}
