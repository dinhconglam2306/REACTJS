import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import InitItems from "./mocks/app";
import { filter, includes } from "lodash";
function App() {
  const [items, setItems] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    setItems(InitItems);
  }, []);

  // const itemsAfterSearch = filter(items || [], (item) => {
  //   console.log("Filter : " + strSearch);
  //   // return includes(item.name.toLowerCase(), strSearch.toLowerCase());
  //   return includes(item.name.toLowerCase(), strSearch.toLowerCase());
  // });

  function handleSearh(value) {
    setStrSearch(value);
  }

  return (
    <div>
      <Header handleSearch={handleSearh}></Header>
      <Body items={itemsAitemsterSearch}></Body>
    </div>
  );
}

export default App;
