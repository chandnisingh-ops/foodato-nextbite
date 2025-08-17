import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-taking-photos-of-a-food-blogger-enjoying-a-delicious-21.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="inline-block animate-scale-in animation-delay-100">Your Cravings,</span>
          <br />
          <span className="text-pop-animation bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
            Our Priority
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover amazing restaurants and get your favorite meals delivered to your doorstep in minutes
        </p>


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