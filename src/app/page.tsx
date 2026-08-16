import { HeroSlider } from "@/components/home/HeroSlider";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedGrid } from "@/components/home/FeaturedGrid";

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      <HeroSlider />
      <ServicesGrid />
      <FeaturedGrid />
    </div>
  );
}