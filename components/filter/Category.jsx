"use client";

import { useSearchParams } from "next/navigation";

export default function Category() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category"); // e.g., 'Vegetables'

  const categories = [
    { label: "Vegetables", count: 45 },
    { label: "Fruits", count: 32 },
    { label: "Grains", count: 18 },
    { label: "Dairy", count: 12 },
  ];
  return (
    <div className="mb-6">
      <h4 className="font-medium text-gray-900 dark:text-white mb-3">
        Category
      </h4>
      <div className="space-y-2">
        {categories.map((cat) => (
          <label key={cat.label} className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={selectedCategory === cat.label}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {cat.label} ({cat.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
