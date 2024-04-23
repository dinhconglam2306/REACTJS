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
    // Tìm chỉ mục của item trong giỏ hàng
    const existingItemIndex = cartItems.findIndex((el) => el.id === item.id);

    if (existingItemIndex !== -1) {
      // Nếu item đã tồn tại, tăng count lên 1
      cartItems[existingItemIndex].count += 1;
      setCartItems([...cartItems]);
    } else {
      // Nếu item chưa tồn tại, thêm mới vào giỏ hàng với count là 1
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
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
