import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Truck } from "lucide-react";

interface RestaurantCardProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  promoted?: boolean;
}

const RestaurantCard = ({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  promoted = false,
}: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-card transition-smooth cursor-pointer group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
        />
        {promoted && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Promoted
          </Badge>
        )}
        <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
          {deliveryFee === "0" ? "Free delivery" : `$${deliveryFee} delivery`}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">{cuisine}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>${deliveryFee}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;