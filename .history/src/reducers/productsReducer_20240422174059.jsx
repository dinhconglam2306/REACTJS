import { createReducer } from "@reduxjs/toolkit";
import products from "./../mocks/app";
import { actList, actSeach } from "./../actions/index";

const initialState = products;
const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actList, (state, action) => {})
    .addCase(actSeach, (state, action) => {
      const strSearch = action.payload.trim().toLowerCase();
      if (!strSearch) {
        // Nếu từ khóa tìm kiếm trống, trả về trạng thái ban đầu
        return initialState;
      }
      return state.filter((item) =>
        item.name.toLowerCase().includes(strSearch)
      );
    });
});

export default productsReducer;
