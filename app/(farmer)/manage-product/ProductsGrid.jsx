import Pagination from "@/app/products/Pagination";
import { getAllProducts } from "@/database/queries";
import ManageProductCard from "./ManageProductCard";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProductsGrid({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;

  const filters = {
    search: searchParams?.search || "",
    category: searchParams?.category || "",
    status: searchParams?.status || "",
  };

  const { products, total } = await getAllProducts({
    page,
    limit: 6,
    filters,
  });

  const totalPages = Math.ceil(total / 6);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ManageProductCard
            key={product.id}
            product={product}
            currentPage={page}
          />
        ))}
      </div>

      {products.length > 0 && (
        <Pagination page={page} totalPages={totalPages} />
      )}

      <div>
        {products.length === 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
              No products found
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
