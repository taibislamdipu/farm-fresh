import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="mx-auto mb-8 max-w-2xl">
      <div className="flex overflow-hidden rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search for vegetables, fruits, farmers..."
          className="flex-1 px-6 py-4 text-lg text-gray-900 focus:outline-none"
        />
        <select className="border-l border-gray-300 px-4 py-4 text-gray-900 focus:outline-none">
          <option>All Categories</option>
          <option>Vegetables</option>
          <option>Fruits</option>
          <option>Grains</option>
          <option>Dairy</option>
        </select>
        <button className="bg-primary-700 px-8 py-4 transition hover:bg-primary-800">
          <IoSearch size={28} className="text-xl" />
        </button>
      </div>
    </div>
  );
}
