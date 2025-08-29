import SidebarFilter from "@/components/filter/SidebarFilter";
import { getAllProducts } from "@/database/queries";
import Link from "next/link";
import { Suspense } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import ProductSort from "./ProductSort";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="bg-primary-600 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold">Fresh Products</h1>
          <p className="text-xl text-primary-100">
            Discover fresh, locally-sourced produce from our trusted farmers
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <Suspense fallback={<div>Loading filters...</div>}>
            <SidebarFilter />
          </Suspense>

          <div className="lg:col-span-3">
            <ProductSort />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 6).map((product) => (
                <Link href={`/details/${product.id}`} key={product.id}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
