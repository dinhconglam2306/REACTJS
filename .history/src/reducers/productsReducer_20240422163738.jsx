import products from "./../mocks/app";
import * from "./../actions/index"

const initialState = products;
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
