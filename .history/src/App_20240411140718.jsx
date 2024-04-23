import React from "react";
import Header from "./components/Header";
import ProductsCategory from "./components/ProductsCategory";
import ProductsList from "./components/ProductsList";
import products from "./mocks/app";
import Body from "./components/Body";

console.log(products);
function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
