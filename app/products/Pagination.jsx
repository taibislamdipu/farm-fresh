"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({ page = 1, totalPages = 1 }) {
  const searchParams = useSearchParams();

  // Convert current params to an object
  const getParamsWithPage = (newPage) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage); // update page, keep filters
    return `?${params.toString()}`;
  };

  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-12 flex justify-center">
      <nav aria-label="Pagination">
        <ul className="inline-flex items-center -space-x-px text-gray-600 dark:text-gray-300">
          <li>
            {prevPage ? (
              <Link
                href={getParamsWithPage(prevPage)}
                className="ml-0 block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <IoIosArrowBack />
              </Link>
            ) : (
              <span className="ml-0 block cursor-not-allowed rounded-l-lg bg-gray-200 px-3 py-2 text-gray-300">
                <IoIosArrowBack />
              </span>
            )}
          </li>

          {pages.map((p) => (
            <li key={p}>
              <Link
                href={getParamsWithPage(p)}
                className={`border px-3 py-2 leading-tight ${
                  p === page
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {p}
              </Link>
            </li>
          ))}

          <li>
            {nextPage ? (
              <Link
                href={getParamsWithPage(nextPage)}
                className="block rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <IoIosArrowForward />
              </Link>
            ) : (
              <span className="block cursor-not-allowed rounded-r-lg bg-gray-200 px-3 py-2 text-gray-300">
                <IoIosArrowForward />
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
