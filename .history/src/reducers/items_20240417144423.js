import products from "./../mocks/app";

let initItemsFromStorage = products;

const items = (state = initItemsFromStorage, action) => {
  switch (action.type) {
    case types.DELETE_ITEM:
      return state;
    default:
      return state;
  }
};
export default items;
