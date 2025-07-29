import { getProductById } from "@/database/queries";
import Breadcrumb from "../Breadcrumb";

export default async function ProductDetails({ params: { id } }) {
  const product = await getProductById(id);
  console.log("product--->", product);
  return (
    <div>
      <Breadcrumb name={product.name} />
    </div>
  );
}
