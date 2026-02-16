"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderMenuProps {
  activeMenu?: "3bhk" | "2bhk";
}

export default function HeaderMenu({ activeMenu }: HeaderMenuProps) {
  const pathname = usePathname();

  const normalizePath = (path: string) => path.replace(/\/$/, "");

  const menuItems2bhk = [
    { label: "Rent Ulsoor 🏠", href: "/" },
    { label: "2BHK Flat ⭐", href: "/2bhk-apartment-for-rent-ulsoor", key: "2bhk" },
    { label: "Bangalore Flat ▶️", href: "/owner-2bhk-flat-for-rent-bangalore" },
    { label: "2BHK Flat 🤔", href: "/2bhk-flat-ulsoor-faq" }, 
  ];

  const menuItems3bhk = [
    { label: "Home 3BHK🏠", href: "/home3bhk" },
    { label: "3BHK ⭐", href: "/3bhk-apartment-for-rent-ulsoor", key: "3bhk" },
    { label: "3BHK Video ▶️", href: "/owner-3bhk-flat-for-rent-bangalore" },
    { label: "3BHK FAQ ", href: "/2bhk-flat-ulsoor-faq" }, 
  ];

  return (
    <header className="border-b bg-white">
      <nav className="max-w-5xl mx-auto px-4 py-3">
        <ul className="flex space-x-8 text-gray-700 font-medium">
          {menuItems3bhk.map((item) => {
            // Determine active: override with prop if provided
            const isActive =
              activeMenu
                ? item.key === activeMenu
                : normalizePath(pathname) === normalizePath(item.href);

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
