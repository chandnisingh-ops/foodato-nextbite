import { User, Download, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "@/hooks/useLocation";
import Cart from "@/components/Cart";
import EnhancedSearchBar from "@/components/EnhancedSearchBar";
import LocationSelector from "@/components/LocationSelector";
import UserProfile from "@/components/UserProfile";

const Header = () => {
  const { user, signOut } = useAuth();
  const { selectedCity, setSelectedCity } = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleSearch = (query: string) => {
    // Handle search functionality
    console.log("Search query:", query);
  };

  const handleSuggestionSelect = (suggestion: any) => {
    if (suggestion.type === 'category') {
      navigate(`/category/${suggestion.id}`);
    } else if (suggestion.type === 'restaurant') {
      navigate(`/restaurant/${suggestion.id}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="h-16 w-24 rounded-lg overflow-hidden p-1">
            <img src="/lovable-uploads/2943eb32-b9c4-474a-a906-53304d666a9b.png" alt="FOODATO Logo" className="h-full w-full object-contain" />
          </Link>
        </div>

        {/* Enhanced Search Bar - Hidden on mobile */}
        <div className="hidden flex-1 max-w-sm mx-8 md:flex">
          <EnhancedSearchBar
            onSearch={handleSearch}
            onSuggestionSelect={handleSuggestionSelect}
            placeholder="Search restaurants or dishes..."
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-2">
          <LocationSelector
            selectedCity={selectedCity}
            onCitySelect={setSelectedCity}
            className="hidden lg:flex"
          />
          
          <Cart />
          
          <Link to="/download">
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">GET APP</span>
            </Button>
          </Link>
          
          {user ? (
            <UserProfile />
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
    </header>
  );
};
export default Header;