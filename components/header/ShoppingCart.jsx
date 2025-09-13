"use client";
import { useCart } from "@/app/context/cartContext";
import { useSession } from "next-auth/react";
import { FaShoppingCart } from "react-icons/fa";

export default function ShoppingCart() {
  const { totalItems, cart } = useCart();
  const { data: session } = useSession(); // get user session

  return (
    <button className="dark:hover:text-primary-400 relative p-2 text-gray-700 hover:text-primary-600 dark:text-gray-300">
      <FaShoppingCart className="text-xl" />

      {/* Show cart length only if user is signed in */}
      {session?.user && cart.length > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}
