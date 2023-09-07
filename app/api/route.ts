import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: Request) {
  const headersList = headers();

  let head = {} as Record<string, unknown>;

  // @ts-ignore
  for (const [key, value] of headersList.entries()) {
    head[key] = value;
  }

  return NextResponse.json({ ...head });
}
