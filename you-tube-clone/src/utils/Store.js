import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";

const store = configureStore({
  reducer: {
    navToggle: navSlice,
  },
});

export default store;
