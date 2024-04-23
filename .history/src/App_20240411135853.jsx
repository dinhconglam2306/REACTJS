import React from "react";
import ProductsHeader from "./components/ProductsHeader";
import ProductsCategory from "./components/ProductsCategory";
import ProductsList from "./components/ProductsList";
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
            <ProductsList></ProductsList>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
