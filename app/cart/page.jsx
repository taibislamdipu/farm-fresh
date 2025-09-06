"use client";
import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, toggleCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.pricePerUnit * (item.quantity || 1),
    0,
  );

  if (cart.length === 0)
    return <p className="p-6 text-center text-gray-500">Your cart is empty.</p>;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Subtotal</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 dark:border-gray-700"
              >
                <td className="flex items-center gap-4 px-4 py-2">
                  <Image
                    src={item.images?.[0]}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="px-4 py-2">৳{item.pricePerUnit}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 rounded border border-gray-300 px-2 py-1 text-center dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </td>
                <td className="px-4 py-2">
                  ৳{item.pricePerUnit * item.quantity}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => toggleCart(item)}
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <span className="text-lg font-semibold">Total: ৳{totalPrice}</span>
        <Link href="/payment">
          <button className="rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
