import React from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import { filter } from "lodash";

const ProductList = ({ items, search, filterCategory }) => {
  const applySearchAndFilter = () => {
    const searchText = search.trim().toLowerCase();
    let filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );

    if (filterCategory > 0) {
      filteredItems = filteredItems.filter((item) =>
        filterCategory.includes(item.type)
      );
    }

    return filteredItems;
  };

  const filteredItems = applySearchAndFilter();

  console.log(filterCategory, filteredItems);

  let elmNULL = <p>Không có sản phẩm nào</p>;
  let elmItem = filteredItems.map((item, index) => {
    return (
      <ProductItem
        item={item}
        key={index}
        // onClickAdd={props.onClickAdd}
      ></ProductItem>
    );
  });
  return (
    <div className="col-sm-9">
      {filteredItems.length === 0 && elmNULL}
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
    filterCategory: state.filter,
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
