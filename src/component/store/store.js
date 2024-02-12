import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { loggedSlice } from "./cartSlice";
import { adminSlice } from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    logged:loggedSlice.reducer,
    admin:adminSlice.reducer
  },
});

export default store;
