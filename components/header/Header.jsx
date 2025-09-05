import Link from "next/link";
import { Suspense } from "react";
import Logo from "../shared/Logo";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import SearchProduct from "./Search";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <NavLinks />

          <div className="flex items-center space-x-4">
            <Suspense fallback={<div>Loading...</div>}>
              <SearchProduct />
            </Suspense>
            <Cart />
            <UserMenu />
            {/* <DarkMode /> */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
