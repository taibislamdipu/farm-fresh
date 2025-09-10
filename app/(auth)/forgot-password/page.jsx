import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function ForgotPassword() {
  return (
    <div class="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center">
          <div class="mb-6 flex justify-center">
            <div class="rounded-full bg-primary-500 p-3">
              <i class="fas fa-key text-2xl text-white"></i>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            Reset your password
          </h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>

        <div class="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-gray-800">
          <form class="space-y-6" action="#" method="POST" id="resetForm">
            <div>
              <label
                for="email"
                class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <div class="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
              class="w-full transform rounded-lg bg-primary-600 px-4 py-3 font-medium text-white transition duration-200 hover:scale-105 hover:bg-primary-700"
            >
              <i class="fas fa-paper-plane mr-2"></i>
              Send Reset Link
            </button>

            {/* <!-- Success Message (hidden by default) --> */}
            <div
              id="successMessage"
              class="hidden rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900"
            >
              <div class="flex items-center">
                <i class="fas fa-check-circle mr-3 text-green-500"></i>
                <div>
                  <h4 class="font-medium text-green-800 dark:text-green-200">
                    Email sent successfully!
                  </h4>
                  <p class="mt-1 text-sm text-green-700 dark:text-green-300">
                    Check your email for password reset instructions.
                  </p>
                </div>
              </div>
            </div>
          </form>

          <div class="mt-6 text-center">
            <Link
              href="/login"
              class="dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center text-sm text-primary-600 hover:text-primary-500"
            >
              <i class="fas fa-arrow-left mr-2"></i>
              Back to login
            </Link>
          </div>
        </div>

        {/* <!-- Additional Help --> */}
        <div class="rounded-lg bg-blue-50 p-4 dark:bg-blue-900">
          <h3 class="mb-2 text-sm font-medium text-blue-800 dark:text-blue-200">
            <i class="fas fa-info-circle mr-2"></i>
            Need help?
          </h3>
          <div class="space-y-1 text-xs text-blue-700 dark:text-blue-300">
            <p>• Check your spam/junk folder if you don't receive the email</p>
            <p>• Make sure you entered the correct email address</p>
            <p>• Contact support if you continue having issues</p>
          </div>
          <div class="mt-3">
            <a
              href="#"
              class="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Contact Support
            </a>
          </div>
        </div>

        <div class="text-center">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/registration"
              class="dark:text-primary-400 dark:hover:text-primary-300 font-medium text-primary-600 hover:text-primary-500"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
