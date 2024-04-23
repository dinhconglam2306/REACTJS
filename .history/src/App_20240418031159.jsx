import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
function App() {
  const [items, setItems] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function handleFilter(filterValue) {
    setFilterBy(filterValue);
  }

  const handleAddToCart = (item) => {
    const existingItem = cartItems.findIndex(
      (checkItem) => checkItem.id === item.id
    );
    if (existingItem !== -1) {
      cartItems[existingItem].count += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
  };

  return (
    <div>
      <Header cartItems={cartItems}></Header>
      <Body handleFilter={handleFilter} onClickAdd={handleAddToCart}></Body>
    </div>
  );
}

export default App;
