import Breadcrumb from "../details/Breadcrumb";

export default function PaymentPage() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <div>PaymentPage</div>;
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Product Details", href: "/details/68893f972a273fb13d0d308f" },
    { label: "Payment" },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* <!-- Order Summary --> */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Order Summary
            </h2>

            {/* <!-- Product Details --> */}
            <div className="mb-6 flex items-center space-x-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=80&h=80&fit=crop"
                alt="Fresh Tomatoes"
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Fresh Tomatoes
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  By Rahim's Farm
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Quantity: 5 kg
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900 dark:text-white">
                  ৳225
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ৳45/kg
                </p>
              </div>
            </div>

            {/* <!-- Booking Details --> */}
            <div className="mb-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Booking Date:
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  Dec 20, 2024
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Delivery Date:
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  Dec 22, 2024
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Delivery Address:
                </span>
                <span className="text-right font-medium text-gray-900 dark:text-white">
                  123 Main St, Dhaka
                </span>
              </div>
            </div>

            {/* <!-- Price Breakdown --> */}
            <div className="space-y-2 border-t border-gray-200 pt-4 dark:border-gray-600">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Subtotal:
                </span>
                <span className="text-gray-900 dark:text-white">৳225</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Delivery Fee:
                </span>
                <span className="text-gray-900 dark:text-white">৳50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Service Fee:
                </span>
                <span className="text-gray-900 dark:text-white">৳25</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 text-lg font-bold text-gray-900 dark:border-gray-600 dark:text-white">
                <span>Total:</span>
                <span>৳300</span>
              </div>
            </div>

            {/* <!-- Edit Button --> */}
            <button className="mt-4 w-full rounded-lg bg-gray-200 py-2 font-medium text-gray-900 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <i className="fas fa-edit mr-2"></i>Edit Order Details
            </button>
          </div>

          {/* <!-- Payment Form --> */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Payment Information
            </h2>

            <form className="space-y-6" action="success.html" method="POST">
              {/* <!-- Payment Method --> */}
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      className="text-primary-600 focus:ring-primary-500"
                      checked
                    />
                    <div className="ml-3 flex items-center">
                      <i className="fas fa-credit-card mr-2 text-lg"></i>
                      <span className="font-medium">Credit/Debit Card</span>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bkash"
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <div className="ml-3 flex items-center">
                      <i className="fas fa-mobile-alt mr-2 text-lg"></i>
                      <span className="font-medium">bKash</span>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="nagad"
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <div className="ml-3 flex items-center">
                      <i className="fas fa-wallet mr-2 text-lg"></i>
                      <span className="font-medium">Nagad</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* <!-- Card Details --> */}
              <div id="cardDetails" className="space-y-4">
                <div>
                  <label
                    for="cardName"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    for="cardNumber"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      for="expiry"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label
                      for="cvv"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      CVV
                    </label>
                    <input
                      type="password"
                      id="cvv"
                      name="cvv"
                      maxlength="4"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Mobile Payment Details --> */}
              <div id="mobileDetails" className="hidden space-y-4">
                <div>
                  <label
                    for="mobileNumber"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="+880 1234 567890"
                  />
                </div>
              </div>

              {/* <!-- Billing Address --> */}
              <div>
                <label className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    checked
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    Same as delivery address
                  </span>
                </label>
              </div>

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                className="w-full transform rounded-lg bg-primary-600 px-4 py-3 text-lg font-medium text-white transition duration-200 hover:scale-105 hover:bg-primary-700"
              >
                <i className="fas fa-lock mr-2"></i>
                Complete Payment - ৳300
              </button>

              {/* <!-- Security Notice --> */}
              <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                <i className="fas fa-shield-alt mr-2"></i>
                Your payment information is secure and encrypted
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
