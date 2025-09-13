"use client";

import { useCart } from "@/app/context/cartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function AddToCart({ product }) {
  const { toggleCart, toggleFavorite, isInCart, isFavorite, cart } = useCart();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleCart(product);
      }}
      className="flex w-full items-center justify-center rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
    >
      <FaShoppingCart className="mr-2" />
      {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
}
