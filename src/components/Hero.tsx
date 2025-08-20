import categoryBg from "@/assets/category-attractive-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${categoryBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="inline-block animate-scale-in animation-delay-100 text-white drop-shadow-2xl [text-shadow:_4px_4px_8px_rgb(0_0_0_/_0.9),_2px_2px_4px_rgb(0_0_0_/_0.7)]">Your Cravings,</span>
          <br />
          <span className="text-pop-animation text-yellow-400 inline-block drop-shadow-2xl [text-shadow:_4px_4px_8px_rgb(0_0_0_/_1),_2px_2px_4px_rgb(0_0_0_/_0.8)]">
            Our Priority
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white font-semibold mb-8 max-w-2xl mx-auto drop-shadow-xl [text-shadow:_3px_3px_6px_rgb(0_0_0_/_0.9),_1px_1px_3px_rgb(0_0_0_/_0.7)]">
          Discover amazing restaurants and get your favorite meals delivered to your doorstep in minutes
        </p>


        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 drop-shadow-lg [text-shadow:_3px_3px_6px_rgb(0_0_0_/_0.8)]">1000+</div>
            <div className="text-sm text-white font-semibold drop-shadow-md [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.7)]">Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 drop-shadow-lg [text-shadow:_3px_3px_6px_rgb(0_0_0_/_0.8)]">30min</div>
            <div className="text-sm text-white font-semibold drop-shadow-md [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.7)]">Avg Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400 drop-shadow-lg [text-shadow:_3px_3px_6px_rgb(0_0_0_/_0.8)]">50K+</div>
            <div className="text-sm text-white font-semibold drop-shadow-md [text-shadow:_2px_2px_4px_rgb(0_0_0_/_0.7)]">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;