"use client";

import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

export default function SuccessPage() {
  const { cart, paymentInfo } = useCart();
  const router = useRouter();

  if (!cart || cart.length === 0) {
    return (
      <p className="p-6 text-center text-gray-500">
        No order found.{" "}
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 underline"
        >
          Go Home
        </button>
      </p>
    );
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.pricePerUnit * item.quantity,
    0,
  );
  const deliveryFee = 50;
  const serviceFee = 25;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Success Icon & Message */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <FaCheck className="text-4xl text-green-600 dark:text-green-400" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Payment Successful!
        </h1>
        <p className="mb-2 text-xl text-gray-600 dark:text-gray-400">
          Thank you for your order
        </p>
        <p className="text-gray-500 dark:text-gray-500">
          Order #{Math.floor(Math.random() * 1000000)}
        </p>
      </div>

      {/* Order Details */}
      <div className="my-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Order Summary */}
        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Order Details
          </h2>
          {cart.map((item) => (
            <div
              key={item.id}
              className="mb-6 flex items-center space-x-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-700"
            >
              <Image
                src={item.images?.[0]}
                alt={item.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  By {item.harvestFrom || "Unknown Farm"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Quantity: {item.quantity} kg
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900 dark:text-white">
                  ৳{item.pricePerUnit * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Summary */}
        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Payment Summary
          </h2>

          <div className="mb-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Subtotal:
              </span>
              <span className="text-gray-900 dark:text-white">৳{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Delivery Fee:
              </span>
              <span className="text-gray-900 dark:text-white">
                ৳{deliveryFee}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Service Fee:
              </span>
              <span className="text-gray-900 dark:text-white">
                ৳{serviceFee}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-3 dark:border-gray-600">
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                <span>Total Paid:</span>
                <span>৳{total}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
              Payment Method
            </h3>
            <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
              <i className="fas fa-credit-card text-lg text-gray-600 dark:text-gray-400"></i>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {paymentInfo
                    ? paymentInfo.paymentMethod === "card"
                      ? `Card ending in ${paymentInfo.cardNumber?.slice(-4)}`
                      : paymentInfo.paymentMethod.charAt(0).toUpperCase() +
                        paymentInfo.paymentMethod.slice(1)
                    : "Payment info not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button className="flex items-center justify-center rounded-lg bg-primary-600 px-8 py-3 font-medium text-white transition hover:bg-primary-700">
          <i className="fas fa-download mr-2"></i> Download Receipt (PDF)
        </button>
        <a
          href="/orders"
          className="flex items-center justify-center rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <i className="fas fa-list mr-2"></i> View All Orders
        </a>
        <a
          href="/"
          className="dark:text-primary-400 dark:hover:text-primary-300 flex items-center justify-center px-8 py-3 font-medium text-primary-600 transition hover:text-primary-700"
        >
          <i className="fas fa-home mr-2"></i> Back to Home
        </a>
      </div>
    </div>
  );
}
