import * as types from "../constants/ActionTypes";
import products from "./../mocks/app";
let defaultState = products;

const search = (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return action.search;
    default:
      return state;
  }
};
export default search;
