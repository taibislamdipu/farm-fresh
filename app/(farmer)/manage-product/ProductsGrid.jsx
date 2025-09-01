import Pagination from "@/app/products/Pagination";
import { getAllProducts } from "@/database/queries";
import ManageProductCard from "./ManageProductCard";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProductsGrid({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  const { products, total } = await getAllProducts({ page, limit: 6 });
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

      <Pagination page={page} totalPages={totalPages} />
    </>
  );
}
