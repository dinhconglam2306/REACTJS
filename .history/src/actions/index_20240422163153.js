import { createAction } from "@reduxjs/toolkit";
import * as types from "./../constants/ActionTypes";

export const List = createAction(types.LIST);

// export const actSeach = (search) => {
//   return {
//     type: types.SEARCH,
//     search: search,
//   };
// };

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
