import { IoSearch } from "react-icons/io5";

export default function HeroSearch() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Fresh from Farm to Your Table
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-green-100 md:text-2xl">
            Connect directly with local farmers and get the freshest produce
            delivered to your doorstep
          </p>

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

          <div className="mx-auto grid max-w-md grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-green-200">Local Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2000+</div>
              <div className="text-green-200">Fresh Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10k+</div>
              <div className="text-green-200">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
