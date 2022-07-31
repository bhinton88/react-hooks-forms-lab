import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
 
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
      isDarkMode={isDarkMode} 
      onDarkModeClick={handleDarkModeClick} 
      />
      <ShoppingList 
      items={items} 
      setItems={setItems}
      />
    </div>
  );
}

export default App;

// when a user types in a string in our filter field, we want the app to begin to filter our list for only words that match the input text

// items is currently set at the items provided in our data folder, so we need to set an event listener on the field where the filter data will be input, then adjust our items array of objects so that we are only showing items that match our input string 
