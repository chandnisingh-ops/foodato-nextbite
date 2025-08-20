import { useState, useEffect, useRef } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { indianCities } from "@/data/restaurantData";

interface LocationSelectorProps {
  selectedCity: string;
  onCitySelect: (city: string) => void;
  className?: string;
}

const LocationSelector = ({ selectedCity, onCitySelect, className = "" }: LocationSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setFilteredCities(indianCities.slice(0, 10)); // Show top 10 cities initially
    } else {
      const filtered = indianCities
        .filter(city => 
          city.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 8);
      setFilteredCities(filtered);
    }
    setSelectedIndex(-1);
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setFilteredCities(indianCities.slice(0, 10));
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCitySelect = (city: string) => {
    onCitySelect(city);
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || filteredCities.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredCities.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredCities.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleCitySelect(filteredCities[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 h-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MapPin className="h-4 w-4" />
        <span className="hidden sm:inline">
          {selectedCity || "Select Location"}
        </span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div 
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border border-border rounded-md shadow-lg min-w-[280px]"
        >
          <div className="p-3 border-b">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                ref={inputRef}
                placeholder="Search cities..."
                className="pl-10 h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <div
                  key={city}
                  className={`px-4 py-3 cursor-pointer hover:bg-accent transition-colors ${
                    index === selectedIndex ? 'bg-accent' : ''
                  } ${selectedCity === city ? 'bg-primary/10 text-primary' : ''}`}
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{city}</span>
                    {selectedCity === city && (
                      <span className="ml-auto text-xs text-primary">Current</span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-muted-foreground">
                <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No cities found</p>
              </div>
            )}
          </div>

          {searchQuery.length === 0 && (
            <div className="p-3 border-t text-xs text-muted-foreground text-center">
              Start typing to search for more cities
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LocationSelector;
