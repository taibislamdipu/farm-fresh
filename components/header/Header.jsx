import Link from "next/link";
import Logo from "../shared/Logo";
import Cart from "./Cart";
import DarkMode from "./DarkMode";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import SearchProduct from "./Search";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <NavLinks />

          <div className="flex items-center space-x-4">
            <SearchProduct />
            <Cart />
            <UserMenu />
            <DarkMode />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
