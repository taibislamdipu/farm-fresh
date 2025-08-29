"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const baseClass =
    "hover:text-primary-600 dark:hover:text-primary-400 transition";

  return (
    <div className="hidden items-center space-x-8 md:flex">
      <Link
        href="/"
        className={`${
          pathname === "/"
            ? "dark:text-primary-400 font-medium text-primary-600"
            : "text-gray-700 dark:text-gray-300"
        } ${baseClass}`}
      >
        Home
      </Link>

      <Link
        href="/products"
        className={`${
          pathname === "/products"
            ? "dark:text-primary-400 font-medium text-primary-600"
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
        href="/about"
        className={`text-gray-700 dark:text-gray-300 ${baseClass}`}
      >
        About
      </Link>
    </div>
  );
}
