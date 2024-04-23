import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductsList from "./ProductsList";

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
            <ProductsList></ProductsList>
            {/* -------------------LIST-END----------------------- */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
