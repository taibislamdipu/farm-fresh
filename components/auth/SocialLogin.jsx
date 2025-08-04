"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  const handleAuth = (event) => {
    signIn("google", { callbackUrl: "http://localhost:3000/products" });
  };

  return (
    <button
      onClick={handleAuth}
      type="button"
      className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200 flex items-center justify-center space-x-2"
    >
      <FcGoogle size={24} />
      <span>Continue with Google</span>
    </button>
  );
}
