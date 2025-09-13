"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Quantity({ product }) {
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 50;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      toast.success("Product removed from cart");
    } else {
      toast.error("Quantity cannot be less than 1");
    }
  };

  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      toast.success("Product added to cart");
    } else {
      toast.error(`You can order a maximum of ${maxQuantity}`);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Quantity ({product?.unit})
        </label>

        <div className="flex items-center space-x-3">
          <button
            onClick={decreaseQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            <FiMinus className="text-sm" />
          </button>

          <input
            type="number"
            value={quantity}
            min="1"
            max={maxQuantity}
            readOnly
            className="w-20 rounded-lg border border-gray-300 py-2 text-center focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />

          <button
            onClick={increaseQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            <FiPlus className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
