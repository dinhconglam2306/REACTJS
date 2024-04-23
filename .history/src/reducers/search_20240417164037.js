import * as types from "./../constants/ActionTypes";
let defaultState = "";

const search = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case types.SEARCH:
      console.log(action.search);
      return action.search;
    default:
      return state;
  }
};
export default search;
