import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, Plus, Minus } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { categories } from "@/data/menuData";
import { restaurants } from "@/data/restaurantData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ItemDetailPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Get all menu items from categories
  const allMenuItems = categories.flatMap(category => category.items);
  const item = allMenuItems.find(item => item.id === itemId);
  
  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Item not found</h1>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const restaurant = restaurants.find(r => r.menuItems.includes(item.id));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(item);
    }
    navigate(-1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {item.category}
                </Badge>
                {restaurant && (
                  <Badge variant="outline" className="text-xs">
                    {restaurant.name}
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">4.5</span>
                </div>
                <span className="text-muted-foreground text-sm">(120+ reviews)</span>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="text-3xl font-bold text-primary mb-6">
                ₹{item.price}
              </div>
            </div>

            {/* Quantity Selector */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-medium">Quantity</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    ₹{item.price * quantity}
                  </span>
                </div>

                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-primary hover:bg-gradient-hero text-lg py-6"
                  size="lg"
                >
                  Add {quantity} to Cart
                </Button>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">Preparation Time:</span>
                <br />15-20 minutes
              </div>
              <div>
                <span className="font-medium">Serves:</span>
                <br />1-2 people
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ItemDetailPage;
