import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slice";

const store = configureStore({
  reducer: {
    users: userSlices,
  },
});

export default store;
