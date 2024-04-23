import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSearch, actFilter } from "./../actions/index";
import * as types from "./../constants/ActionTypes";

const initialState = {
  products: products,
  searchText: "",
};

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actList, (state, action) => {})
    .addMatcher(
      (action) => [actSearch.type, actFilter.type].includes(action.type),
      (state, action) => {
        let filteredProducts = state.products.slice(); // Tạo bản sao của danh sách sản phẩm ban đầu

        // Xử lý tìm kiếm
        if (action.type === actSearch.type) {
          const searchText = action.payload.trim().toLowerCase();
          return {
            ...state,
            products: filteredProducts.filter((item) =>
              item.name.toLowerCase().includes(searchText)
            ),
            searchText: searchText,
          };
        }

        // Xử lý bộ lọc
        if (action.type === actFilter.type) {
          const filterTypes = action.payload || [];
          return {
            ...state,
            products: filteredProducts.filter((item) =>
              filterTypes.includes(item.type)
            ),
          };
        }

        return state;
      }
    );
});

export default productsReducer;
