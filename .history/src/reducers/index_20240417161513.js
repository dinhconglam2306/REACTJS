import { combineReducers } from "redux";
import search from "./search";

const appReducers = combineReducers({
  search,
});
console.log(search);

export default appReducers;
