import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const items = props.items;
  let elmNULL = <p>Không có sản phẩm nào</p>;
  let elmItem = items.map((item, index) => {
    return (
      <ProductItem
        item={item}
        key={index}
        onClickAdd={props.onClickAdd}
      ></ProductItem>
    );
    console.log(elmItem);
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
