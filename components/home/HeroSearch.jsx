import SearchBar from "./SearchBar";

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

          <SearchBar />

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
