import { createReducer } from "@reduxjs/toolkit";
import products from "../mocks/app";

const initialState = products;

function isPendingAction(action) {
  return typeof action.type === "string" && action.type.endsWith("/pending");
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetAction, () => initialState)
    // matcher can be defined outside as a type predicate function
    .addMatcher(isPendingAction, (state, action) => {
      state[action.meta.requestId] = "pending";
    })
    .addMatcher(
      // matcher can be defined inline as a type predicate function
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state[action.meta.requestId] = "rejected";
      }
    )
    // matcher can just return boolean and the matcher can receive a generic argument
    .addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state[action.meta.requestId] = "fulfilled";
      }
    );
});
