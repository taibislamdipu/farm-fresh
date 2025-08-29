import { getAllProducts } from "@/database/queries";
import Link from "next/link";
import ManageProductCard from "./ManageProductCard";

export default async function ProductsGrid() {
  const products = await getAllProducts();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link href={`/manage-product/${product.id}`} key={product.id}>
          <ManageProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
