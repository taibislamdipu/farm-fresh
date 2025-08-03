import Breadcrumb from "@/app/details/Breadcrumb";

export default function ManageProductsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Manage Products" },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}
