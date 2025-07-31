import { getProductsByCategory } from "@/database/queries";
import ProductCard from "../products/ProductCard";

export default async function RelatedProducts({ product }) {
  const { category } = product;

  const products = await getProductsByCategory(category);

  console.log(products.length);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
