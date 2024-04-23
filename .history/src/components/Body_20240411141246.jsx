import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";

const Body = () => {
  return (
    <div>
      <section className="bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            {/* -------------------CATEGORY-START_----------------------- */}
            <CategoryFilter></CategoryFilter>
            {/* -------------------CATEGORY-END_----------------------- */}
            {/* -------------------LIST-START_----------------------- */}
            <ProductList></ProductList>
            {/* -------------------LIST-END----------------------- */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
