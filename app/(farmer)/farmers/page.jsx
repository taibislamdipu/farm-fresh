import { getAllFarmers } from "@/database/queries";
import FarmerCard from "./FarmerCard";
import Hero from "./Hero";
import JoinFarmer from "./JoinFarmer";
import Stats from "./Stats";

export default async function FarmerPage() {
  const farmers = await getAllFarmers();

  return (
    <div>
      <Hero />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Stats />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {farmers.slice(0, 6).map((farmer) => (
            <FarmerCard key={farmer.id} farmer={farmer} />
          ))}
        </div>

        {farmers.length > 6 && (
          <div className="mt-12 text-center">
            <button className="rounded-lg bg-primary-600 px-8 py-3 font-medium text-white transition hover:bg-primary-700">
              Load More Farmers
            </button>
          </div>
        )}
      </div>

      <JoinFarmer />
    </div>
  );
}
