import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSearch, actFilter } from "./../actions/index";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actList, (state, action) => {})
    .addMatcher(
      (action) =>
        action.type === actSearch.type || action.type === actFilter.type,
      (state, action) => {
        console.log(action);
        if()
        // const searchText = action.payload
        //   ? action.payload.trim().toLowerCase()
        //   : "";
        // const filterTypes = action.payload.filterTypes || [];

        // let filteredProducts = initialState;

        // if (searchText) {
        //   filteredProducts = filteredProducts.filter((item) =>
        //     item.name.toLowerCase().includes(searchText)
        //   );
        // }

        // if (filterTypes.length > 0) {
        //   filteredProducts = filteredProducts.filter((item) =>
        //     filterTypes.includes(item.type)
        //   );
        // }

        // return filteredProducts;
      }
    );
});

export default productsReducer;
