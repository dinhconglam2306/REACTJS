import * as types from "../constants/ActionTypes";
let defaultState = [];

const cart = (state = defaultState, action) => {
  console.log(action.item);
  switch (action.type) {
    case types.ADD_ITEM:
      return action.item;
    default:
      return state;
  }
};
export default cart;
