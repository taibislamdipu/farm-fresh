"use client";

import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Breadcrumb from "../details/Breadcrumb";

export default function PaymentPage() {
  const { cart, setPaymentInfo } = useCart();
  const router = useRouter();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
    { label: "Payment" },
  ];

  const [formData, setFormData] = useState({
    paymentMethod: "card",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    mobileNumber: "",
    sameAsDelivery: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store payment info in context
    setPaymentInfo(formData);
    // Redirect to success page
    router.push("/success");
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.pricePerUnit * item.quantity,
    0,
  );
  const deliveryFee = 50;
  const serviceFee = 25;
  const total = subtotal + deliveryFee + serviceFee;

  if (cart.length === 0)
    return <p className="p-6 text-center text-gray-500">Your cart is empty.</p>;

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Order Summary */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Order Summary
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ৳{item.pricePerUnit}/kg
                  </p>
                </div>
              </div>
            ))}

            <div className="space-y-2 border-t border-gray-200 pt-4 dark:border-gray-600">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Subtotal:
                </span>
                <span className="text-gray-900 dark:text-white">
                  ৳{subtotal}
                </span>
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
              <div className="flex justify-between border-t border-gray-200 pt-2 text-lg font-bold text-gray-900 dark:border-gray-600 dark:text-white">
                <span>Total:</span>
                <span>৳{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Payment Information
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Payment Method */}
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Payment Method
                </label>
                <div className="space-y-3">
                  {["card", "bkash", "nagad"].map((method) => (
                    <label
                      key={method}
                      className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        className="text-primary-600 focus:ring-primary-500"
                        checked={formData.paymentMethod === method}
                        onChange={handleChange}
                      />
                      <div className="ml-3 flex items-center">
                        <i
                          className={`mr-2 text-lg ${
                            method === "card"
                              ? "fas fa-credit-card"
                              : method === "bkash"
                                ? "fas fa-mobile-alt"
                                : "fas fa-wallet"
                          }`}
                        ></i>
                        <span className="font-medium">
                          {method === "card"
                            ? "Credit/Debit Card"
                            : method.charAt(0).toUpperCase() + method.slice(1)}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Card Details */}
              {formData.paymentMethod === "card" && (
                <div id="cardDetails" className="space-y-4">
                  <div>
                    <label
                      htmlFor="cardName"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiry"
                        className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        CVV
                      </label>
                      <input
                        type="password"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        maxLength={4}
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Payment Details */}
              {["bkash", "nagad"].includes(formData.paymentMethod) && (
                <div id="mobileDetails" className="space-y-4">
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="+880 1234 567890"
                    />
                  </div>
                </div>
              )}

              {/* Billing Address */}
              <div>
                <label className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="sameAsDelivery"
                    checked={formData.sameAsDelivery}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    Same as delivery address
                  </span>
                </label>
              </div>

              {/* Security Notice */}
              <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                <i className="fas fa-shield-alt mr-2"></i> Your payment
                information is secure and encrypted
              </div>

              <button
                type="submit"
                className="w-full transform rounded-lg bg-primary-600 px-4 py-3 text-lg font-medium text-white transition duration-200 hover:scale-105 hover:bg-primary-700"
              >
                Complete Payment - ৳{total.toFixed(2)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
