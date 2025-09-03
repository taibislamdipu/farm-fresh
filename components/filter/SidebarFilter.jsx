import Category from "./Category";
import PriceRange from "./PriceRange";

export default function SidebarFilter() {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Filters
        </h3>

        <Category />
        <PriceRange />
        {/* <Location />
        <OrganicFilter /> */}

        {/* <button className="w-full rounded-lg bg-primary-600 py-2 font-medium text-white transition hover:bg-primary-700">
          Apply Filters
        </button> */}
      </div>
    </div>
  );
}
