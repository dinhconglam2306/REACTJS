import * as types from "../constants/ActionTypes";
let defaultState = {};

const cart = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      const newItem = action.item;
      const newCount = state[newItem.id] ? state[newItem.id].count + 1 : 1;
      return {
        ...state,
        [newItem.id]: {
          ...newItem,
          count: newCount,
        },
      };
      console.log(state);
    default:
      return state;
  }
};
export default cart;
