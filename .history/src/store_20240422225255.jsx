import { configureStore } from "@reduxjs/toolkit";
import filteredProducts from "./reducers/productsReducer";

const store = configureStore({
  reducer: { filteredProducts },
});

export default store;
