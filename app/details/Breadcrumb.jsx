import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Breadcrumb({ name }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a
              href="index.html"
              className="text-gray-500 hover:text-primary-600"
            >
              Home
            </a>
          </li>
          <li>
            <FaArrowRight className="text-gray-400 text-xs" />
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-500 hover:text-primary-600"
            >
              Products
            </Link>
          </li>
          <li>
            <FaArrowRight className="text-gray-400 text-xs" />
          </li>
          <li className="text-gray-900 dark:text-white">{name}</li>
        </ol>
      </nav>
    </div>
  );
}
