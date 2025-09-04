"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = new URLSearchParams();
    if (search) query.set("search", search);
    if (category && category !== "all") query.set("category", category);

    router.push(`/products?${query.toString()}`);
  };

  return (
    <div className="mx-auto mb-8 max-w-2xl">
      <form
        onSubmit={handleSearch}
        className="flex overflow-hidden rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Search for vegetables, fruits, farmers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-6 py-4 text-lg text-gray-900 focus:outline-none"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-l border-gray-300 px-4 py-4 text-gray-900 focus:outline-none"
        >
          <option value="all">All Categories</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="grains">Grains</option>
          <option value="dairy">Dairy</option>
          <option value="herbs">Herbs</option>
          <option value="honey">Honey</option>
        </select>
        <button
          type="submit"
          className="bg-primary-700 px-8 py-4 transition hover:bg-primary-800"
        >
          <IoSearch size={28} className="text-xl" />
        </button>
      </form>
    </div>
  );
}
