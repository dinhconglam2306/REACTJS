import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSearch, actFilter } from "./../actions/index";
import * as types from "./../constants/ActionTypes";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actList, (state, action) => {})
    .addMatcher(
      (action) => [actSearch.type, actFilter.type].includes(action.type),
      (state, action) => {
        let filteredProducts = initialState.slice(); // Tạo bản sao của danh sách sản phẩm ban đầu

        // Xử lý tìm kiếm
        if (action.type === actSearch.type) {
          const searchText = action.payload.trim().toLowerCase();
          if (searchText) {
            filteredProducts = filteredProducts.filter((item) =>
              item.name.toLowerCase().includes(searchText)
            );
          }
        }
        console.log(action.type.string());
        console.log(actFilter.type.string());
        // Xử lý bộ lọc
        if (action.type === actFilter.type) {
          const filterTypes = action.payload.filterTypes || [];
          console.log(filterTypes);
          if (filterTypes.length > 0) {
            filteredProducts = filteredProducts.filter((item) =>
              filterTypes.includes(item.type)
            );
          }
        }

        return filteredProducts;
      }
    );
});

export default productsReducer;
