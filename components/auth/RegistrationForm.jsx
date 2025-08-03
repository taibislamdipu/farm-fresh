"use client";

import { useRef, useState } from "react";
import { FaCamera, FaTractor, FaUser } from "react-icons/fa";

export default function RegistrationForm() {
  const [userType, setUserType] = useState("customer");
  const [profilePreview, setProfilePreview] = useState(null);
  const [bioLength, setBioLength] = useState(0);
  const fileInputRef = useRef();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("Please select an image smaller than 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => setProfilePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleBioInput = (e) => {
    setBioLength(e.target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      alert("Passwords do not match!");
      return;
    }

    if (userType === "farmer") {
      if (!formData.get("farmName").trim()) {
        alert("Farm name is required for farmers.");
        return;
      }
      if (!formData.get("specialization")) {
        alert("Please select your farming specialization.");
        return;
      }
    }

    const data = {};
    formData.forEach((v, k) => (data[k] = v));
    console.log("Form Data:", data);
    // you can now send data to your API/backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Account type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          I want to register as:
        </label>
        <div className="grid grid-cols-2 gap-3">
          {["customer", "farmer"].map((type) => (
            <label key={type} className="relative group">
              <input
                type="radio"
                name="userType"
                value={type}
                className="sr-only peer"
                checked={userType === type}
                onChange={handleUserTypeChange}
              />
              <div className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900 hover:border-primary-300 dark:hover:border-primary-400 transition-all duration-200">
                <div className="text-center space-y-1">
                  {type === "customer" ? (
                    <FaUser className="text-2xl mx-auto" />
                  ) : (
                    <FaTractor className="text-2xl mx-auto" />
                  )}
                  <div className="font-medium">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {type === "customer"
                      ? "Buy fresh produce"
                      : "Sell your produce"}
                  </p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Profile Picture
        </label>
        <div className="flex items-center justify-center space-x-6">
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
              htmlFor="profilePicture"
              className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 transition block text-center"
            >
              <span className="flex items-center justify-center">
                <FaCamera className="mr-2" size={24} />
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

      {/* Two-column fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left */}
        <div className="space-y-4">
          {/* First Name */}
          <div>
            <label
              htmlhtmlFor="firstName"
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

          {/* Email */}
          <div>
            <label
              htmlhtmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
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

          {/* Address */}
          <div>
            <label
              htmlhtmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Full address"
            ></textarea>
          </div>

          {/* Password */}
          <div>
            <label
              htmlhtmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <div>
            <label
              htmlhtmlFor="lastName"
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

          <div>
            <label
              htmlhtmlFor="phone"
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
              placeholder="+880 …"
            />
          </div>

          <div>
            <label
              htmlhtmlFor="bio"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              maxLength="250"
              rows="3"
              onInput={handleBioInput}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Tell us about yourself..."
            ></textarea>

            <div className="flex justify-between items-center mt-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Brief description
              </p>
              <span id="bioCounter" className="text-xs text-gray-400">
                {bioLength}/250
              </span>
            </div>
          </div>

          <div>
            <label
              htmlhtmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder=""
            />
          </div>
        </div>
      </div>

      {/* Farmer fields */}
      {userType === "farmer" && (
        <div className="space-y-4">
          <div>
            <label
              htmlhtmlFor="farmName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Farm Name
            </label>
            <input
              id="farmName"
              name="farmName"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Green Valley Farm"
            />
          </div>
          <div>
            <label
              htmlhtmlFor="specialization"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Specialization
            </label>
            <select
              id="specialization"
              name="specialization"
              required
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

          <div>
            <label
              htmlFor="farmSize"
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
      )}

      <div className="flex items-start">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label
          htmlFor="terms"
          className="ml-2 text-sm text-gray-600 dark:text-gray-400"
        >
          I agree to the
          <a href="#" className="text-primary-600 hover:text-primary-500">
            Terms and Conditions{" "}
          </a>
          and{" "}
          <a href="#" className="text-primary-600 hover:text-primary-500">
            Privacy Policy
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 text-white py-3 rounded"
      >
        Create Account
      </button>
    </form>
  );
}
