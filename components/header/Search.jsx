export default function SearchProduct() {
  return (
    <div className="hidden sm:block relative">
      <input
        type="text"
        placeholder="Search products..."
        className="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
      />
      <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
    </div>
  );
}
