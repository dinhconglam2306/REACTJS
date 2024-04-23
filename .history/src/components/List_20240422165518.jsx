import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const List = () => {
  const products = useSelector((state) => state.productsReducer);

  console.log(products);
  return (
    <div className="col-sm-9">
      <div className="row" id="productList">
        <Item></Item>
      </div>
    </div>
  );
};

export default List;
