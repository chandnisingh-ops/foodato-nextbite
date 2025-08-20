import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { restaurants } from "@/data/restaurantData";
import { categories, MenuItem } from "@/data/menuData";
import MenuItemCard from "@/components/MenuItemCard";
import ItemDetailModal from "@/components/ItemDetailModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RestaurantPage = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const restaurant = restaurants.find(r => r.id === restaurantId);

  useEffect(() => {
    if (!restaurant) {
      navigate("/");
    }
  }, [restaurant, navigate]);

  if (!restaurant) {
    return null;
  }

  // Get all menu items available in this restaurant
  const restaurantMenuItems: MenuItem[] = [];
  categories.forEach(category => {
    category.items.forEach(item => {
      if (restaurant.menuItems.includes(item.id)) {
        restaurantMenuItems.push(item);
      }
    });
  });

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Restaurant Header */}
        <div className="mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <img 
              src={restaurant.image} 
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-lg opacity-90">{restaurant.description}</p>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <div>
                <div className="font-semibold">{restaurant.rating} Rating</div>
                <div className="text-sm text-muted-foreground">Customer Reviews</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">{restaurant.deliveryTime}</div>
                <div className="text-sm text-muted-foreground">Delivery Time</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">{restaurant.city}</div>
                <div className="text-sm text-muted-foreground">{restaurant.address}</div>
              </div>
            </div>
          </div>

          {/* Cuisine Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {restaurant.cuisine.map((cuisine) => (
              <Badge key={cuisine} variant="secondary" className="text-sm">
                {cuisine}
              </Badge>
            ))}
            <Badge variant="outline" className="text-sm">
              {restaurant.priceRange}
            </Badge>
            {restaurant.isOpen && (
              <Badge className="text-sm bg-green-500">
                Open Now
              </Badge>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Menu Items</h2>
          
          {restaurantMenuItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {restaurantMenuItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onClick={() => handleItemClick(item)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">No menu items available</h3>
              <p className="text-muted-foreground">
                This restaurant is currently updating their menu.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default RestaurantPage;
