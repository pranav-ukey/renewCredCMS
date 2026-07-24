"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Buyers", href: "#" },
  { label: "Suppliers", href: "#" },
  { label: "Climate & Us", href: "#" },
  { label: "Science", href: "#" },
  { label: "Standards", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Header() {
  return (
    <header className="fixed top-5 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">
      <div className="
  flex
  h-16
  items-center
  justify-between
  rounded-2xl
  border
  border-white/40
  bg-white/15
  px-6
  backdrop-blur-2xl
  shadow-[0_8px_32px_rgba(0,0,0,0.08)]
  transition-all
  duration-300
">

        {/* Logo */}
        <h2 className="text-xl font-bold tracking-tight">
          Renew<span className="text-red-500">Cred</span>
        </h2>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm transition ${
                item.label === "Standards"
                  ? "text-red-500 font-medium"
                  : "text-gray-700 hover:text-red-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Registry Button */}
        <Button className="border border-gray-300 bg-white hover:bg-gray-100 px-5 py-2">
          Registry
        </Button>
      </div>
    </header>
  );
}