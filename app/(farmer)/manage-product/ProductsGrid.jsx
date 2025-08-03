import ManageProductCard from "./ManageProductCard";

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ManageProductCard />
    </div>
  );
}
