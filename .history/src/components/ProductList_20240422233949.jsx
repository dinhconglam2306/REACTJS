import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "./../reducers/productsReducer";

const ProductList = () => {
  const products = useSelector(selectFilteredProducts);

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

export default ProductList;
