"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Quantity (kg)
        </label>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiMinus className="text-sm" />
          </button>
          <input
            type="number"
            value={quantity}
            min="1"
            max="50"
            className="w-20 text-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiPlus className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
