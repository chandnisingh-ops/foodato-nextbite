import { useState } from "react";
import FlowingMenu from "./FlowingMenu";
import MenuGrid from "./MenuGrid";
import SearchBar from "./SearchBar";
import { categories } from "@/data/menuData";

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || "");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our delicious variety of cuisines and dishes
          </p>
        </div>

        <SearchBar onSearch={setSearchQuery} />
        
        <FlowingMenu 
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        
        <MenuGrid 
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      </div>
    </section>
  );
};

export default MenuSection;