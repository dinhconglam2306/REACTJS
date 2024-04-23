import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import InitItems from "./mocks/app";
import { filter } from "lodash";
function App() {
  const [items, setItems] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    setItems(InitItems);
  }, []);

  const itemsAfterFiltered = useEffect(() => {
    let _items = filter(InitItems || [], (item) => {
      return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });
    return _items;
  }, [items, strSearch]);

  function handleSearh(value) {
    setStrSearch(value);
  }

  return (
    <div>
      <Header handleSearch={handleSearh}></Header>
      <Body items={items}></Body>
    </div>
  );
}

export default App;
