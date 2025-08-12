import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedRestaurants />
      </main>
    </div>
  );
};

export default Index;
