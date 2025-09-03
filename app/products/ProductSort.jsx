"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdGridOn } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

export default function ProductSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sort") || "featured");

  useEffect(() => {
    setSort(searchParams.get("sort") || "featured");
  }, [searchParams]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    params.set("page", 1); // reset to page 1
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="mb-6 flex items-center justify-between">
      <p className="text-gray-600 dark:text-gray-400">
        Showing 1-12 of products
      </p>
      <div className="flex items-center space-x-4">
        <select
          value={sort}
          onChange={handleSortChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="featured">Sort by: Featured</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="newest">Newest First</option>
          <option value="rating">Rating</option>
        </select>
        <div className="flex rounded-lg border border-gray-300 dark:border-gray-600">
          <button className="rounded-l-lg bg-primary-600 p-2 text-white">
            <MdGridOn size={24} />
          </button>
          <button className="rounded-r-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
            <TfiMenuAlt size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
