import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";

const Body = () => {
  return (
    <div>
      <section className="bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            <CategoryFilter></CategoryFilter>
            <ProductList></ProductList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
