import { FaShoppingCart } from "react-icons/fa";

export default function ShoppingCart() {
  return (
    <button className="dark:hover:text-primary-400 relative p-2 text-gray-700 hover:text-primary-600 dark:text-gray-300">
      <FaShoppingCart className="text-xl" />
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
        3
      </span>
    </button>
  );
}
