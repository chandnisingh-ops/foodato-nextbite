import { Search, MapPin, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Header = () => {
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-sm font-bold text-white">F</span>
          </div>
          <span className="text-xl font-bold text-primary">FOODATO</span>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden flex-1 max-w-sm mx-8 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search restaurants or dishes..." className="pl-10" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden lg:flex">
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="sm">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;