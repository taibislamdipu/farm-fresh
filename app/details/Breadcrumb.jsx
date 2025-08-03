import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Breadcrumb({ items }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-primary-600 "
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white capitalize">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <FaArrowRight className="text-gray-400 text-xs ml-2" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
