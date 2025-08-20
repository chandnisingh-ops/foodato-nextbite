export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisine: string[];
  city: string;
  address: string;
  priceRange: string;
  isOpen: boolean;
  menuItems: string[]; // Array of menu item IDs
}

export const restaurants: Restaurant[] = [
  {
    id: "pizza-palace-mumbai",
    name: "Pizza Palace",
    description: "Authentic Italian pizzas with fresh ingredients",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
    rating: 4.5,
    deliveryTime: "25-35 mins",
    cuisine: ["Italian", "Pizza"],
    city: "Mumbai",
    address: "Bandra West, Mumbai",
    priceRange: "₹₹",
    isOpen: true,
    menuItems: ["margherita", "pepperoni", "bbq-chicken", "veggie-supreme", "four-cheese", "paneer-tikka", "hawaiian"]
  },
  {
    id: "burger-house-delhi",
    name: "Burger House",
    description: "Juicy burgers and crispy fries",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
    rating: 4.2,
    deliveryTime: "20-30 mins",
    cuisine: ["American", "Fast Food"],
    city: "Delhi",
    address: "Connaught Place, Delhi",
    priceRange: "₹₹",
    isOpen: true,
    menuItems: ["classic-chicken", "veggie-burger", "cheese-burst", "double-patty", "crispy-fish", "spicy-paneer"]
  },
  {
    id: "biryani-express-hyderabad",
    name: "Biryani Express",
    description: "Authentic Hyderabadi biryani and traditional dishes",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop",
    rating: 4.7,
    deliveryTime: "30-45 mins",
    cuisine: ["Indian", "Biryani"],
    city: "Hyderabad",
    address: "Banjara Hills, Hyderabad",
    priceRange: "₹₹₹",
    isOpen: true,
    menuItems: ["hyderabadi-chicken", "lucknowi-mutton", "veg-dum", "chicken-tikka-biryani", "keema-biryani"]
  },
  {
    id: "south-indian-corner-bangalore",
    name: "South Indian Corner",
    description: "Traditional South Indian breakfast and meals",
    image: "https://images.unsplash.com/photo-1543352634-0a1a1a1a1a1a?w=500&h=300&fit=crop",
    rating: 4.4,
    deliveryTime: "15-25 mins",
    cuisine: ["South Indian", "Vegetarian"],
    city: "Bangalore",
    address: "Koramangala, Bangalore",
    priceRange: "₹",
    isOpen: true,
    menuItems: ["idli-sambar", "masala-dosa", "medu-vada", "rava-dosa", "uttapam", "plain-dosa"]
  },
  {
    id: "street-food-junction-pune",
    name: "Street Food Junction",
    description: "Authentic Indian street food experience",
    image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop",
    rating: 4.3,
    deliveryTime: "20-30 mins",
    cuisine: ["Street Food", "Indian"],
    city: "Pune",
    address: "FC Road, Pune",
    priceRange: "₹",
    isOpen: true,
    menuItems: ["pani-puri", "pav-bhaji", "vada-pav", "dabeli", "bhel-puri", "samosa"]
  },
  {
    id: "healthy-bites-chennai",
    name: "Healthy Bites",
    description: "Nutritious and delicious healthy food options",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
    rating: 4.1,
    deliveryTime: "25-35 mins",
    cuisine: ["Healthy", "Salads"],
    city: "Chennai",
    address: "T. Nagar, Chennai",
    priceRange: "₹₹",
    isOpen: true,
    menuItems: ["quinoa-salad", "greek-yogurt-bowl", "avocado-toast", "grilled-chicken-salad", "smoothie-bowl"]
  },
  {
    id: "dessert-paradise-kolkata",
    name: "Dessert Paradise",
    description: "Sweet treats and traditional Indian desserts",
    image: "https://images.unsplash.com/photo-1542827634-1e7a0a1a1a1a?w=500&h=300&fit=crop",
    rating: 4.6,
    deliveryTime: "20-30 mins",
    cuisine: ["Desserts", "Sweets"],
    city: "Kolkata",
    address: "Park Street, Kolkata",
    priceRange: "₹₹",
    isOpen: true,
    menuItems: ["rasgulla", "sandesh", "gulab-jamun", "rasmalai", "chocolate-truffle", "red-velvet"]
  },
  {
    id: "noodle-house-ahmedabad",
    name: "Noodle House",
    description: "Asian noodles and Indo-Chinese favorites",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29f?w=500&h=300&fit=crop",
    rating: 4.0,
    deliveryTime: "25-35 mins",
    cuisine: ["Chinese", "Asian"],
    city: "Ahmedabad",
    address: "Satellite, Ahmedabad",
    priceRange: "₹₹",
    isOpen: true,
    menuItems: ["hakka-noodles", "schezwan-noodles", "veg-chow-mein", "chicken-chow-mein", "singapore-noodles"]
  },
  {
    id: "cafe-central-jaipur",
    name: "Cafe Central",
    description: "Coffee, beverages and light snacks",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop",
    rating: 4.2,
    deliveryTime: "15-25 mins",
    cuisine: ["Cafe", "Beverages"],
    city: "Jaipur",
    address: "Pink City, Jaipur",
    priceRange: "₹₹",
    isOpen: true,
    menuItems: ["hot-coffee", "cold-coffee", "masala-chai", "cappuccino", "smoothie", "sandwich"]
  },
  {
    id: "thali-express-surat",
    name: "Thali Express",
    description: "Complete Indian meals with variety of dishes",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
    rating: 4.5,
    deliveryTime: "30-40 mins",
    cuisine: ["Indian", "Thali"],
    city: "Surat",
    address: "Adajan, Surat",
    priceRange: "₹₹₹",
    isOpen: true,
    menuItems: ["gujarati-thali", "rajasthani-thali", "punjabi-thali", "south-indian-thali", "veg-north-indian-thali"]
  }
];

export const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", 
  "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", 
  "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", 
  "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", 
  "Varanasi", "Srinagar", "Dhanbad", "Jodhpur", "Amritsar", "Raipur", "Allahabad", 
  "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Madurai", "Guwahati", "Chandigarh", 
  "Hubli-Dharwad", "Amroha", "Moradabad", "Gurgaon", "Aligarh", "Solapur", "Ranchi", 
  "Jalandhar", "Tiruchirappalli", "Bhubaneswar", "Salem", "Warangal", "Mira-Bhayandar", 
  "Thiruvananthapuram", "Bhiwandi", "Saharanpur", "Gorakhpur", "Guntur", "Bikaner", 
  "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", "Kochi", 
  "Nellore", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", "Rourkela", "Nanded", 
  "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", 
  "Jhansi", "Ulhasnagar", "Jammu", "Sangli-Miraj & Kupwad", "Mangalore", "Erode", 
  "Belgaum", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Jalgaon", "Udaipur", 
  "Maheshtala", "Davanagere", "Kozhikode", "Kurnool", "Rajpur Sonarpur", "Rajahmundry", 
  "Bokaro", "South Dumdum", "Bellary", "Patiala", "Gopalpur", "Agartala", "Bhagalpur", 
  "Muzaffarnagar", "Bhatpara", "Panihati", "Latur", "Dhule", "Rohtak", "Korba", 
  "Bhilwara", "Berhampur", "Muzaffarpur", "Ahmednagar", "Mathura", "Kollam", "Avadi", 
  "Kadapa", "Kamarhati", "Sambalpur", "Bilaspur", "Shahjahanpur", "Satara", "Bijapur", 
  "Rampur", "Shivamogga", "Chandrapur", "Junagadh", "Thrissur", "Alwar", "Bardhaman", 
  "Kulti", "Kakinada", "Nizamabad", "Parbhani", "Tumkur", "Khammam", "Ozhukarai", 
  "Bihar Sharif", "Panipat", "Darbhanga", "Bally", "Aizawl", "Dewas", "Ichalkaranji"
];
