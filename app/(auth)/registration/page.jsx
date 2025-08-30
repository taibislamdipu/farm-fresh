"use client";

import RegistrationForm from "@/components/auth/RegistrationForm";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import RegistrationPageHeader from "./RegistrationPageHeader";

// This component can safely use useSearchParams
function RegistrationFormWrapper() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return <RegistrationForm type={type} />;
}

export default function RegistrationPage() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RegistrationPageHeader />

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white px-8 py-8 shadow-xl dark:bg-gray-800">
            <Suspense fallback={<div>Loading...</div>}>
              <RegistrationFormWrapper />
            </Suspense>

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
