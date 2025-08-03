import Category from "./Category";
import Location from "./Location";
import OrganicFilter from "./OrganicFilter";
import PriceRange from "./PriceRange";

export default function SidebarFilter() {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Filters
        </h3>

        <Category />
        <PriceRange />
        <Location />
        <OrganicFilter />

        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
}
