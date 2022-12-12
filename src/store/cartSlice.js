import { createSlice } from "@reduxjs/toolkit";
// const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    quantity: 0,
  },
  reducers: {
    add(state, action) {
      // state.push(action.payload); old way its giving the unique id issue.
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.data = [...state.data, { ...action.payload, quantity: 1 }];
      }
    },
    remove(state, action) {
      // old way
      // return state.data.filter((item) => item.id != action.payload.id);

      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
