import ProductForm from "@/app/products/ProductForm";
import { getProductById } from "@/database/queries";

export default async function EditProductPage({ params }) {
  const product = await getProductById(params.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800">
        <div className="bg-primary-600 px-8 py-6 text-white">
          <h1 className="text-3xl font-bold">Edit Product</h1>
          <p className="mt-2 text-primary-100">
            Share your fresh produce with customers
          </p>
        </div>

        <ProductForm product={product} />
      </div>
    </div>
  );
}
