import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cacheSlice from "./cacheSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    navToggle: navSlice,
    cache: cacheSlice,
    searchStr: searchSlice,
  },
});

export default store;
