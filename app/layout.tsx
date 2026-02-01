import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Kolimi Heights – Apartment Rental",
  description: "Apartment rental listing",
  other: {
    "google-site-verification": "HC5ZieXRA0zZ6oqSkrVvtZnFwyljPYvvzcUoU4zn4fw",
  },
};


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
