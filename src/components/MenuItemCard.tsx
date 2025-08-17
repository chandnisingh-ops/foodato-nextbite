import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/hooks/useCart";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addItem, removeItem, getItemQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantity = getItemQuantity(item.id);

  const handleAddToCart = () => {
    addItem(item);
  };

  const handleRemoveFromCart = () => {
    removeItem(item.id);
  };

  return (
    <>
      <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => setIsOpen(true)}>
        <CardContent className="p-4">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              ₹{item.price}
            </Badge>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.name}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">₹{item.price}</span>
            
            {quantity > 0 ? (
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
                <span className="font-medium min-w-[20px] text-center">{quantity}</span>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart();
                  }}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{item.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                <Badge variant="secondary">{item.category}</Badge>
              </div>
              
              <div className="flex items-center gap-4">
                {quantity > 0 ? (
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleRemoveFromCart}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-medium min-w-[40px] text-center">{quantity}</span>
                    <Button
                      size="sm"
                      onClick={handleAddToCart}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button onClick={handleAddToCart} className="flex-1">
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MenuItemCard;