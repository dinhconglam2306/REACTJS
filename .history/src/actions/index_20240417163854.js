import * as types from "./../constants/ActionTypes";

export const actSeach = (search) => {
  console.log(search);
  return {
    type: types.SEARCH,
    search: search,
  };
};
