import Breadcrumb from "@/app/details/Breadcrumb";
import Pagination from "@/app/products/Pagination";
import FiltersAndSearch from "./filter/FiltersAndSearch";
import ManageProductPageHeader from "./ManageProductPageHeader";
import ProductsGrid from "./ProductsGrid";

export default function ManageProductsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Manage Products" },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ManageProductPageHeader />
        <FiltersAndSearch />
        <ProductsGrid />
        <Pagination />
      </div>
    </div>
  );
}
