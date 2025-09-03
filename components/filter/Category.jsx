"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Category() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get("category") || ""; // e.g., 'Vegetables'

  const categories = [
    { label: "vegetables", count: 45 },
    { label: "fruits", count: 32 },
    { label: "grains", count: 18 },
    { label: "dairy", count: 12 },
    { label: "herbs", count: 12 },
    { label: "honey", count: 12 },
  ];

  const handleCheckboxChange = (label, checked) => {
    const params = new URLSearchParams(searchParams.toString());
    if (checked) {
      params.set("category", label);
    } else {
      params.delete("category");
    }
    params.set("page", 1); // reset to first page
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="mb-6">
      <h4 className="mb-3 font-medium text-gray-900 dark:text-white">
        Category
      </h4>
      <div className="space-y-2">
        {categories.map((cat) => (
          <label key={cat.label} className="flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={selectedCategory === cat.label}
              onChange={(e) =>
                handleCheckboxChange(cat.label, e.target.checked)
              }
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm capitalize text-gray-700 dark:text-gray-300">
              {cat.label} ({cat.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
