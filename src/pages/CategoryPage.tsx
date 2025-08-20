import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, MenuItem } from "@/data/menuData";
import MenuItemCard from "@/components/MenuItemCard";
import ItemDetailModal from "@/components/ItemDetailModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = categories.find(cat => cat.id === categoryId);

  useEffect(() => {
    if (!category) {
      navigate("/");
    }
  }, [category, navigate]);

  if (!category) {
    return null;
  }

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Category background images mapping
  const categoryBackgrounds = {
    pizza: "linear-gradient(135deg, rgba(255,99,71,0.1) 0%, rgba(255,140,0,0.1) 100%), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"%23ff6347\" opacity=\"0.05\"/><circle cx=\"30\" cy=\"30\" r=\"8\" fill=\"%23ff4500\" opacity=\"0.1\"/><circle cx=\"70\" cy=\"40\" r=\"6\" fill=\"%23ffa500\" opacity=\"0.1\"/></svg>')",
    burgers: "linear-gradient(135deg, rgba(139,69,19,0.1) 0%, rgba(255,215,0,0.1) 100%), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><rect x=\"20\" y=\"40\" width=\"60\" height=\"20\" rx=\"10\" fill=\"%238b4513\" opacity=\"0.05\"/><rect x=\"25\" y=\"35\" width=\"50\" height=\"10\" rx=\"5\" fill=\"%23ffd700\" opacity=\"0.1\"/></svg>')",
    tacos: "linear-gradient(135deg, rgba(255,165,0,0.1) 0%, rgba(255,69,0,0.1) 100%), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M20 60 Q50 30 80 60 L70 70 Q50 50 30 70 Z\" fill=\"%23ffa500\" opacity=\"0.05\"/></svg>')",
    drinks: "linear-gradient(135deg, rgba(0,191,255,0.1) 0%, rgba(30,144,255,0.1) 100%), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><rect x=\"40\" y=\"20\" width=\"20\" height=\"50\" rx=\"3\" fill=\"%2300bfff\" opacity=\"0.05\"/><circle cx=\"50\" cy=\"30\" r=\"3\" fill=\"%231e90ff\" opacity=\"0.1\"/></svg>')",
    desserts: "linear-gradient(135deg, rgba(255,192,203,0.1) 0%, rgba(255,20,147,0.1) 100%), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"45\" r=\"15\" fill=\"%23ffc0cb\" opacity=\"0.05\"/><circle cx=\"50\" cy=\"35\" r=\"8\" fill=\"%23ff1493\" opacity=\"0.1\"/></svg>')",
    salads: "linear-gradient(135deg, rgba(144,238,144,0.1) 0%, rgba(34,139,34,0.1) 100%), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"40\" cy=\"40\" r=\"8\" fill=\"%2390ee90\" opacity=\"0.05\"/><circle cx=\"60\" cy=\"50\" r=\"6\" fill=\"%23228b22\" opacity=\"0.1\"/></svg>')"
  };

  const backgroundStyle = categoryBackgrounds[categoryId as keyof typeof categoryBackgrounds] || categoryBackgrounds.pizza;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main 
        className="container mx-auto px-4 py-8"
        style={{ 
          background: backgroundStyle,
          backgroundSize: 'cover, 200px 200px',
          backgroundRepeat: 'no-repeat, repeat',
          backgroundPosition: 'center, center'
        }}
      >
        {/* Back Button and Category Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <div className="text-6xl mb-4">{category.emoji}</div>
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-muted-foreground text-lg">
              Discover our delicious {category.name.toLowerCase()} collection
            </p>
            <div className="mt-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {category.items.length} items available
              </span>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.items.map((item) => (
            <MenuItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              category={item.category}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>

        {/* Empty State */}
        {category.items.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold mb-2">No items available</h3>
            <p className="text-muted-foreground">
              We're working on adding more items to this category.
            </p>
          </div>
        )}
      </main>

      <Footer />

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default CategoryPage;
