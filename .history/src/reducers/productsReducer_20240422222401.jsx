import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSeach, actFilter } from "./../actions/index";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actList, (state, action) => {})
    .addCase(actSeach, (state, action) => {
      const strSearch = action.payload.trim().toLowerCase();
      if (!strSearch) {
        return initialState;
      }
      return initialState.filter((item) => {
        return item.name.toLowerCase().includes(strSearch);
      });
    })
    .addCase(actFilter, (state, action) => {
      console.log(action);
    });
});

export default productsReducer;
