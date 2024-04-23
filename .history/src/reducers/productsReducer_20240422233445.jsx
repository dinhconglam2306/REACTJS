import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSearch, actFilter } from "./../actions/index";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actList, (state, action) => {})
    .addCase(actSearch, (state, action) => {
      const strSearch = action.payload.trim().toLowerCase();
      if (!strSearch) {
        return initialState;
      }
      return initialState.filter((item) => {
        return item.name.toLowerCase().includes(strSearch);
      });
    })
    .addCase(actFilter, (state, action) => {
      const filterTypes = action.payload;
      console.log(filterTypes);
      console.log(state);
    });
});

export default productsReducer;
