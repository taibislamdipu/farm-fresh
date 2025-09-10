"use client";

import { login } from "@/app/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
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
        setError(res.error);
        toast.error("Something went wrong");
      } else {
        router.push("/");
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-gray-800">
      {error && <div className="mb-4 text-red-500">{error}</div>}

      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-10 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />

            <FaLock
              className="absolute left-3 top-3.5 text-gray-400"
              size={24}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
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
              className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
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
          className="w-full transform rounded-lg bg-primary-600 px-4 py-3 font-medium text-white transition duration-200 hover:scale-105 hover:bg-primary-700"
        >
          Sign In
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <SocialLogin />
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/registration"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
