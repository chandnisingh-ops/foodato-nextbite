import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories, MenuItem } from "@/data/menuData";
import { restaurants } from "@/data/restaurantData";

interface SearchSuggestion {
  id: string;
  name: string;
  type: 'item' | 'restaurant' | 'category';
  category?: string;
  restaurant?: string;
}

interface EnhancedSearchBarProps {
  onSearch: (query: string) => void;
  onSuggestionSelect: (suggestion: SearchSuggestion) => void;
  placeholder?: string;
  className?: string;
}

const EnhancedSearchBar = ({ 
  onSearch, 
  onSuggestionSelect, 
  placeholder = "Search for dishes, restaurants, or categories...",
  className = ""
}: EnhancedSearchBarProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Generate all searchable items
  const getAllSearchableItems = (): SearchSuggestion[] => {
    const items: SearchSuggestion[] = [];
    
    // Add menu items
    categories.forEach(category => {
      category.items.forEach(item => {
        items.push({
          id: item.id,
          name: item.name,
          type: 'item',
          category: category.name
        });
      });
    });

    // Add restaurants
    restaurants.forEach(restaurant => {
      items.push({
        id: restaurant.id,
        name: restaurant.name,
        type: 'restaurant',
        restaurant: restaurant.city
      });
    });

    // Add categories
    categories.forEach(category => {
      items.push({
        id: category.id,
        name: category.name,
        type: 'category'
      });
    });

    return items;
  };

  const searchableItems = getAllSearchableItems();

  useEffect(() => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = searchableItems
      .filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 8); // Limit to 8 suggestions

    setSuggestions(filtered);
    setShowSuggestions(true);
    setSelectedIndex(-1);
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.name);
    setShowSuggestions(false);
    onSuggestionSelect(suggestion);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'item':
        return '🍽️';
      case 'restaurant':
        return '🏪';
      case 'category':
        return '📂';
      default:
        return '🔍';
    }
  };

  const getSuggestionSubtext = (suggestion: SearchSuggestion) => {
    switch (suggestion.type) {
      case 'item':
        return `in ${suggestion.category}`;
      case 'restaurant':
        return `Restaurant in ${suggestion.restaurant}`;
      case 'category':
        return 'Category';
      default:
        return '';
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          placeholder={placeholder}
          className="pl-10 h-12"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          onBlur={() => {
            // Delay hiding suggestions to allow clicks
            setTimeout(() => setShowSuggestions(false), 200);
          }}
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border border-border rounded-md shadow-lg max-h-64 overflow-y-auto"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={`${suggestion.type}-${suggestion.id}`}
              className={`px-4 py-3 cursor-pointer hover:bg-accent transition-colors ${
                index === selectedIndex ? 'bg-accent' : ''
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">
                    {suggestion.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {getSuggestionSubtext(suggestion)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnhancedSearchBar;
