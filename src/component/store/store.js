import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { loggedSlice,adminSlice,inventrySlice} from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    logged:loggedSlice.reducer,
    admin:adminSlice.reducer,
    inventry:inventrySlice.reducer
  },
});

export default store;
