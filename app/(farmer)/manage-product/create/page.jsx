import ProductForm from "@/app/products/ProductForm";
import { Suspense } from "react";

export default function CreateProductPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800">
        <div className="bg-primary-600 px-8 py-6 text-white">
          <h1 className="text-3xl font-bold">Add New Product</h1>
          <p className="mt-2 text-primary-100">
            Share your fresh produce with customers
          </p>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <ProductForm />
        </Suspense>
      </div>
    </div>
  );
}
