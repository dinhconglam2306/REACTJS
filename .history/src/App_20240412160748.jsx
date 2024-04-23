import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import mocksData from "./mocks/app";
import { filter, includes } from "lodash";
function App() {
  const [items, setItems] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [filterBy, setFilterBy] = useState([]);

  useEffect(() => {
    setItems(mocksData);
  }, []);

  useEffect(() => {
    handleFilter(filterBy);
  }, [filterBy]);

  const itemsAfterSearch = filter(items || [], (item) => {
    return includes(item.name.toLowerCase(), strSearch.toLowerCase());
  });

  function handleSearh(value) {
    setStrSearch(value);
  }
  function handleFilter(filterValue) {
    setFilterBy(filterValue);
  }

  console.log("Filter by :" + filterBy);

  const filteredProducts = (products, types) => {
    return filter(products, (product) => includes(types, product.type));
  };
  // Ví dụ sử dụng
  const filteredProductsList = filteredProducts(mocksData, filterBy);

  let listItem;
  if (filterBy.length > 0) {
    listItem = [...filteredProductsList];
  } else {
    listItem = [...itemsAfterSearch];
  }

  return (
    <div>
      <Header handleSearch={handleSearh}></Header>
      <Body items={listItem} handleFilter={handleFilter}></Body>
    </div>
  );
}

export default App;
