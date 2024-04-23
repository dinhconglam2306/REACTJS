import products from "./../mocks/app";
import { actList } from "./../actions/index";

console.log(actList());
console.log(actList("List"));

const initialState = products;
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
