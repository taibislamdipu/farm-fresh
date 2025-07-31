import AddProductForm from "@/app/products/AddProductForm";

export default function AddNewProduct() {
  return (
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div class="bg-primary-600 text-white px-8 py-6">
          <h1 class="text-3xl font-bold">Add New Product</h1>
          <p class="text-primary-100 mt-2">
            Share your fresh produce with customers
          </p>
        </div>

        <AddProductForm />
      </div>
    </div>
  );
}
