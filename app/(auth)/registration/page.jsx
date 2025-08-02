export default function RegistrationPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* <!-- Header --> */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-500 p-3 rounded-full">
              <i className="fas fa-seedling text-white text-2xl"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Join FarmFresh community today
          </p>
        </div>

        {/* <!-- Registration Form --> */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 py-8 px-8 shadow-xl rounded-2xl">
            <form className="space-y-6" action="#" method="POST">
              {/* <!-- Account Type - Full Width --> */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  I want to register as:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative group">
                    <input
                      type="radio"
                      name="userType"
                      value="customer"
                      className="sr-only peer"
                      checked
                    />
                    <div className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900 hover:border-primary-300 dark:hover:border-primary-400 transition-all duration-200">
                      <div className="text-center">
                        <i className="fas fa-user text-2xl mb-3 text-gray-600 dark:text-gray-400 peer-checked:text-primary-600 group-hover:text-primary-500 transition-colors"></i>
                        <div className="font-semibold text-gray-900 dark:text-white peer-checked:text-primary-700 dark:peer-checked:text-primary-300">
                          Customer
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Buy fresh produce
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="relative group">
                    <input
                      type="radio"
                      name="userType"
                      value="farmer"
                      className="sr-only peer"
                    />
                    <div className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900 hover:border-primary-300 dark:hover:border-primary-400 transition-all duration-200">
                      <div className="text-center">
                        <i className="fas fa-tractor text-2xl mb-3 text-gray-600 dark:text-gray-400 peer-checked:text-primary-600 group-hover:text-primary-500 transition-colors"></i>
                        <div className="font-semibold text-gray-900 dark:text-white peer-checked:text-primary-700 dark:peer-checked:text-primary-300">
                          Farmer
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Sell your produce
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* <!-- Profile Picture Upload - Full Width --> */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Profile Picture
                </label>
                <div className="flex items-center justify-center space-x-6">
                  {/* <!-- Image Preview --> */}
                  <div className="shrink-0">
                    <img
                      id="profilePreview"
                      className="h-20 w-20 object-cover rounded-full border-2 border-gray-300 dark:border-gray-600"
                      src="data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23e5e7eb'/%3e%3ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' alignment-baseline='middle' fill='%236b7280'%3ePhoto%3c/text%3e%3c/svg%3e"
                      alt="Profile preview"
                    />
                  </div>
                  {/* <!-- Upload Button --> */}
                  <div className="flex-1 max-w-xs">
                    <label
                      for="profilePicture"
                      className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 transition block text-center"
                    >
                      <span className="flex items-center justify-center">
                        <i className="fas fa-camera mr-2"></i>
                        Choose photo
                      </span>
                      <input
                        id="profilePicture"
                        name="profilePicture"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                      />
                    </label>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center">
                      PNG, JPG, GIF up to 2MB
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Two Column Layout for Form Fields --> */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* <!-- Left Column --> */}
                <div className="space-y-4">
                  {/* <!-- First Name --> */}
                  <div>
                    <label
                      for="firstName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="John"
                    />
                  </div>

                  {/* <!-- Email --> */}
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* <!-- Address --> */}
                  <div>
                    <label
                      for="address"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows="3"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                      placeholder="Enter your full address"
                    ></textarea>
                  </div>

                  {/* <!-- Password --> */}
                  <div>
                    <label
                      for="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        <i className="fas fa-eye text-gray-400 hover:text-gray-600"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Right Column --> */}
                <div className="space-y-4">
                  {/* <!-- Last Name --> */}
                  <div>
                    <label
                      for="lastName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Doe"
                    />
                  </div>

                  {/* <!-- Phone --> */}
                  <div>
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+880 1234 567890"
                    />
                  </div>

                  {/* <!-- Bio --> */}
                  <div>
                    <label
                      for="bio"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Bio
                      <span className="text-gray-400 text-xs font-normal">
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows="3"
                      maxlength="250"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                      placeholder="Tell us about yourself..."
                    ></textarea>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Brief description
                      </p>
                      <span id="bioCounter" className="text-xs text-gray-400">
                        0/250
                      </span>
                    </div>
                  </div>

                  {/* <!-- Confirm Password --> */}
                  <div>
                    <label
                      for="confirmPassword"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        <i className="fas fa-eye text-gray-400 hover:text-gray-600"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Farmer-specific fields (hidden by default) --> */}
              <div id="farmerFields" className="hidden space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="farmName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Farm Name
                    </label>
                    <input
                      id="farmName"
                      name="farmName"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Green Valley Farm"
                    />
                  </div>
                  <div>
                    <label
                      for="specialization"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Specialization
                    </label>
                    <select
                      id="specialization"
                      name="specialization"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select specialization</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fruits">Fruits</option>
                      <option value="grains">Grains</option>
                      <option value="dairy">Dairy</option>
                      <option value="mixed">Mixed Farming</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    for="farmSize"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Farm Size
                  </label>
                  <div className="flex space-x-2">
                    <input
                      id="farmSize"
                      name="farmSize"
                      type="number"
                      min="0"
                      step="0.1"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="5.5"
                    />
                    <select
                      id="farmSizeUnit"
                      name="farmSizeUnit"
                      className="w-24 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
                    >
                      <option value="acres">Acres</option>
                      <option value="hectares">Hectares</option>
                      <option value="sq_ft">Sq Ft</option>
                      <option value="sq_m">Sq M</option>
                    </select>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Enter the total area of your farm
                  </p>
                </div>
              </div>

              {/* <!-- Terms and Conditions --> */}
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label
                  for="terms"
                  className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  I agree to the
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-500"
                  >
                    Terms and Conditions
                  </a>
                  and
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-500"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-105"
              >
                Create Account
              </button>

              {/* <!-- Divider --> */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* <!-- Social Login --> */}
              <button
                type="button"
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200 flex items-center justify-center space-x-2"
              >
                <i className="fab fa-google text-red-500"></i>
                <span>Continue with Google</span>
              </button>
            </form>

            {/* <!-- Login Link --> */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <a
                  href="login.html"
                  className="text-primary-600 hover:text-primary-500 font-medium"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
