import Breadcrumb from "@/app/details/Breadcrumb";
import FiltersAndSearch from "./filter/FiltersAndSearch";
import ManageProductPageHeader from "./ManageProductPageHeader";
import ProductsGrid from "./ProductsGrid";

export default function ManageProductsPage({ searchParams }) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Manage Products" },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ManageProductPageHeader />
        <FiltersAndSearch />
        <ProductsGrid searchParams={searchParams} />
      </div>
    </div>
  );
}
