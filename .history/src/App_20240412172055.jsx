import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import mocksData from "./mocks/app";
import { filter, includes } from "lodash";
function App() {
  const [items, setItems] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [filterBy, setFilterBy] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    setItems(mocksData);
  }, []);

  useEffect(() => {
    handleFilter(filterBy);
  }, [filterBy]);

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

  function onClickAdd(item) {
    setItemInfo(item);
    console.log(itemInfo);
  }

  return (
    <div>
      <Header handleSearch={handleSearh}></Header>
      <Body
        items={filteredItems}
        handleFilter={handleFilter}
        onClickAdd={onClickAdd}
      ></Body>
    </div>
  );
}

export default App;
