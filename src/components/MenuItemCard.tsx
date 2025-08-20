import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface MenuItemCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  onClick?: () => void;
}

const MenuItemCard = ({ id, name, description, price, image, category, onClick }: MenuItemCardProps) => {
  const navigate = useNavigate();
  const { addItem, removeItem, getItemQuantity } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartQuantity = getItemQuantity(id);

  const handleQuantityChange = (change: number) => {
    setSelectedQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    const item = { id, name, description, price, image, category };
    for (let i = 0; i < selectedQuantity; i++) {
      addItem(item);
    }
    setShowQuantitySelector(false);
    setSelectedQuantity(1);
  };

  const handleRemoveFromCart = () => {
    removeItem(id);
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/item/${id}`);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={handleCardClick}>
      <CardContent className="p-4">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            ₹{price}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">₹{price}</span>
          
          {cartQuantity > 0 ? (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFromCart();
                }}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-medium min-w-[20px] text-center">{cartQuantity}</span>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  const item = { id, name, description, price, image, category };
                  addItem(item);
                }}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : showQuantitySelector ? (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuantityChange(-1);
                }}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-medium min-w-[20px] text-center">{selectedQuantity}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuantityChange(1);
                }}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
                className="flex items-center gap-1"
              >
                <ShoppingCart className="h-4 w-4" />
                Add
              </Button>
            </div>
          ) : (
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setShowQuantitySelector(true);
              }}
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;