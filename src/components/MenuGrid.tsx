import { useMemo } from "react";
import { categories, MenuItem } from "@/data/menuData";
import MenuItemCard from "./MenuItemCard";

interface MenuGridProps {
  selectedCategory: string;
  searchQuery: string;
}

const MenuGrid = ({ selectedCategory, searchQuery }: MenuGridProps) => {
  const filteredItems = useMemo(() => {
    let items: MenuItem[] = [];
    
    if (searchQuery) {
      // Search across all categories
      items = categories.flatMap(category => category.items)
        .filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    } else {
      // Show items from selected category
      const category = categories.find(cat => cat.id === selectedCategory);
      items = category?.items || [];
    }
    
    return items;
  }, [selectedCategory, searchQuery]);

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          {searchQuery ? "No items found matching your search." : "No items available in this category."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {filteredItems.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;