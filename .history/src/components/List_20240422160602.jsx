import React from "react";
import Item from "./Item";

const List = () => {
  return (
    <div className="col-sm-9">
      <div className="row" id="productList">
        <Item></Item>
      </div>
    </div>
  );
};

export default List;
