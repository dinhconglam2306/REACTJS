import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [items, setItems] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");

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
