import * as types from "./../constants/ActionTypes";
let defaultState = "ABCD";

const search = (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH:
      console.log(action);
    default:
      return state;
  }
};
export default search;
