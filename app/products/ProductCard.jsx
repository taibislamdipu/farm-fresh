import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      <div className="relative">
        <Image
          src={product?.images?.[0]}
          alt={product?.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={200}
          height={150}
        />
        {product?.productFeatures?.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {product.productFeatures.map((feature, index) => (
              <span
                key={index}
                className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium capitalize text-white"
              >
                {feature.replace(/_/g, " ")}
              </span>
            ))}
          </div>
        )}

        <div className="absolute right-3 top-3">
          <button className="rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
            <FaHeart className="text-gray-600 dark:text-gray-400" />
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
              4.8
            </span>
          </div>
        </div>
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
          By {product.harvestFrom} • {product.farmLocation}
        </p>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="dark:text-primary-400 text-2xl font-bold text-primary-600">
              ৳{product.pricePerUnit}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              /kg
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Stock: {product.stock}kg
          </span>
        </div>
        <button className="w-full rounded-lg bg-primary-600 py-2 font-medium text-white transition hover:bg-primary-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
