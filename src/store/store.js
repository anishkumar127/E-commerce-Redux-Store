import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice";
import productReducer from "./productSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: cardReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
