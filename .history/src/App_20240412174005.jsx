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

  // console.log(itemInfo);

  const applySearchAndFilter = () => {
    let filteredItems = [...items];

    // Apply search
    if (strSearch.trim() !== "") {
      filteredItems = filter(filteredItems, (item) =>
        includes(item.name.toLowerCase(), strSearch.toLowerCase())
      );
    }

    // Apply filter
    if (filterBy.length) {
      filteredItems = filter(filteredItems, (item) =>
        filterBy.includes(item.type)
      );
    }

    return filteredItems;
  };

  const filteredItems = applySearchAndFilter();

  function handleSearh(value) {
    setStrSearch(value);
  }
  function handleFilter(filterValue) {
    setFilterBy(filterValue);
  }

  const handleAddToCart = (item) => {
    // Thêm mục vào giỏ hàng
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Header handleSearch={handleSearh} cartItems={cartItems}></Header>
      <Body
        items={filteredItems}
        handleFilter={handleFilter}
        onClickAdd={handleAddToCart}
      ></Body>
    </div>
  );
}

export default App;
