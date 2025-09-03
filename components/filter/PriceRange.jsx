"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function PriceRange() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedPrice = searchParams.get("price") || "";

  const handlePriceChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("price", value);
    params.set("page", "1");
    router.push(`/products?${params.toString()}`);
  };

  const ranges = [
    { label: "Under ৳30", value: "0-30" },
    { label: "৳30 - ৳50", value: "30-50" },
    { label: "৳50 - ৳100", value: "50-100" },
    { label: "Over ৳100", value: "100-" },
  ];

  return (
    <div className="mb-6">
      <h4 className="mb-3 font-medium text-gray-900 dark:text-white">
        Price Range
      </h4>
      <div className="space-y-2">
        {ranges.map((range) => (
          <label key={range.value} className="flex cursor-pointer items-center">
            <input
              type="radio"
              name="price"
              checked={selectedPrice === range.value}
              onChange={() => handlePriceChange(range.value)}
              className="border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {range.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
