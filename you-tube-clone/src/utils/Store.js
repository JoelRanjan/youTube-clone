import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cacheSlice from "./cacheSlice";

const store = configureStore({
  reducer: {
    navToggle: navSlice,
    cache: cacheSlice,
  },
});

export default store;
