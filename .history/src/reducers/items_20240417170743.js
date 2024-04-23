import * as types from "../constants/ActionTypes";
import products from "./../mocks/app";
let defaultState = products;

const search = (state = defaultState, action) => {
  switch (action.type) {
    case "ITEMS":
      return [...state];

    default:
      return state;
  }
};
export default search;
