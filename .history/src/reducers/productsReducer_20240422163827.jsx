import products from "./../mocks/app";
import { actList } from "./../actions/index";

console.log(actList);

const initialState = products;
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
