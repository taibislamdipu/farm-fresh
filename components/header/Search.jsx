import { IoSearch } from "react-icons/io5";

export default function SearchProduct() {
  return (
    <div className="relative hidden sm:block">
      <input
        type="text"
        placeholder="Search products..."
        className="w-64 rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />

      <IoSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
  );
}
