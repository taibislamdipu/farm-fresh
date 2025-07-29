import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  return (
    <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
      <FaShoppingCart className="text-xl" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        3
      </span>
    </button>
  );
}
