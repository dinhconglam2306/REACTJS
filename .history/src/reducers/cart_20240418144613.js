import * as types from "../constants/ActionTypes";
let defaultState = [];

const cart = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      console.log(action.item);
      return action.item;
    default:
      return state;
  }
};
export default cart;
