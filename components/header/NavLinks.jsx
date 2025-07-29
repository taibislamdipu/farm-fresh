"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const baseClass =
    "hover:text-primary-600 dark:hover:text-primary-400 transition";

  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link
        href="/"
        className={`${
          pathname === "/"
            ? "text-primary-600 dark:text-primary-400 font-medium"
            : "text-gray-700 dark:text-gray-300"
        } ${baseClass}`}
      >
        Home
      </Link>

      <Link
        href="/products"
        className={`${
          pathname === "/products"
            ? "text-primary-600 dark:text-primary-400 font-medium"
            : "text-gray-700 dark:text-gray-300"
        } ${baseClass}`}
      >
        Products
      </Link>

      <Link
        href="farmers.html"
        className={`text-gray-700 dark:text-gray-300 ${baseClass}`}
      >
        Farmers
      </Link>

      <Link
        href="about.html"
        className={`text-gray-700 dark:text-gray-300 ${baseClass}`}
      >
        About
      </Link>
    </div>
  );
}
