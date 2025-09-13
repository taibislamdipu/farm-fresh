import { FaPhone } from "react-icons/fa6";
export default function FarmerCard({ farmer }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
          alt="Rahim Ahmed"
          className="h-64 w-full object-cover"
        />
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">
            <i className="fas fa-certificate mr-1"></i>Certified
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {farmer?.name}
          </h3>
          <div className="flex items-center text-yellow-400">
            <i className="fas fa-star"></i>
            <span className="ml-1 text-gray-600 dark:text-gray-400">4.8</span>
          </div>
        </div>
        <p className="mb-3 text-gray-600 dark:text-gray-400">
          <i className="fas fa-map-marker-alt mr-2"></i>Sylhet, Bangladesh
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Specializes in organic vegetables and has been farming for over 15
          years. Known for premium tomatoes and leafy greens.
        </p>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Farm Size:</span> 5 acres
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Products:</span> 12
          </div>
        </div>
        <div className="mb-4 flex space-x-2">
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">
            Vegetables
          </span>
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Organic
          </span>
        </div>
        <div className="flex space-x-3">
          <button className="flex-1 rounded-lg bg-primary-600 py-2 font-medium text-white transition hover:bg-primary-700">
            View Products
          </button>
          <button className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
            <FaPhone />
          </button>
        </div>
      </div>
    </div>
  );
}
