import { NextResponse } from "next/server";
import { DAPP_STORE_URL } from "../../../lib/constants";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.redirect(DAPP_STORE_URL, 302);
}
