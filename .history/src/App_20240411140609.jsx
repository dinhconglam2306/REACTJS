import React from "react";
import Header from "./components/Header";
import ProductsCategory from "./components/ProductsCategory";
import ProductsList from "./components/ProductsList";
import products from "./mocks/app";

console.log(products);
function App() {
  return (
    <div>
      <Header></Header>
      <section className="bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            {/* -------------------CATEGORY-START_----------------------- */}
            <ProductsCategory></ProductsCategory>
            {/* -------------------CATEGORY-END_----------------------- */}
            {/* -------------------LIST-START_----------------------- */}
            <ProductsList></ProductsList>
            {/* -------------------LIST-END----------------------- */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
