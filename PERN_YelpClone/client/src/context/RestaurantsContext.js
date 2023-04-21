import React, { useState, createContext } from "react";

// context provider to allow all components to access data without passing props/states around. 
// like a global variable. Imported in App.jsx
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
