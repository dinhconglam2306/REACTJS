import { createReducer } from "@reduxjs/toolkit";
import products from "../mocks/app";

const initialState = products;

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetAction, () => initialState)
    // matcher can be defined outside as a type predicate function
    .addMatcher(isPendingAction, (state, action) => {
      state[action.meta.requestId] = "pending";
    });
});
