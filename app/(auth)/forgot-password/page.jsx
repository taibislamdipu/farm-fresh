"use client";
import Link from "next/link";
import { useState } from "react";
import { MdEmail } from "react-icons/md";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleForgetPassword(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/forget-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const json = await res.json();

    if (res.ok) {
      setSuccess(true);
    } else {
      console.error(json.message || "Error sending reset email");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary-500 p-3">
              <i className="fas fa-key text-2xl text-white"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Reset your password
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>

        <div className="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-gray-800">
          <form className="space-y-6" onSubmit={handleForgetPassword}>
            <div>
              <label
                for="email"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="john@example.com"
                />

                <MdEmail
                  size={24}
                  className="absolute left-3 top-3.5 text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full transform rounded-lg bg-primary-600 px-4 py-3 font-medium text-white transition duration-200 hover:scale-105 hover:bg-primary-700"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Send Reset Link
            </button>

            {success && (
              <div
                id="successMessage"
                className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900"
              >
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-3 text-green-500"></i>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200">
                      Email sent successfully!
                    </h4>
                    <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                      Check your email for password reset instructions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center text-sm text-primary-600 hover:text-primary-500"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to login
            </Link>
          </div>
        </div>

        {/* <!-- Additional Help --> */}
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900">
          <h3 className="mb-2 text-sm font-medium text-blue-800 dark:text-blue-200">
            <i className="fas fa-info-circle mr-2"></i>
            Need help?
          </h3>
          <div className="space-y-1 text-xs text-blue-700 dark:text-blue-300">
            <p>• Check your spam/junk folder if you don't receive the email</p>
            <p>• Make sure you entered the correct email address</p>
            <p>• Contact support if you continue having issues</p>
          </div>
          <div className="mt-3">
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Contact Support
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/registration"
              className="dark:text-primary-400 dark:hover:text-primary-300 font-medium text-primary-600 hover:text-primary-500"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
