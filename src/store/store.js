import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./cartSlice";
import productReducer from "./productSlice";
const store = configureStore({
  reducer: {
    cart: cardReducer,
    product: productReducer,
  },
});

export default store;
