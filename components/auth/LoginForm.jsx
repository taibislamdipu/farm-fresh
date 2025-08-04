"use client";

import { login } from "@/app/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const res = await login(data);

      if (!!res.error) {
        setError(res.error.message);
      } else {
        router.push("/");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-xl rounded-2xl">
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="john@example.com"
            />
            <MdEmail
              className="absolute left-3 top-3.5 text-gray-400"
              size={24}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
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
              className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />

            <FaLock
              className="absolute left-3 top-3.5 text-gray-400"
              size={24}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <FaEye className="text-gray-400 hover:text-gray-600" size={24} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember"
              className="ml-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Remember me
            </label>
          </div>
          <a
            href="forgot-password.html"
            className="text-sm text-primary-600 hover:text-primary-500"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-105"
        >
          Sign In
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

        <SocialLogin />
      </form>

      {/* <!-- Register Link --> */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/registration"
            className="text-primary-600 hover:text-primary-500 font-medium"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
