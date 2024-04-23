import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  return (
    <div className="col-sm-9">
      <div className="row" id="productList">
        <ProductItem></ProductItem>
      </div>
    </div>
  );
};

export default ProductsList;
