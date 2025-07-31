// "use client";

import Pagination from "./Pagination";
import ProductSort from "./ProductSort";
import SidebarFilter from "./SidebarFilter";

export default async function ProductsPage() {
  return (
    <div>
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Fresh Products</h1>
          <p className="text-xl text-primary-100">
            Discover fresh, locally-sourced produce from our trusted farmers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <SidebarFilter />

          <div className="lg:col-span-3">
            <ProductSort />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <ProductCard /> */}
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
