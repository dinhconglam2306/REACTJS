import * as types from "./../constants/ActionTypes";

export const actSeach = (search) => {
  return {
    type: types.SEARCH,
    search: search,
  };
};

export const actFilter = (filter) => {
  return {
    type: types.FILTER,
    filter: filter,
  };
};
export const actAddItem = (item) => {
  return {
    type: types.FILTER,
    item: item,
  };
};
