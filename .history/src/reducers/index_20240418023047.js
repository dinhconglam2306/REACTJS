import { combineReducers } from "redux";
import search from "./search";
import items from "./items";
import filter from "./filter";

const appReducers = combineReducers({
  search,
  items,
  filter,
});

export default appReducers;
