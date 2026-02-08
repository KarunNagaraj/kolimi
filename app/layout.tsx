import "./globals.css";
import { ReactNode } from "react";
import HeaderMenu from "./components/HeaderMenu";

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
      <head />
      <body className="min-h-screen">
    
       {/*<HeaderMenu activeMenu="2bhk"  or "blog"/>*/}
        
       
        <HeaderMenu activeMenu="2bhk" />
        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
