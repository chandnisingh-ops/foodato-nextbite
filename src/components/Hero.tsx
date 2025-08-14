import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Good Food,
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Faster than your Cravings
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover amazing restaurants and get your favorite meals delivered to your doorstep in minutes
        </p>

        {/* Search Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Enter your delivery address"
                className="pl-10 bg-white border-0 h-12 text-foreground"
              />
            </div>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for restaurants or dishes"
                className="pl-10 bg-white border-0 h-12 text-foreground"
              />
            </div>
            <Button variant="hero" size="lg" className="h-12 px-8">
              Find Food
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1000+</div>
            <div className="text-sm text-gray-300">Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">30min</div>
            <div className="text-sm text-gray-300">Avg Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">50K+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;