import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSearch, actFilter } from "./../actions/index";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actList, (state, action) => {})
    .addCase(actSearch, (state, action) => {
      const strSearch = action.payload.trim().toLowerCase();
      if (!strSearch) {
        return initialState;
      }
      return initialState.filter((item) => {
        return item.name.toLowerCase().includes(strSearch);
      });
    })
    .addCase(actFilter, (state, action) => {
      const filterTypes = action.payload;
      if (filterTypes.length === 0) {
        return initialState;
      }
      return initialState.filter((item) => filterTypes.includes(item.type));
    });
});

export default productsReducer;

export const selectFilteredProducts = (state) => {
  const searchText = state.search.trim().toLowerCase();
  const filterTypes = state.filterCategory;

  let filteredProducts = state.productsReducer;

  if (searchText) {
    filteredProducts = filteredProducts.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
  }

  if (filterTypes.length > 0) {
    filteredProducts = filteredProducts.filter((item) =>
      filterTypes.includes(item.type)
    );
  }

  return filteredProducts;
};
