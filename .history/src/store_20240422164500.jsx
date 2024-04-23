import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";

const store = configureStore({
  reducer: { productsReducer },
});

console.log(store);

export default store;
