import React from "react";
import ProductsCategory from "./ProductsCategory";

const Body = () => {
  return (
    <div>
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
};

export default Body;
