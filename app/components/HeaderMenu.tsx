"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderMenuProps {
  activeMenu?: "blog" | "2bhk";
}

export default function HeaderMenu({ activeMenu }: HeaderMenuProps) {
  const pathname = usePathname();

  const normalizePath = (path: string) => path.replace(/\/$/, "");

  const menuItems = [
    { label: "Rent Ulsoor 🏠", href: "/" },
    { label: "2BHK Flat ⭐", href: "/2bhk-apartment-for-rent-ulsoor", key: "2bhk" },
    { label: "Bangalore Flat ▶️", href: "/owner-2bhk-flat-for-rent-bangalore" },
    { label: "2BHK Flat 🤔", href: "/2bhk-flat-ulsoor-faq" },
    { label: "Blog 🤔", href: "/blog", key: "blog" },
  ];

  return (
    <header className="border-b bg-white">
      <nav className="max-w-5xl mx-auto px-4 py-3">
        <ul className="flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => {
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
