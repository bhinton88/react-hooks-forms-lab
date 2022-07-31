import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function onSearchChange(event) {
    setSearchTerm(event.target.value)
    // set the search term here
  }

  function onItemFormSubmit(formData) {
    console.log(formData)
    setItems([...items, formData])
  }

  return (
    <div className="ShoppingList">
      <ItemForm
      items={items}
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={onSearchChange} 
      search={searchTerm}
      />
      <ul className="Items">
        {itemsToDisplay.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
