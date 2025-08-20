import { useNavigate } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useLocation } from "@/hooks/useLocation";
import { restaurants } from "@/data/restaurantData";
import tacoFiestaImage from "@/assets/taco-fiesta-new.jpg";

const FeaturedRestaurants = () => {
  const navigate = useNavigate();
  const { getFilteredRestaurants, selectedCity } = useLocation();
  
  const filteredRestaurants = getFilteredRestaurants().slice(0, 9); // Show top 9 restaurants for better grid layout

  const handleRestaurantClick = (restaurantId: string) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Restaurants
            {selectedCity && (
              <span className="text-primary"> in {selectedCity}</span>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {selectedCity 
              ? `Discover the most popular restaurants in ${selectedCity} - ${filteredRestaurants.length} restaurants available`
              : "Discover the most popular restaurants in your area"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.id} 
              {...restaurant}
              cuisine={restaurant.cuisine.join(" • ")}
              deliveryFee="2.99"
              onClick={() => handleRestaurantClick(restaurant.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;