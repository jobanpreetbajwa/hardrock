import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const item = {
  total: 0,
  itemList: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState: item,
  reducers: {
    addTocart: (state, action) => {
      console.log(action.payload, "action payload");
      if (state.itemList[action.payload.id]) {
        state.itemList[action.payload.id].amount += 1;
      } else {
        state.itemList[nanoid(5)] = action.payload;
      }
      state.total += action.payload.price;
      console.log(state.items);
    },
    removeTocart: (state, action) => {
      if (
        state.itemList.length > 0 &&
        state.itemList[action.payload.id].amount > 0
      ) {
        state.total -= action.payload.price;
        if (state.itemList[action.payload.id].amount > 1) {
          state.itemList[action.payload.id].amount -= 1;
        } else {
          delete state.itemList[action.payload.id];
        }
      }
    },
    clearCart: (state) => {
      state.itemList = {};
    },
  },
});
export const { addTocart, removeTocart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
