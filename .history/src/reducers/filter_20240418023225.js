import * as types from "../constants/ActionTypes";
let defaultState = ["abc"];

const filter = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case types.FILTER:
      return action.filter;
    default:
      return state;
  }
};
export default filter;
