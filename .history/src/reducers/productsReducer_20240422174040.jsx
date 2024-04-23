import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSeach } from "./../actions/index";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actList, (state, action) => {})
    .addCase(actSeach, (state, action) => {
      const applySearchAndFilter = () => {
        const searchText = search.trim().toLowerCase();
        let filteredItems = items.filter((item) =>
          item.name.toLowerCase().includes(searchText)
        );
        return filteredItems;
      };
    });
});

export default productsReducer;
