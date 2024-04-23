import React from "react";
import ProductItem from "./ProductItem";
import items from "../mocks/app";

const ProductList = () => {
  console.log(items);
  let elmItem = items.map((item, index) => {
    <ProductItem item={item} key={index}></ProductItem>;
  });
  return (
    <div className="col-sm-9">
      <div className="row" id="productList">
        {elmItem}
      </div>
    </div>
  );
};

export default ProductList;
