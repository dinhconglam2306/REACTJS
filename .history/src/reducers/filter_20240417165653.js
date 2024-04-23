import * as types from "./../constants/ActionTypes";
let defaultState = "";

const search = (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return action.search;
    default:
      return state;
  }
};
export default search;
