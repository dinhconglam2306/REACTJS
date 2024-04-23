import React from "react";
import ProductItem from "./ProductItem";
import items from "../mocks/app";

const ProductList = () => {
  console.log(items);
  return (
    <div className="col-sm-9">
      <div className="row" id="productList">
        <ProductItem></ProductItem>
      </div>
    </div>
  );
};

export default ProductList;
