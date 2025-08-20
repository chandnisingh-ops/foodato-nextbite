import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <FeaturedRestaurants />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Index;
