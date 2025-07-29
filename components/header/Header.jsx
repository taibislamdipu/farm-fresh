import Link from "next/link";
import Logo from "../shared/Logo";
import Cart from "./Cart";
import DarkMode from "./DarkMode";
import MobileMenu from "./MobileMenu";
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

          {/* <!-- Desktop Navigation --> */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary-600 dark:text-primary-400 font-medium"
            >
              Home
            </Link>
            <a
              href="products.html"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Products
            </a>
            <a
              href="farmers.html"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Farmers
            </a>
            <a
              href="about.html"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              About
            </a>
          </div>

          {/* <!-- User Actions --> */}
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
