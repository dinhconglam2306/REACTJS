import React from "react";
import ProductsHeader from "./components/ProductsHeader";
import ProductsCategory from "./components/ProductsCategory";
import ProductsList from "./components/ProductsList";
import products from "./mocks/app";

console.log(products);
function App() {
  return (
    <div>
      {/* -------------------HEADER-START_----------------------- */}
      <ProductsHeader></ProductsHeader>
      {/* -------------------HEADER-END----------------------- */}
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
