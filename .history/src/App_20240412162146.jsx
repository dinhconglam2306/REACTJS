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

  // Search funtion
  const searchItems = filter(items || [], (item) => {
    return includes(item.name.toLowerCase(), strSearch.toLowerCase());
  });

  // Filter function
  const filterItems = (products, types) => {
    return filter(products, (product) => includes(types, product.type));
  };

  // const searchAndFilterItems = (searchString, filterTypes) => {
  //   // Search items
  //   const searchedItems = searchItems(searchString, items);

  //   // If there is no search string or filter types, return all items
  //   if (!searchString && !filterTypes.length) {
  //     return items;
  //   }

  //   // Filter searched items
  //   const filteredItems = filterItems(searchedItems, filterTypes);

  //   return filteredItems;
  // };

  const filteredProductsList = filterItems(mocksData, filterBy);

  let listItem;
  if (filterBy.length) {
    listItem = [...filteredProductsList];
  } else {
    listItem = [...searchItems];
  }

  function handleSearh(value) {
    setStrSearch(value);
  }
  function handleFilter(filterValue) {
    setFilterBy(filterValue);
  }

  return (
    <div>
      <Header handleSearch={handleSearh}></Header>
      <Body items={listItem} handleFilter={handleFilter}></Body>
    </div>
  );
}

export default App;
