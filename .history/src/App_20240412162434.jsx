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
  const searchItems = (searchString, productList) => {
    return filter(productList, (item) =>
      includes(item.name.toLowerCase(), searchString.toLowerCase())
    );
  };

  // Filter function
  const filterItems = (productList, filterTypes) => {
    return filter(productList, (item) => includes(filterTypes, item.type));
  };

  const searchAndFilterItems = (searchString, filterTypes) => {
    // Search items
    const searchedItems = searchItems(searchString, items);

    // If there is no search string or filter types, return all items
    if (!searchString && !filterTypes.length) {
      return items;
    }

    // Filter searched items
    const filteredItems = filterItems(searchedItems, filterTypes);

    return filteredItems;
  };

  const filteredAndSearchedItems = searchAndFilterItems(strSearch, filterBy);

  // const filteredProductsList = filterItems(mocksData, filterBy);

  // let listItem;
  // if (filterBy.length) {
  //   listItem = [...filteredProductsList];
  // } else {
  //   listItem = [...searchItems];
  // }

  function handleSearh(value) {
    setStrSearch(value);
  }
  function handleFilter(filterValue) {
    setFilterBy(filterValue);
  }

  return (
    <div>
      <Header handleSearch={handleSearh}></Header>
      <Body items={filteredAndSearchedItems} handleFilter={handleFilter}></Body>
    </div>
  );
}

export default App;
