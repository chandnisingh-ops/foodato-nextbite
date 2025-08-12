import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, name: "Pizza", emoji: "🍕", color: "bg-red-100" },
  { id: 2, name: "Burgers", emoji: "🍔", color: "bg-yellow-100" },
  { id: 3, name: "Asian", emoji: "🍜", color: "bg-orange-100" },
  { id: 4, name: "Mexican", emoji: "🌮", color: "bg-green-100" },
  { id: 5, name: "Desserts", emoji: "🍰", color: "bg-pink-100" },
  { id: 6, name: "Healthy", emoji: "🥗", color: "bg-emerald-100" },
  { id: 7, name: "Coffee", emoji: "☕", color: "bg-amber-100" },
  { id: 8, name: "Indian", emoji: "🍛", color: "bg-red-100" },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What are you craving?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our variety of cuisines and find your perfect meal
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className="h-auto p-4 flex-col space-y-2 hover:bg-card hover:shadow-card transition-smooth group"
            >
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-bounce`}>
                {category.emoji}
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;