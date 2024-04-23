import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import items from "../mocks/app";

function App() {
  return (
    <div>
      <Header></Header>
      <Body items={items}></Body>
    </div>
  );
}

export default App;
