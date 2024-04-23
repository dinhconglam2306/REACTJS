import products from "./../mocks/app";

const initialState = products;
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    // Do something here based on the different types of actions
    default:
      return state;
  }
}
