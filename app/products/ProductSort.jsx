export default function ProductSort() {
  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-gray-600 dark:text-gray-400">
        Showing 1-12 of 48 products
      </p>
      <div className="flex items-center space-x-4">
        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
          <option>Rating</option>
        </select>
        <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg">
          <button className="p-2 bg-primary-600 text-white rounded-l-lg">
            <i className="fas fa-th"></i>
          </button>
          <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg">
            <i className="fas fa-list"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
