import * as types from "./../constants/ActionTypes";

export const actSeach = (search) => {
  return {
    type: types.SEARCH,
    search: search,
  };
};
