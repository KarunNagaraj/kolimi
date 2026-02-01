import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Kolimi Heights – Apartment Rental",
  description: "Apartment rental listing",
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
