"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Category({ categories }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get selected categories as array
  const selectedCategories = searchParams.get("category")
    ? searchParams.get("category").split(",")
    : [];

  const handleCheckboxChange = (label, checked) => {
    const params = new URLSearchParams(searchParams.toString());
    let newCategories = [...selectedCategories];

    if (checked) {
      newCategories.push(label);
    } else {
      newCategories = newCategories.filter((c) => c !== label);
    }

    if (newCategories.length > 0) {
      params.set("category", newCategories.join(","));
    } else {
      params.delete("category");
    }

    params.set("page", 1); // reset page
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
              checked={selectedCategories.includes(cat.label)}
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
