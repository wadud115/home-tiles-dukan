import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Banner />
      <Marquee />
      <FeaturedTiles />
    </main>
  );
}