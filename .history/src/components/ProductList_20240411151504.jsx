import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  let items = props.items;
  let elmItem = items.map((item, index) => {
    return <ProductItem item={item} key={index}></ProductItem>;
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
