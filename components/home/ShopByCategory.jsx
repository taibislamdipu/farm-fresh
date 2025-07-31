import Link from "next/link";

export default function ShopByCategory() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover fresh, locally-sourced produce across various categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <Link href={"/products?category=Vegetables"}>
            <div className="group cursor-pointer">
              <div className="bg-green-100 dark:bg-green-900 rounded-2xl p-6 text-center group-hover:bg-green-200 dark:group-hover:bg-green-800 transition">
                <i className="fas fa-carrot text-3xl text-green-600 dark:text-green-400 mb-3"></i>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Vegetables
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  150+ items
                </p>
              </div>
            </div>
          </Link>

          <div className="group cursor-pointer">
            <div className="bg-red-100 dark:bg-red-900 rounded-2xl p-6 text-center group-hover:bg-red-200 dark:group-hover:bg-red-800 transition">
              <i className="fas fa-apple-alt text-3xl text-red-600 dark:text-red-400 mb-3"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Fruits
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                80+ items
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-yellow-100 dark:bg-yellow-900 rounded-2xl p-6 text-center group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800 transition">
              <i className="fas fa-seedling text-3xl text-yellow-600 dark:text-yellow-400 mb-3"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Grains
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                45+ items
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-2xl p-6 text-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition">
              <i className="fas fa-cheese text-3xl text-blue-600 dark:text-blue-400 mb-3"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Dairy
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                25+ items
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-2xl p-6 text-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition">
              <i className="fas fa-jar text-3xl text-purple-600 dark:text-purple-400 mb-3"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Honey
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                15+ items
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-orange-100 dark:bg-orange-900 rounded-2xl p-6 text-center group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition">
              <i className="fas fa-leaf text-3xl text-orange-600 dark:text-orange-400 mb-3"></i>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Herbs
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                30+ items
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
