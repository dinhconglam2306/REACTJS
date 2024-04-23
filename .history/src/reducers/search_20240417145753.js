import * as types from "./../constants/ActionTypes";
let defaultState = "ABCD";

const search = (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return action.search;
    default:
      return state;
  }
};
export default search;
