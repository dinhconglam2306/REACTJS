import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";

const Body = (props) => {
  let items = props.items;
  return (
    <div>
      <section className="bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            <CategoryFilter handleFilter={props.handleFilter}></CategoryFilter>
            <ProductList items={items}></ProductList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
