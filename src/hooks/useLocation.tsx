import { createContext, useContext, useState, ReactNode } from "react";
import { restaurants } from "@/data/restaurantData";

interface LocationContextType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  getFilteredRestaurants: () => typeof restaurants;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCity, setSelectedCity] = useState<string>("Mumbai"); // Default city

  const getFilteredRestaurants = () => {
    if (!selectedCity) return restaurants;
    return restaurants.filter(restaurant => restaurant.city === selectedCity);
  };

  return (
    <LocationContext.Provider value={{
      selectedCity,
      setSelectedCity,
      getFilteredRestaurants
    }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
