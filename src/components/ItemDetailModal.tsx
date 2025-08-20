import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Minus, ShoppingCart } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { restaurants } from "@/data/restaurantData";
import { useCart } from "@/hooks/useCart";

interface ItemDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ItemDetailModal = ({ item, isOpen, onClose }: ItemDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, getItemQuantity } = useCart();

  if (!item) return null;

  const restaurant = restaurants.find(r => r.menuItems.includes(item.id));
  const currentQuantityInCart = getItemQuantity(item.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(item);
    }
    setQuantity(1);
    onClose();
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  // Mock discount calculation
  const originalPrice = Math.round(item.price * 1.2);
  const discountPercentage = Math.round(((originalPrice - item.price) / originalPrice) * 100);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{item.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Item Image */}
          <div className="w-full h-64 rounded-lg overflow-hidden bg-muted">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Item Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>

            {/* Restaurant Info */}
            {restaurant && (
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">{restaurant.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{restaurant.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{restaurant.deliveryTime}</span>
                    <span>•</span>
                    <span>{restaurant.city}</span>
                  </div>
                </div>
                <Badge variant="secondary">{restaurant.cuisine.join(", ")}</Badge>
              </div>
            )}

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                {discountPercentage > 0 && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">₹{originalPrice}</span>
                    <Badge variant="destructive" className="text-xs">
                      {discountPercentage}% OFF
                    </Badge>
                  </>
                )}
              </div>
              {discountPercentage > 0 && (
                <p className="text-sm text-green-600">You save ₹{originalPrice - item.price}!</p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <h4 className="font-medium">Quantity</h4>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Current Cart Status */}
            {currentQuantityInCart > 0 && (
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary">
                  <ShoppingCart className="h-4 w-4 inline mr-1" />
                  {currentQuantityInCart} item(s) already in cart
                </p>
              </div>
            )}

            {/* Add to Cart Button */}
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-gradient-primary hover:bg-gradient-hero"
              size="lg"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add {quantity} to Cart - ₹{item.price * quantity}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailModal;
