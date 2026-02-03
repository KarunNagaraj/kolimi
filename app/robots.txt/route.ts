//app/robots.txt/route.ts
export const dynamic = "force-static";

import { NextResponse } from "next/server";

export function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://kolimi-heights-ulsoor-2bhk.netlify.app/sitemap.xml
`.trim();

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
