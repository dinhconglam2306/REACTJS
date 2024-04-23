import React from "react";
import FilterCategory from "./FilterCategory";
import ProductList from "./ProductList";

const Body = () => {
  return (
    <section className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <FilterCategory></FilterCategory>
          <ProductList></ProductList>
        </div>
      </div>
    </section>
  );
};

export default Body;
