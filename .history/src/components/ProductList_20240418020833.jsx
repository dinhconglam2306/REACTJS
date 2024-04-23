import React from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = ({ items, search }) => {
  let elmNULL = <p>Không có sản phẩm nào</p>;
  let elmItem = items.map((item, index) => {
    return (
      <ProductItem
        item={item}
        key={index}
        onClickAdd={props.onClickAdd}
      ></ProductItem>
    );
  });
  return (
    <div className="col-sm-9">
      {items.length === 0 && elmNULL}
      <div className="row" id="productList">
        {elmItem}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    search: state.search,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     goSearch: (search) => {
//       dispatch(actSeach(search));
//     },
//   };
// };

const ConnectedItems = connect(mapStateToProps, null)(ProductList);
export default ConnectedItems;
