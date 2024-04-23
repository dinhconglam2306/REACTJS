import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";

const Body = (props) => {
  let items = props.items;

  function onClickAdd(item) {
    console.log(item);
  }
  return (
    <div>
      <section className="bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            <CategoryFilter handleFilter={props.handleFilter}></CategoryFilter>
            <ProductList items={items} onClickAdd={onClickAdd}></ProductList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
