import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/menuData";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FlowingMenuProps {
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string;
}

const FlowingMenu = ({ onCategorySelect, selectedCategory }: FlowingMenuProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 6;

  const scrollLeft = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const scrollRight = () => {
    setStartIndex(Math.min(categories.length - itemsToShow, startIndex + 1));
  };

  const visibleCategories = categories.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="relative flex items-center justify-center py-8 bg-card/50 backdrop-blur-sm">
      <div className="container max-w-6xl">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollLeft}
            disabled={startIndex === 0}
            className="h-12 w-12 rounded-full shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex-1 overflow-hidden">
            <div className="flex gap-4 transition-transform duration-300 ease-in-out">
              {visibleCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "ghost"}
                  onClick={() => onCategorySelect(category.id)}
                  className="min-w-[120px] h-16 flex-col gap-1 hover:scale-105 transition-transform duration-200"
                >
                  <div className="text-2xl">{category.emoji}</div>
                  <span className="text-xs font-medium">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollRight}
            disabled={startIndex >= categories.length - itemsToShow}
            className="h-12 w-12 rounded-full shadow-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;