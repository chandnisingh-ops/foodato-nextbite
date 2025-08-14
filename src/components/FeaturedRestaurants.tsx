import RestaurantCard from "./RestaurantCard";
import tacoFiestaImage from "@/assets/taco-fiesta-new.jpg";

const restaurants = [
  {
    id: 1,
    name: "Mario's Pizza Palace",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
    cuisine: "Italian • Pizza",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "2.99",
    promoted: true,
  },
  {
    id: 2,
    name: "Burger Kingdom",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
    cuisine: "American • Burgers",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: "1.99",
  },
  {
    id: 3,
    name: "Sakura Sushi",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&h=300&fit=crop",
    cuisine: "Japanese • Sushi",
    rating: 4.9,
    deliveryTime: "30-45 min",
    deliveryFee: "3.99",
  },
  {
    id: 4,
    name: "Green Garden",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
    cuisine: "Healthy • Salads",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: "0",
    promoted: true,
  },
  {
    id: 5,
    name: "Taco Fiesta",
    image: tacoFiestaImage,
    cuisine: "Mexican • Tacos",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: "2.49",
  },
  {
    id: 6,
    name: "Coffee Corner",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop",
    cuisine: "Cafe • Coffee",
    rating: 4.4,
    deliveryTime: "10-20 min",
    deliveryFee: "1.49",
  },
];

const FeaturedRestaurants = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Restaurants
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most popular restaurants in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;