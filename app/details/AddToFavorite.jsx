"use client";

import { FaHeart } from "react-icons/fa";
import { useCart } from "../context/cartContext";

export default function AddToFavorite({ product }) {
  const { toggleFavorite, isFavorite } = useCart();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(product.id);
      }}
      className="w-full rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
    >
      <div className="flex items-center justify-center gap-2">
        <FaHeart
          className={`text-lg ${
            isFavorite(product.id)
              ? "text-red-500"
              : "text-gray-600 dark:text-gray-400"
          }`}
        />{" "}
        <span>
          {isFavorite(product.id) ? "Remove from Favorite" : "Add to Favorite"}
        </span>
      </div>
    </button>
  );
}
