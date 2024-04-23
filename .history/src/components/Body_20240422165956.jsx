import React from "react";
import Category from "./Category";
import ProductList from "./ProductList";

const Body = () => {
  return (
    <section className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <Category></Category>
          <ProductList></ProductList>
        </div>
      </div>
    </section>
  );
};

export default Body;
