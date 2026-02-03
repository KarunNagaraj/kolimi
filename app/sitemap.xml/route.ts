export const dynamic = "force-static";

import { NextResponse } from "next/server";

export function GET() {
  const baseUrl = "https://kolimi-heights-ulsoor-2bhk.netlify.app";  

  const pages = [
    "",
    "2bhk-apartment-for-rent-ulsoor",
    "owner-2bhk-flat-for-rent-bangalore",
    "2bhk-flat-ulsoor-faq",
    "contact",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
