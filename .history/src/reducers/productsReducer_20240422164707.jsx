import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList } from "./../actions/index";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(actList, (state, action) => {
    console.log(state);
    console.log(action);
  });
});

console.log(initialState);

export default productsReducer;
