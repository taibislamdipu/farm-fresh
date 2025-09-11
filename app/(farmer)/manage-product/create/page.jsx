"use client";

import ProductForm from "@/app/products/ProductForm";
import LoginButton from "@/components/auth/LoginButton";
import { useSession } from "next-auth/react";
import { Suspense } from "react";

export default function CreateProductPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>; // optional spinner
  }

  if (!session) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-2 p-8">
        <h2>Please login to continue</h2>
        <div>
          <LoginButton />
        </div>
      </div>
    );
  }

  if (session.user.userType !== "farmer") {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-2 p-8 text-2xl font-bold">
        You are not authorized to access this page.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800">
        <div className="bg-primary-600 px-8 py-6 text-white">
          <h1 className="text-3xl font-bold">Add New Product</h1>
          <p className="mt-2 text-primary-100">
            Share your fresh produce with customers
          </p>
        </div>

        <Suspense fallback={<div className="p-8">Loading...</div>}>
          <ProductForm />
        </Suspense>
      </div>
    </div>
  );
}
