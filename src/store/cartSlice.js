import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {},
  },
  reducers: {
    increment: (state, data) => {
      let articul = data.payload;
      if (!state.value[articul]) state.value[articul] = "";
      state.value[articul]++;
    },
    minus: (state, data) => {
      let price = data.payload;
      if (!state.value[price]) {
        state.value[price] = null;
      } else {
        state.value[price]--;
      }
    },
    clear: (state, data) => {
      let zero = data.payload;
      state.value[zero] = null;
    },
  },
});

export const { increment, minus, clear } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;
