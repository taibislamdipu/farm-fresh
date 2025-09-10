"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const baseClass =
    "hover:text-primary-600 dark:hover:text-primary-400 transition";

  // Active link style
  const getLinkClass = (path) =>
    `${
      pathname === path
        ? "dark:text-primary-400 font-medium text-primary-600"
        : "text-gray-700 dark:text-gray-300"
    } ${baseClass}`;

  // Not logged in (guest)
  if (!session) {
    return (
      <div className="hidden items-center space-x-8 md:flex">
        <Link href="/" className={getLinkClass("/")}>
          Home
        </Link>
        <Link href="/about" className={getLinkClass("/about")}>
          About
        </Link>
      </div>
    );
  }

  // Logged in user
  const userType = session?.user?.userType;

  return (
    <div className="hidden items-center space-x-8 md:flex">
      {/* Common for both */}
      <Link href="/" className={getLinkClass("/")}>
        Home
      </Link>

      {userType === "farmer" ? (
        <>
          <Link href="/add-product" className={getLinkClass("/add-product")}>
            Add Product
          </Link>
          <Link
            href="/manage-products"
            className={getLinkClass("/manage-products")}
          >
            Manage Products
          </Link>
        </>
      ) : (
        <>
          <Link href="/products" className={getLinkClass("/products")}>
            Products
          </Link>
          <Link href="/farmers" className={getLinkClass("/farmers")}>
            Farmers
          </Link>
          <Link href="/my-orders" className={getLinkClass("/my-orders")}>
            My Orders
          </Link>
        </>
      )}

      {/* Common for both */}
      <Link href="/about" className={getLinkClass("/about")}>
        About
      </Link>
    </div>
  );
}
