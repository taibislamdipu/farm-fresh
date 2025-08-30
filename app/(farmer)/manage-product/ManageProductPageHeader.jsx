import Link from "next/link";
import { MdAdd } from "react-icons/md";

export default function ManageProductPageHeader() {
  return (
    <div className="mb-8 flex flex-col items-start justify-between sm:flex-row sm:items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Manage Products
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your product listings and inventory
        </p>
      </div>
      <Link
        href="/manage-product/create"
        className="mt-4 inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition hover:bg-primary-700 sm:mt-0"
      >
        <MdAdd size={24} className="mr-2" />
        Add New Product
      </Link>
    </div>
  );
}
