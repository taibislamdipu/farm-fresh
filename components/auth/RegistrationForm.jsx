"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCamera, FaTractor, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import ImageAvatar from "../../public/assets/profile-placeholder-image.jpg";
import ButtonLoading from "../shared/ButtonLoading";

export default function RegistrationForm({ type }) {
  const [user, setUser] = useState({
    userType: "customer",
    profilePreview: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    password: "",
    confirmPassword: "",
    farmName: "",
    specialization: "",
    farmSize: "",
    farmSizeUnit: "acres",
    termsAccepted: false,
  });
  const [bioLength, setBioLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  // Handle generic input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    if (name === "bio") {
      setBioLength(value.length);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setUser((prev) => ({ ...prev, profilePreview: previewURL }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      const uploadedData = await res.json();

      if (res.status === 201) {
        toast.success("Account created successfully");
      } else {
        toast.error(uploadedData.message || "Something went wrong");
      }

      console.log("uploadedData--->", uploadedData);
    } catch (error) {
      console.error("error--->", error);
    } finally {
      setLoading(false);
    }

    const data = {};
    formData.forEach((v, k) => (data[k] = v));
    console.log("Form Data:", data);
  };

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (user.profilePreview) {
        URL.revokeObjectURL(user.profilePreview);
      }
    };
  }, [user.profilePreview]);

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* Account type */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
          I want to register as:
        </label>
        <div className="grid grid-cols-2 gap-3">
          {["customer", "farmer"].map((type) => (
            <label key={type} className="group relative">
              <input
                type="radio"
                name="userType"
                value={type}
                className="peer sr-only"
                checked={user.userType === type}
                onChange={handleChange}
              />
              <div className="hover:border-primary-300 dark:hover:border-primary-400 cursor-pointer rounded-lg border-2 border-gray-200 p-4 transition-all duration-200 peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:border-gray-600 dark:peer-checked:bg-primary-900">
                <div className="space-y-1 text-center">
                  {type === "customer" ? (
                    <FaUser className="mx-auto text-2xl" />
                  ) : (
                    <FaTractor className="mx-auto text-2xl" />
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

      {/* Profile Picture */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Profile Picture
        </label>
        <div className="flex items-center justify-center space-x-6">
          <div className="shrink-0">
            <Image
              className="h-20 w-20 rounded-full border-2 border-gray-300 object-cover dark:border-gray-600"
              src={user.profilePreview || ImageAvatar}
              alt="Profile preview"
              width={80}
              height={80}
            />
          </div>
          <div className="max-w-xs flex-1">
            <label
              htmlFor="profilePicture"
              className="relative block cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 transition focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
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
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </label>
            <p className="mt-1 text-center text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG, GIF up to 2MB
            </p>
          </div>
        </div>
      </div>

      {/* Two-column fields */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              First Name
            </label>
            <input
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="John"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Address
            </label>
            <textarea
              name="address"
              value={user.address}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Full address"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Last Name
            </label>
            <input
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Doe"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              value={user.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="+880 …"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Bio
            </label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              maxLength="250"
              rows="3"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Tell us about yourself..."
            />
            <div className="mt-1 flex items-center justify-between">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Brief description
              </p>
              <span className="text-xs text-gray-400">{bioLength}/250</span>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Farmer-specific fields */}
      {user.userType === "farmer" && (
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Farm Name
            </label>
            <input
              name="farmName"
              value={user.farmName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Green Valley Farm"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Specialization
            </label>
            <select
              name="specialization"
              value={user.specialization}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Farm Size
            </label>
            <div className="flex space-x-2">
              <input
                name="farmSize"
                type="number"
                min="0"
                step="0.1"
                value={user.farmSize}
                onChange={handleChange}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="5.5"
              />
              <select
                name="farmSizeUnit"
                value={user.farmSizeUnit}
                onChange={handleChange}
                className="w-24 rounded-lg border border-gray-300 px-2 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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

      {/* Terms */}
      <div className="flex items-start">
        <input
          id="termsAccepted"
          name="termsAccepted"
          type="checkbox"
          value="true"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        <label
          htmlFor="termsAccepted"
          className="ml-2 text-sm text-gray-600 dark:text-gray-400"
        >
          I agree to the{" "}
          <a href="#" className="text-primary-600 hover:text-primary-500">
            Terms and Conditions{" "}
          </a>
          and{" "}
          <a href="#" className="text-primary-600 hover:text-primary-500">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded bg-primary-600 py-3 text-white"
        disabled={loading}
      >
        {loading ? (
          <ButtonLoading loadingText="Creating Account" />
        ) : (
          <span>Create Account</span>
        )}
      </button>
    </form>
  );
}
