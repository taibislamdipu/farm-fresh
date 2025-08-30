"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEye, FaHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function ManageProductCard({ product }) {
  const router = useRouter();

  const handleProductDelete = async () => {
    if (confirm("Are you sure you want to delete this product?")) {
      const res = await fetch(`/api/product/${product.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh(); // refresh product list
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete product");
      }
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800">
      <div className="relative">
        <Image
          src={product?.images?.[0]}
          alt={product?.name}
          className="h-48 w-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
            Active
          </span>
        </div>
        <div className="absolute right-3 top-3">
          <button className="rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
            <FaHeart className="text-red-500" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold capitalize text-gray-900 dark:text-white">
            {product.name}
          </h3>
          <div className="flex items-center text-yellow-400">
            <i className="fas fa-star text-sm"></i>
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
              4.8 (23)
            </span>
          </div>
        </div>

        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
          Organic • Vegetables
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="dark:text-primary-400 text-2xl font-bold text-primary-600">
              ৳45
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              /kg
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Stock: 50kg
          </span>
        </div>

        <div className="flex space-x-2">
          <Link
            href={`/manage-product/edit/${product.id}`}
            key={product.id}
            className="flex flex-1 items-center justify-center rounded-lg bg-primary-600 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
          >
            <FiEdit className="mr-1" size={24} /> Edit
          </Link>

          <Link
            href={`/details/${product.id}`}
            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <FaEye size={24} />
          </Link>

          <button
            onClick={() => handleProductDelete(product.id)}
            className="rounded-lg border border-red-300 px-4 py-2 text-red-600 transition hover:bg-red-50 dark:hover:bg-red-900"
          >
            <MdDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
