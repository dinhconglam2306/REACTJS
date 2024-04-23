import { combineReducers } from "redux";
import search from "./search";
import items from "./items";
import filter from "./filter";
import cart from "./cart";

const appReducers = combineReducers({
  search,
  items,
  filter,
  cart,
});

export default appReducers;
