import { Search, MapPin, User, Download, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Cart from "@/components/Cart";
const Header = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-14 w-20 rounded-lg overflow-hidden p-1">
            <img src="/lovable-uploads/2943eb32-b9c4-474a-a906-53304d666a9b.png" alt="FOODATO Logo" className="h-full w-full object-contain" />
          </div>
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
          
          <Cart />
          
          <Link to="/download">
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">GET APP</span>
            </Button>
          </Link>
          
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Welcome, {user.email?.split('@')[0]}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">Sign Out</span>
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">Sign In</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>;
};
export default Header;