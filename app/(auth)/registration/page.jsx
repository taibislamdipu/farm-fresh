"use client";
import RegistrationForm from "@/components/auth/RegistrationForm";
import Link from "next/link";
import RegistrationPageHeader from "./RegistrationPageHeader";

import { useSearchParams } from "next/navigation";

export default function RegistrationPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RegistrationPageHeader />

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white px-8 py-8 shadow-xl dark:bg-gray-800">
            <RegistrationForm type={type} />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
