import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import mocksData from "./mocks/app";
import { filter, includes } from "lodash";
function App() {
  const [items, setItems] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [filterBy, setFilterBy] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setItems(mocksData);
  }, []);

  useEffect(() => {
    handleFilter(filterBy);
  }, [filterBy]);

  const applySearchAndFilter = () => {
    let filteredItems = [...items];

    // Apply search
    // if (strSearch.trim() !== "") {
    //   filteredItems = filter(filteredItems, (item) =>
    //     includes(item.name.toLowerCase(), strSearch.toLowerCase())
    //   );
    // }

    // Apply filter
    if (filterBy.length) {
      filteredItems = filter(filteredItems, (item) =>
        filterBy.includes(item.type)
      );
    }

    return filteredItems;
  };

  function handleSearh(value) {
    setStrSearch(value);
  }
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
      <Header handleSearch={handleSearh} cartItems={cartItems}></Header>
      <Body handleFilter={handleFilter} onClickAdd={handleAddToCart}></Body>
    </div>
  );
}

export default App;
