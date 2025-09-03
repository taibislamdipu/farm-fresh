import Link from "next/link";

const categories = [
  { label: "vegetables", icon: "fa-carrot", count: 150, bg: "green" },
  { label: "Fruits", icon: "fa-apple-alt", count: 80, bg: "red" },
  { label: "Grains", icon: "fa-seedling", count: 45, bg: "yellow" },
  { label: "Dairy", icon: "fa-cheese", count: 25, bg: "blue" },
  { label: "Honey", icon: "fa-jar", count: 15, bg: "purple" },
  { label: "Herbs", icon: "fa-leaf", count: 30, bg: "orange" },
];

export default function ShopByCategory() {
  return (
    <section className="bg-white py-16 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Shop by Category
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Discover fresh, locally-sourced produce across various categories
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={`/products?category=${encodeURIComponent(cat.label)}`}
            >
              <div className={`group cursor-pointer`}>
                <div
                  className={`bg-${cat.bg}-100 dark:bg-${cat.bg}-900 rounded-2xl p-6 text-center group-hover:bg-${cat.bg}-200 dark:group-hover:bg-${cat.bg}-800 transition`}
                >
                  <i
                    className={`fas ${cat.icon} text-3xl text-${cat.bg}-600 dark:text-${cat.bg}-400 mb-3`}
                  ></i>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cat.count}+ items
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
