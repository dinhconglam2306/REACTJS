import * as types from "../constants/ActionTypes";
let defaultState = ["ABCD"];

const filter = (state = defaultState, action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter;
    default:
      return state;
  }
};
export default filter;
