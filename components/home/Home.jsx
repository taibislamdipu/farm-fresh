import FeaturedProducts from "./FeaturedProducts";
import HeroSearch from "./HeroSearch";
import ShopByCategory from "./ShopByCategory";

export default function HomePage() {
  return (
    <div>
      <HeroSearch />
      <ShopByCategory />
      <FeaturedProducts />
    </div>
  );
}
