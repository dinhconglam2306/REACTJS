import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import InitItems from "./mocks/app";
function App() {
  const [items, setItems] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    let initItemsFromApp = JSON.parse(localStorage.getItem("task")) || [];
    setItems(initItemsFromStorage);
  }, []);

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
