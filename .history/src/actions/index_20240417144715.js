import * as types from "./../constants/ActionTypes";

export const actSeach = (search) => {
  return {
    type: types.CHANGE_SEARCH,
    search: search,
  };
};
