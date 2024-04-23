import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import mocksData from "./mocks/app";
import { filter, includes } from "lodash";
function App() {
  const [items, setItems] = useState(mocksData);
  const [strSearch, setStrSearch] = useState("");
  // const [filterBy, setFilterBy] = useState("");

  mocksData = filter(items || [], (item) => {
    return includes(item.name.toLowerCase(), strSearch.toLowerCase());
  });

  function handleSearh(value) {
    setStrSearch(value);
  }

  return (
    <div>
      <Header handleSearch={handleSearh}></Header>
      <Body items={mocksData}></Body>
    </div>
  );
}

export default App;
