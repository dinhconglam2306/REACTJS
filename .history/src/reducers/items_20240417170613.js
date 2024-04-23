import * as types from "../constants/ActionTypes";
import products from "./../mocks/app";
let defaultState = products;

const search = (state = defaultState, action) => {
  switch (action.type) {
    case types.SUBMIT_FORM:
      if (action.item.id !== "") {
        state = reject(state, { id: action.item.id });
        id = action.item.id;
      } else {
        id = uuidv4();
      }
      let item = action.item;
      state.push({
        id: id,
        name: item.name,
        level: +item.level,
      });

      localStorage.setItem(
        config.ITEMS_FROM_LOCAL_STOGRE,
        JSON.stringify(state)
      );
      return [...state];

    default:
      return state;
  }
};
export default search;
