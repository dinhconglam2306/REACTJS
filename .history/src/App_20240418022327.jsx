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

    const searchTerm = search.trim().toLowerCase(); // Chuyển đổi chuỗi tìm kiếm thành chữ thường

  // Sử dụng filter để lọc ra các mục phù hợp với điều kiện tìm kiếm
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return filteredItems;
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
      <Body
        items={filteredItems}
        handleFilter={handleFilter}
        onClickAdd={handleAddToCart}
      ></Body>
    </div>
  );
}

export default App;
