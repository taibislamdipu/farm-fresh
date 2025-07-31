"use client";

import { useSearchParams } from "next/navigation";

export default function SidebarFilter() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category"); // e.g., 'Vegetables'

  const categories = [
    { label: "Vegetables", count: 45 },
    { label: "Fruits", count: 32 },
    { label: "Grains", count: 18 },
    { label: "Dairy", count: 12 },
  ];

  return (
    <div className="lg:col-span-1">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Filters
        </h3>

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

        {/* <!-- Price Range --> */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">
            Price Range
          </h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Under ৳30
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                ৳30 - ৳50
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                ৳50 - ৳100
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Over ৳100
              </span>
            </label>
          </div>
        </div>

        {/* <!-- Location --> */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">
            Location
          </h4>
          <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
            <option>All Locations</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Sylhet</option>
            <option>Rangpur</option>
          </select>
        </div>

        {/* <!-- Organic Filter --> */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Organic Only
            </span>
          </label>
        </div>

        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
}
