import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./userSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    users: userSlices,
    cart: cartSlice,
  },
});

export default store;
