"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMenu() {
  const pathname = usePathname();

  const normalizePath = (path: string) => path.replace(/\/$/, "");

  const menuItems = [
    { label: "2BHK Flat Ulsoor", href: "/" },
    { label: "2BHK Ulsoor Features ", href: "/2bhk-apartment-for-rent-ulsoor" },
    { label: "Owner Listed Flat Videos", href: "/owner-2bhk-flat-for-rent-bangalore" },
    { label: "2BHK Flat FAQ", href: "/2bhk-flat-ulsoor-faq" },
  ];

  return (
    <header className="border-b bg-white">
      <nav className="max-w-5xl mx-auto px-4 py-3">
        <ul className="flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => {
            const isActive = normalizePath(pathname) === normalizePath(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-block px-4 py-2 rounded ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-indigo-100 hover:text-indigo-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
