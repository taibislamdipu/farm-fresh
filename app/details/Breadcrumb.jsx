import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Breadcrumb({ name }) {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-2 text-sm">
          <li>
            <a href="index.html" class="text-gray-500 hover:text-primary-600">
              Home
            </a>
          </li>
          <li>
            <FaArrowRight className="text-gray-400 text-xs" />
          </li>
          <li>
            <Link href="/products" class="text-gray-500 hover:text-primary-600">
              Products
            </Link>
          </li>
          <li>
            <FaArrowRight className="text-gray-400 text-xs" />
          </li>
          <li class="text-gray-900 dark:text-white">{name}</li>
        </ol>
      </nav>
    </div>
  );
}
