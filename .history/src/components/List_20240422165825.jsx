import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const List = () => {
  const products = useSelector((state) => state.productsReducer);

  console.log(products);
  return (
    <div className="col-sm-9">
      <div className="row" id="productList">
        {products.map((product) => (
          <ProductItem key={product.id} product={product}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default List;
