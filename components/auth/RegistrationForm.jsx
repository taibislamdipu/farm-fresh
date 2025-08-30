"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCamera, FaTractor, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import ImageAvatar from "../../public/assets/profile-placeholder-image.jpg";
import ButtonLoading from "../shared/ButtonLoading";

export default function RegistrationForm({ type }) {
  const [userType, setUserType] = useState("customer");
  const [profilePreview, setProfilePreview] = useState(null);
  const [bioLength, setBioLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleBioInput = (e) => {
    setBioLength(e.target.value.length);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      alert("Passwords do not match!");
      return;
    }

    // if (userType === "farmer") {
    //   if (!formData.get("farmName").trim()) {
    //     alert("Farm name is required for farmers.");
    //     return;
    //   }
    //   if (!formData.get("specialization")) {
    //     alert("Please select your farming specialization.");
    //     return;
    //   }
    // }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      const uploadedData = await res.json();

      if (res.status === 201) {
        toast.success("Account created successfully");
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong");
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
    // you can now send data to your API/backend
  };

  // Clean up memory when component unmounts
  useEffect(() => {
    return () => {
      if (profilePreview) {
        URL.revokeObjectURL(profilePreview);
      }
    };
  }, [profilePreview]);

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
                checked={userType === type}
                onChange={handleUserTypeChange}
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

      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Profile Picture
        </label>
        <div className="flex items-center justify-center space-x-6">
          <div className="shrink-0">
            <Image
              id="profilePreview"
              className="h-20 w-20 rounded-full border-2 border-gray-300 object-cover dark:border-gray-600"
              src={profilePreview || ImageAvatar}
              alt="Profile preview"
              width={80}
              height={80}
            />
          </div>
          {/* <!-- Upload Button --> */}
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
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const previewURL = URL.createObjectURL(file);
                    setProfilePreview(previewURL);
                  }
                }}
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
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="John"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="john@example.com"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Full address"
            ></textarea>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="lastName"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Doe"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="+880 …"
            />
          </div>

          <div>
            <label
              htmlFor="bio"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              maxLength="250"
              rows="3"
              onInput={handleBioInput}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Tell us about yourself..."
            ></textarea>

            <div className="mt-1 flex items-center justify-between">
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
              htmlFor="confirmPassword"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
              htmlFor="farmName"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Farm Name
            </label>
            <input
              id="farmName"
              name="farmName"
              type="text"
              // required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Green Valley Farm"
            />
          </div>
          <div>
            <label
              htmlFor="specialization"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Specialization
            </label>
            <select
              id="specialization"
              name="specialization"
              // required
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
            <label
              htmlFor="farmSize"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="5.5"
              />
              <select
                id="farmSizeUnit"
                name="farmSizeUnit"
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

      <div className="flex items-start">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
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
