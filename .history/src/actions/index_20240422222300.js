import { createAction } from "@reduxjs/toolkit";
import * as types from "./../constants/ActionTypes";

export const actList = createAction(types.LIST);
export const actSeach = createAction(types.SEARCH, (searchStr) => ({
  payload: searchStr,
}));
export const actFilter = createAction(types.FILTER, (filter) => ({
  payload: filter,
}));

// export const actFilter = (filter) => {
//   return {
//     type: types.FILTER,
//     filter: filter,
//   };
// };
// export const actAddItem = (item) => {
//   return {
//     type: types.ADD_ITEM,
//     item: item,
//   };
// };
// export const actSeach = (search) => {
//   return {
//     type: types.SEARCH,
//     search: search,
//   };
// };
