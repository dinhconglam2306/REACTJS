import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSeach } from "./../actions/index";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(actList, (state, action) => {});
  // .addCase(actSeach, (state, action) => {
  //   console.log(action);
  // });
});

export default productsReducer;
