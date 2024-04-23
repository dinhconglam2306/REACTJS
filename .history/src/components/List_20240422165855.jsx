import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const List = () => {
  const products = useSelector((state) => state.productsReducer);

  return (
    <div className="col-sm-9">
      <div className="row" id="productList">
        {products.map((item) => (
          <ProductItem key={item.id} item={item}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default List;
