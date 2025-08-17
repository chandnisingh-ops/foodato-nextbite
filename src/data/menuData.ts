export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

export const categories: Category[] = [
  {
    id: "biryani",
    name: "Biryani",
    emoji: "🍛",
    items: [
      { id: "hyderabadi-chicken", name: "Hyderabadi Chicken Biryani", description: "Aromatic basmati rice with tender chicken in traditional Hyderabadi style", price: 299, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "lucknowi-mutton", name: "Lucknowi Mutton Biryani", description: "Royal mutton biryani with fragrant spices and tender meat", price: 399, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "kolkata-egg", name: "Kolkata Egg Biryani", description: "Bengali style biryani with boiled eggs and potatoes", price: 199, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "veg-dum", name: "Veg Dum Biryani", description: "Mixed vegetables cooked in aromatic basmati rice", price: 249, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "malabar-prawn", name: "Malabar Prawn Biryani", description: "Coastal special with fresh prawns and coconut", price: 449, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "chicken-tikka-biryani", name: "Chicken Tikka Biryani", description: "Grilled chicken tikka pieces with biryani rice", price: 349, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "mushroom-biryani", name: "Mushroom Biryani", description: "Fresh mushrooms cooked with aromatic spices", price: 229, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "keema-biryani", name: "Keema Biryani", description: "Minced meat biryani with rich flavors", price: 329, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "jackfruit-biryani", name: "Jackfruit Biryani", description: "Unique vegetarian biryani with jackfruit", price: 269, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" },
      { id: "afghani-biryani", name: "Afghani Biryani", description: "Rich and flavorful Afghan style biryani", price: 379, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "biryani" }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    emoji: "🍕",
    items: [
      { id: "margherita", name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella and basil", price: 199, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "pepperoni", name: "Pepperoni Pizza", description: "Spicy pepperoni slices with cheese", price: 299, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "bbq-chicken", name: "BBQ Chicken Pizza", description: "Grilled chicken with BBQ sauce and vegetables", price: 349, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "veggie-supreme", name: "Veggie Supreme Pizza", description: "Loaded with fresh vegetables and cheese", price: 279, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "four-cheese", name: "Four Cheese Pizza", description: "Blend of four premium cheeses", price: 329, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "paneer-tikka", name: "Paneer Tikka Pizza", description: "Indian style pizza with paneer tikka", price: 299, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "hawaiian", name: "Hawaiian Pizza", description: "Ham and pineapple with cheese", price: 319, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "mushroom-spinach", name: "Mushroom & Spinach Pizza", description: "Fresh mushrooms and spinach with cheese", price: 259, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "mexican-green", name: "Mexican Green Wave Pizza", description: "Capsicum, jalapenos and Mexican spices", price: 289, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" },
      { id: "chicken-sausage", name: "Chicken Sausage Pizza", description: "Chicken sausage with herbs and cheese", price: 339, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop", category: "pizza" }
    ]
  },
  {
    id: "burger",
    name: "Burger",
    emoji: "🍔",
    items: [
      { id: "classic-chicken", name: "Classic Chicken Burger", description: "Juicy grilled chicken patty with lettuce and mayo", price: 149, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "veggie-burger", name: "Veggie Burger", description: "Plant-based patty with fresh vegetables", price: 129, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "cheese-burst", name: "Cheese Burst Burger", description: "Double cheese patty with melted cheese center", price: 179, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "double-patty", name: "Double Patty Burger", description: "Two beef patties with special sauce", price: 249, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "crispy-fish", name: "Crispy Fish Burger", description: "Crispy fish fillet with tartar sauce", price: 199, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "spicy-paneer", name: "Spicy Paneer Burger", description: "Grilled paneer with spicy sauce", price: 159, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "bbq-bacon", name: "BBQ Bacon Burger", description: "Beef patty with crispy bacon and BBQ sauce", price: 229, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "mushroom-swiss", name: "Mushroom Swiss Burger", description: "Mushrooms with swiss cheese", price: 189, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "grilled-chicken-burger", name: "Grilled Chicken Burger", description: "Healthy grilled chicken with vegetables", price: 169, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" },
      { id: "peri-peri-veg", name: "Peri Peri Veg Burger", description: "Spicy peri peri vegetable patty", price: 139, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop", category: "burger" }
    ]
  },
  {
    id: "chicken",
    name: "Chicken",
    emoji: "🍗",
    items: [
      { id: "butter-chicken", name: "Butter Chicken", description: "Creamy tomato-based chicken curry", price: 299, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "chicken-curry", name: "Chicken Curry", description: "Spicy and flavorful chicken curry", price: 279, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "chicken-kebab", name: "Chicken Kebab", description: "Grilled marinated chicken skewers", price: 249, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "chicken-65", name: "Chicken 65", description: "Spicy deep-fried chicken bites", price: 229, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "grilled-chicken-breast", name: "Grilled Chicken Breast", description: "Healthy grilled chicken breast", price: 279, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "chicken-shawarma-plate", name: "Chicken Shawarma Plate", description: "Middle Eastern style chicken shawarma", price: 299, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "chicken-tikka-masala", name: "Chicken Tikka Masala", description: "Grilled chicken in creamy masala sauce", price: 319, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "tandoori-chicken", name: "Tandoori Chicken", description: "Spiced roasted chicken from tandoor", price: 299, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "chicken-manchurian", name: "Chicken Manchurian", description: "Indo-Chinese spicy chicken dish", price: 279, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" },
      { id: "fried-chicken", name: "Fried Chicken", description: "Crispy deep-fried chicken pieces", price: 249, image: "https://images.unsplash.com/photo-1604908177520-0a3a3a7a1a3a?w=500&h=300&fit=crop", category: "chicken" }
    ]
  },
  {
    id: "sandwich",
    name: "Sandwich",
    emoji: "🥪",
    items: [
      { id: "grilled-veg-sandwich", name: "Grilled Veg Sandwich", description: "Toasted sandwich with grilled vegetables", price: 149, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "club-sandwich", name: "Club Sandwich", description: "Triple layered sandwich with chicken and veggies", price: 179, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "chicken-mayo-sandwich", name: "Chicken Mayo Sandwich", description: "Chicken with mayonnaise spread", price: 159, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "paneer-tikka-sandwich", name: "Paneer Tikka Sandwich", description: "Spiced paneer with veggies", price: 169, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "egg-salad-sandwich", name: "Egg Salad Sandwich", description: "Egg salad with fresh greens", price: 139, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "cheese-tomato-sandwich", name: "Cheese & Tomato Sandwich", description: "Classic cheese and tomato combo", price: 129, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "tuna-melt-sandwich", name: "Tuna Melt Sandwich", description: "Tuna with melted cheese", price: 179, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "blt-sandwich", name: "BLT Sandwich", description: "Bacon, lettuce and tomato sandwich", price: 159, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "spicy-corn-sandwich", name: "Spicy Corn Sandwich", description: "Corn with spicy mayo", price: 139, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" },
      { id: "mushroom-cheese-sandwich", name: "Mushroom & Cheese Sandwich", description: "Sautéed mushrooms with cheese", price: 149, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop", category: "sandwich" }
    ]
  },
  {
    id: "cake",
    name: "Cake",
    emoji: "🍰",
    items: [
      { id: "chocolate-truffle", name: "Chocolate Truffle Cake", description: "Rich chocolate cake with truffle layers", price: 399, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "red-velvet", name: "Red Velvet Cake", description: "Classic red velvet with cream cheese frosting", price: 379, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "black-forest", name: "Black Forest Cake", description: "Chocolate cake with cherries and cream", price: 389, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "cheesecake", name: "Cheesecake", description: "Creamy cheesecake with biscuit base", price: 359, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "pineapple-cake", name: "Pineapple Cake", description: "Sweet pineapple flavored cake", price: 349, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "butterscotch", name: "Butterscotch Cake", description: "Butterscotch flavored moist cake", price: 339, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "tiramisu", name: "Tiramisu Cake", description: "Coffee-flavored Italian dessert cake", price: 399, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "coffee-walnut", name: "Coffee Walnut Cake", description: "Coffee flavored cake with walnuts", price: 359, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "blueberry", name: "Blueberry Cake", description: "Cake topped with fresh blueberries", price: 369, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" },
      { id: "strawberry-cream", name: "Strawberry Cream Cake", description: "Light cake with strawberry and cream", price: 359, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "cake" }
    ]
  },
  {
    id: "thali",
    name: "Thali",
    emoji: "🍽️",
    items: [
      { id: "veg-north-indian-thali", name: "Veg North Indian Thali", description: "Assorted vegetarian dishes from North India", price: 299, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "south-indian-thali", name: "South Indian Thali", description: "Traditional South Indian meal with rice and sambar", price: 279, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "rajasthani-thali", name: "Rajasthani Thali", description: "Rajasthani delicacies served in a platter", price: 319, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "gujarati-thali", name: "Gujarati Thali", description: "Sweet and savory Gujarati dishes", price: 289, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "maharashtrian-thali", name: "Maharashtrian Thali", description: "Traditional Maharashtrian meal", price: 299, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "punjabi-thali", name: "Punjabi Thali", description: "Hearty Punjabi dishes served together", price: 319, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "bengali-thali", name: "Bengali Thali", description: "Bengali delicacies with rice and fish", price: 329, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "mini-veg-thali", name: "Mini Veg Thali", description: "Compact vegetarian thali with essentials", price: 199, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "jain-thali", name: "Jain Thali", description: "Jain food prepared without root vegetables", price: 299, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" },
      { id: "seafood-thali", name: "Seafood Thali", description: "Assorted seafood dishes with rice", price: 399, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "thali" }
    ]
  },
  {
    id: "north-indian",
    name: "North Indian",
    emoji: "🥘",
    items: [
      { id: "dal-makhani", name: "Dal Makhani", description: "Creamy black lentils cooked with butter", price: 199, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "butter-chicken", name: "Butter Chicken", description: "Creamy tomato-based chicken curry", price: 299, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "rogan-josh", name: "Rogan Josh", description: "Spicy lamb curry from Kashmir", price: 349, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "palak-paneer", name: "Palak Paneer", description: "Spinach curry with cottage cheese", price: 249, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "chole-bhature", name: "Chole Bhature", description: "Spicy chickpeas with fried bread", price: 199, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "rajma-chawal", name: "Rajma Chawal", description: "Kidney beans curry with rice", price: 179, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "paneer-butter-masala", name: "Paneer Butter Masala", description: "Paneer cubes in creamy tomato gravy", price: 249, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "aloo-paratha", name: "Aloo Paratha", description: "Stuffed potato flatbread", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "tandoori-roti", name: "Tandoori Roti", description: "Whole wheat flatbread cooked in tandoor", price: 39, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" },
      { id: "malai-kofta", name: "Malai Kofta", description: "Vegetable balls in creamy gravy", price: 229, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "north-indian" }
    ]
  },
  {
    id: "veg-meal",
    name: "Veg Meal",
    emoji: "🥗",
    items: [
      { id: "veg-pulao", name: "Veg Pulao", description: "Fragrant rice cooked with vegetables", price: 179, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "dal-fry-rice", name: "Dal Fry & Rice", description: "Yellow lentils with steamed rice", price: 149, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "paneer-curry-roti", name: "Paneer Curry & Roti", description: "Paneer curry served with roti", price: 199, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "chole-rice", name: "Chole & Rice", description: "Spicy chickpeas with rice", price: 179, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "veg-kofta-curry", name: "Veg Kofta Curry", description: "Vegetable dumplings in gravy", price: 199, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "mushroom-masala", name: "Mushroom Masala", description: "Spiced mushroom curry", price: 189, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "bhindi-masala", name: "Bhindi Masala", description: "Okra cooked with spices", price: 159, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "vegetable-korma", name: "Vegetable Korma", description: "Mixed vegetables in creamy sauce", price: 199, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "jeera-aloo", name: "Jeera Aloo", description: "Potatoes cooked with cumin seeds", price: 139, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" },
      { id: "kadhi-chawal", name: "Kadhi Chawal", description: "Yogurt-based curry with rice", price: 179, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "veg-meal" }
    ]
  },
  {
    id: "south-indian",
    name: "South Indian",
    emoji: "🍛",
    items: [
      { id: "idli-sambar", name: "Idli Sambar", description: "Steamed rice cakes with lentil stew", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "masala-dosa", name: "Masala Dosa", description: "Crispy rice crepe with spiced potato filling", price: 129, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "medu-vada", name: "Medu Vada", description: "Fried lentil doughnuts", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "rava-dosa", name: "Rava Dosa", description: "Semolina crepe with spices", price: 129, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "uttapam", name: "Uttapam", description: "Thick rice pancake with toppings", price: 139, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "lemon-rice", name: "Lemon Rice", description: "Rice flavored with lemon and mustard seeds", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "curd-rice", name: "Curd Rice", description: "Rice mixed with yogurt and spices", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "pesarattu", name: "Pesarattu", description: "Green gram crepe", price: 129, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "upma", name: "Upma", description: "Savory semolina porridge", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" },
      { id: "pongal", name: "Pongal", description: "Rice and lentil dish", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "south-indian" }
    ]
  },
  {
    id: "rolls",
    name: "Rolls",
    emoji: "🌯",
    items: [
      { id: "paneer-tikka-roll", name: "Paneer Tikka Roll", description: "Spiced paneer wrapped in flatbread", price: 149, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "chicken-kathi-roll", name: "Chicken Kathi Roll", description: "Grilled chicken wrapped in paratha", price: 179, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "egg-roll", name: "Egg Roll", description: "Egg and veggies wrapped in flatbread", price: 139, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "mutton-seekh-roll", name: "Mutton Seekh Roll", description: "Spiced minced mutton wrapped in paratha", price: 199, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "veg-frankie", name: "Veg Frankie", description: "Vegetable roll with tangy sauce", price: 129, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "cheese-corn-roll", name: "Cheese Corn Roll", description: "Corn and cheese wrapped in flatbread", price: 149, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "chicken-shawarma-roll", name: "Chicken Shawarma Roll", description: "Middle Eastern spiced chicken roll", price: 179, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "paneer-bhurji-roll", name: "Paneer Bhurji Roll", description: "Scrambled paneer wrapped in paratha", price: 149, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "bbq-chicken-roll", name: "BBQ Chicken Roll", description: "Chicken with BBQ sauce wrapped in flatbread", price: 179, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" },
      { id: "aloo-tikki-roll", name: "Aloo Tikki Roll", description: "Spiced potato patty wrapped in paratha", price: 129, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "rolls" }
    ]
  },
  {
    id: "dosa",
    name: "Dosa",
    emoji: "🥞",
    items: [
      { id: "plain-dosa", name: "Plain Dosa", description: "Crispy rice crepe", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "masala-dosa", name: "Masala Dosa", description: "Dosa filled with spiced potato", price: 129, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "rava-dosa", name: "Rava Dosa", description: "Semolina crepe with spices", price: 129, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "cheese-dosa", name: "Cheese Dosa", description: "Dosa topped with melted cheese", price: 149, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "mysore-masala-dosa", name: "Mysore Masala Dosa", description: "Spicy chutney spread inside dosa", price: 139, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "onion-dosa", name: "Onion Dosa", description: "Dosa topped with onions", price: 119, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "set-dosa", name: "Set Dosa", description: "Soft thick dosas served in set of three", price: 139, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "podi-dosa", name: "Podi Dosa", description: "Dosa sprinkled with spiced lentil powder", price: 129, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "ghee-roast-dosa", name: "Ghee Roast Dosa", description: "Dosa roasted with ghee", price: 139, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" },
      { id: "paneer-dosa", name: "Paneer Dosa", description: "Dosa filled with spiced paneer", price: 149, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "dosa" }
    ]
  },
  {
    id: "paratha",
    name: "Paratha",
    emoji: "🥞",
    items: [
      { id: "aloo-paratha", name: "Aloo Paratha", description: "Stuffed potato flatbread", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "paneer-paratha", name: "Paneer Paratha", description: "Stuffed cottage cheese flatbread", price: 119, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "gobi-paratha", name: "Gobi Paratha", description: "Stuffed cauliflower flatbread", price: 109, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "methi-paratha", name: "Methi Paratha", description: "Fenugreek flavored flatbread", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "onion-paratha", name: "Onion Paratha", description: "Stuffed onion flatbread", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "cheese-paratha", name: "Cheese Paratha", description: "Flatbread stuffed with cheese", price: 129, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "egg-paratha", name: "Egg Paratha", description: "Flatbread stuffed with egg", price: 139, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "mix-veg-paratha", name: "Mix Veg Paratha", description: "Flatbread stuffed with mixed vegetables", price: 119, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "mooli-paratha", name: "Mooli Paratha", description: "Stuffed radish flatbread", price: 109, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" },
      { id: "laccha-paratha", name: "Laccha Paratha", description: "Layered flaky flatbread", price: 99, image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "paratha" }
    ]
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    emoji: "🍨",
    items: [
      { id: "vanilla-ice-cream", name: "Vanilla Ice Cream", description: "Classic vanilla flavored ice cream", price: 99, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "chocolate-ice-cream", name: "Chocolate Ice Cream", description: "Rich chocolate flavored ice cream", price: 109, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "strawberry-ice-cream", name: "Strawberry Ice Cream", description: "Fresh strawberry flavored ice cream", price: 109, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "butterscotch-ice-cream", name: "Butterscotch Ice Cream", description: "Sweet butterscotch flavored ice cream", price: 109, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "mango-ice-cream", name: "Mango Ice Cream", description: "Tropical mango flavored ice cream", price: 119, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "coffee-ice-cream", name: "Coffee Ice Cream", description: "Rich coffee flavored ice cream", price: 119, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "black-currant-ice-cream", name: "Black Currant Ice Cream", description: "Tangy black currant flavored ice cream", price: 129, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "cookie-dough-ice-cream", name: "Cookie Dough Ice Cream", description: "Ice cream with cookie dough chunks", price: 139, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "mint-chocolate-chip-ice-cream", name: "Mint Chocolate Chip Ice Cream", description: "Mint flavored ice cream with chocolate chips", price: 129, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" },
      { id: "kulfi", name: "Kulfi", description: "Traditional Indian ice cream", price: 99, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "ice-cream" }
    ]
  },
  {
    id: "shawarma",
    name: "Shawarma",
    emoji: "🥙",
    items: [
      { id: "chicken-shawarma-roll", name: "Chicken Shawarma Roll", description: "Middle Eastern spiced chicken roll", price: 179, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "beef-shawarma-roll", name: "Beef Shawarma Roll", description: "Spiced beef wrapped in flatbread", price: 199, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "lamb-shawarma-plate", name: "Lamb Shawarma Plate", description: "Grilled lamb served with sides", price: 299, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "falafel-shawarma-wrap", name: "Falafel Shawarma Wrap", description: "Falafel balls wrapped in flatbread", price: 149, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "paneer-shawarma-roll", name: "Paneer Shawarma Roll", description: "Spiced paneer wrapped in flatbread", price: 159, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "shawarma-pizza", name: "Shawarma Pizza", description: "Pizza topped with shawarma ingredients", price: 299, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "shawarma-platter", name: "Shawarma Platter", description: "Assorted shawarma with sides", price: 349, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "spicy-chicken-shawarma", name: "Spicy Chicken Shawarma", description: "Hot and spicy chicken shawarma", price: 179, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "garlic-mayo-shawarma", name: "Garlic Mayo Shawarma", description: "Shawarma with garlic mayonnaise", price: 179, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" },
      { id: "shawarma-with-hummus", name: "Shawarma with Hummus", description: "Shawarma served with hummus dip", price: 199, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "shawarma" }
    ]
  },
  {
    id: "healthy",
    name: "Healthy",
    emoji: "🥗",
    items: [
      { id: "quinoa-salad", name: "Quinoa Salad", description: "Healthy quinoa with fresh veggies", price: 199, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "greek-yogurt-bowl", name: "Greek Yogurt Bowl", description: "Yogurt with fruits and nuts", price: 149, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "avocado-toast", name: "Avocado Toast", description: "Toasted bread with mashed avocado", price: 179, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "grilled-chicken-salad", name: "Grilled Chicken Salad", description: "Salad with grilled chicken and greens", price: 249, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "smoothie-bowl", name: "Smoothie Bowl", description: "Fruit smoothie topped with granola", price: 199, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "steamed-veggies", name: "Steamed Veggies", description: "Assorted steamed vegetables", price: 149, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "oats-porridge", name: "Oats Porridge", description: "Warm oats with milk and honey", price: 129, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "sprout-salad", name: "Sprout Salad", description: "Mixed sprouts with lemon dressing", price: 149, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "brown-rice-bowl", name: "Brown Rice Bowl", description: "Brown rice with veggies and sauce", price: 179, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" },
      { id: "fresh-fruit-salad", name: "Fresh Fruit Salad", description: "Seasonal fruits mixed salad", price: 129, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "healthy" }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    emoji: "🍰",
    items: [
      { id: "gulab-jamun", name: "Gulab Jamun", description: "Sweet fried dough balls in syrup", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "jalebi", name: "Jalebi", description: "Sweet spiral-shaped fried dessert", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "rasmalai", name: "Rasmalai", description: "Soft cheese balls in sweetened milk", price: 129, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "kheer", name: "Kheer", description: "Rice pudding with cardamom and nuts", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "brownie", name: "Brownie", description: "Chocolate fudge brownie", price: 149, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "ice-cream-sundae", name: "Ice Cream Sundae", description: "Ice cream with toppings and syrup", price: 179, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "tiramisu", name: "Tiramisu", description: "Coffee-flavored Italian dessert", price: 199, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "cheesecake", name: "Cheesecake", description: "Creamy cheesecake with biscuit base", price: 199, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "cupcake", name: "Cupcake", description: "Small cake with frosting", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" },
      { id: "donut", name: "Donut", description: "Fried dough with sugar coating", price: 89, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "desserts" }
    ]
  },
  {
    id: "juices",
    name: "Juices",
    emoji: "🧃",
    items: [
      { id: "orange-juice", name: "Orange Juice", description: "Freshly squeezed orange juice", price: 99, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "apple-juice", name: "Apple Juice", description: "Fresh apple juice", price: 99, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "watermelon-juice", name: "Watermelon Juice", description: "Refreshing watermelon juice", price: 99, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "pomegranate-juice", name: "Pomegranate Juice", description: "Sweet and tangy pomegranate juice", price: 119, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "pineapple-juice", name: "Pineapple Juice", description: "Tropical pineapple juice", price: 109, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "mango-juice", name: "Mango Juice", description: "Sweet mango juice", price: 119, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "lemon-juice", name: "Lemon Juice", description: "Tangy lemon juice", price: 89, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "sugarcane-juice", name: "Sugarcane Juice", description: "Fresh sugarcane juice", price: 99, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "grape-juice", name: "Grape Juice", description: "Sweet grape juice", price: 109, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" },
      { id: "coconut-water", name: "Coconut Water", description: "Refreshing natural coconut water", price: 99, image: "https://images.unsplash.com/photo-1505253210343-0a1a1a1a1a1a?w=500&h=300&fit=crop", category: "juices" }
    ]
  },
  {
    id: "fast-food",
    name: "Fast Food",
    emoji: "🍟",
    items: [
      { id: "french-fries", name: "French Fries", description: "Crispy golden fries", price: 99, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "chicken-nuggets", name: "Chicken Nuggets", description: "Crispy fried chicken bites", price: 149, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "hot-dog", name: "Hot Dog", description: "Sausage in a bun with toppings", price: 129, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "popcorn-chicken", name: "Popcorn Chicken", description: "Bite-sized fried chicken pieces", price: 149, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "onion-rings", name: "Onion Rings", description: "Fried battered onion rings", price: 99, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "nachos", name: "Nachos", description: "Tortilla chips with cheese and salsa", price: 149, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "garlic-bread", name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 99, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "cheese-balls", name: "Cheese Balls", description: "Fried balls filled with cheese", price: 129, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "veg-cutlet", name: "Veg Cutlet", description: "Spiced vegetable patties", price: 99, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" },
      { id: "spring-rolls", name: "Spring Rolls", description: "Crispy rolls with vegetable filling", price: 129, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", category: "fast-food" }
    ]
  },
  {
    id: "mithai",
    name: "Mithai (Indian Sweets)",
    emoji: "🍬",
    items: [
      { id: "rasgulla", name: "Rasgulla", description: "Soft spongy cheese balls in syrup", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "barfi", name: "Barfi", description: "Sweet milk fudge", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "ladoo", name: "Ladoo", description: "Round sweet balls made of flour and sugar", price: 89, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "peda", name: "Peda", description: "Sweetened condensed milk balls", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "soan-papdi", name: "Soan Papdi", description: "Flaky sweet made from gram flour", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "mysore-pak", name: "Mysore Pak", description: "Rich gram flour and ghee sweet", price: 109, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "kaju-katli", name: "Kaju Katli", description: "Cashew nut fudge", price: 129, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "malpua", name: "Malpua", description: "Sweet fried pancakes", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "sandesh", name: "Sandesh", description: "Bengali sweet made from paneer", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" },
      { id: "ghewar", name: "Ghewar", description: "Rajasthani sweet cake", price: 119, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "mithai" }
    ]
  },
  {
    id: "noodles",
    name: "Noodles",
    emoji: "🍜",
    items: [
      { id: "hakka-noodles", name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", price: 149, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "schezwan-noodles", name: "Schezwan Noodles", description: "Spicy Indo-Chinese noodles", price: 159, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "veg-chow-mein", name: "Veg Chow Mein", description: "Noodles with mixed vegetables", price: 149, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "chicken-chow-mein", name: "Chicken Chow Mein", description: "Noodles with chicken and vegetables", price: 179, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "singapore-noodles", name: "Singapore Noodles", description: "Spicy stir-fried noodles with curry flavor", price: 179, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "egg-noodles", name: "Egg Noodles", description: "Noodles with scrambled eggs", price: 149, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "garlic-noodles", name: "Garlic Noodles", description: "Noodles tossed with garlic and butter", price: 159, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "ramen", name: "Ramen", description: "Japanese noodle soup", price: 199, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "pad-thai-noodles", name: "Pad Thai Noodles", description: "Thai stir-fried noodles", price: 199, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" },
      { id: "udon-noodles", name: "Udon Noodles", description: "Thick Japanese wheat noodles", price: 199, image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop", category: "noodles" }
    ]
  },
  {
    id: "street-food",
    name: "Street Food",
    emoji: "🍢",
    items: [
      { id: "pani-puri", name: "Pani Puri", description: "Crispy hollow puris filled with spicy water", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "pav-bhaji", name: "Pav Bhaji", description: "Spiced vegetable mash with bread", price: 149, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "vada-pav", name: "Vada Pav", description: "Spicy potato fritter in bread", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "dabeli", name: "Dabeli", description: "Spiced potato filling in bun", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "kachori", name: "Kachori", description: "Spicy fried pastry", price: 89, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "samosa", name: "Samosa", description: "Fried pastry with spiced potato filling", price: 89, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "bhel-puri", name: "Bhel Puri", description: "Puffed rice with chutneys and spices", price: 99, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "chole-kulche", name: "Chole Kulche", description: "Spicy chickpeas with bread", price: 129, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "momos", name: "Momos", description: "Steamed dumplings with sauce", price: 149, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" },
      { id: "kathi-roll", name: "Kathi Roll", description: "Wrap filled with spiced meat or veggies", price: 179, image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop", category: "street-food" }
    ]
  },
  {
    id: "beverages",
    name: "Beverages",
    emoji: "☕",
    items: [
      { id: "hot-coffee", name: "Hot Coffee", description: "Freshly brewed hot coffee", price: 99, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "cold-coffee", name: "Cold Coffee", description: "Chilled coffee with ice cream", price: 129, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "masala-chai", name: "Masala Chai", description: "Spiced Indian tea", price: 79, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "iced-latte", name: "Iced Latte", description: "Cold espresso with milk", price: 129, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "cappuccino", name: "Cappuccino", description: "Espresso with steamed milk foam", price: 129, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "smoothie", name: "Smoothie", description: "Blended fruit drink", price: 149, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "mojito", name: "Mojito", description: "Refreshing mint and lime drink", price: 179, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "lemon-iced-tea", name: "Lemon Iced Tea", description: "Cold tea with lemon", price: 99, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "hot-chocolate", name: "Hot Chocolate", description: "Warm chocolate drink", price: 129, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" },
      { id: "milkshake", name: "Milkshake", description: "Creamy milkshake with flavors", price: 149, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop", category: "beverages" }
    ]
  }
];
