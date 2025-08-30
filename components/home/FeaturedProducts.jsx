import { getAllProducts } from "@/database/queries";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../../app/products/ProductCard";

export default async function FeaturedProducts() {
  const { products } = await getAllProducts({ page: 1, limit: 8 });

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fresh picks from our local farmers
            </p>
          </div>
          <Link
            href="/products"
            className="dark:text-primary-400 dark:hover:text-primary-300 flex items-center font-medium text-primary-600 hover:text-primary-700"
          >
            View All
            <FaArrowRight className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <Link href={`/details/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
