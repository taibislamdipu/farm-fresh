"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchProduct() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("search", query);
      params.set("page", 1); // reset to page 1 on new search
    } else {
      params.delete("search");
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative hidden sm:block">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-64 rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      <IoSearch
        onClick={handleSearch}
        className="absolute left-3 top-3 cursor-pointer text-gray-400"
      />
    </form>
  );
}
