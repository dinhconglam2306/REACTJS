import { combineReducers } from "redux";
import search from "./search";
import items from "./items";

const appReducers = combineReducers({
  search,
  items,
});

export default appReducers;
