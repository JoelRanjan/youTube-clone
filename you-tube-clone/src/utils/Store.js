import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cacheSlice from "./cacheSlice";
import searchSlice from "./searchSlice";
import watchListSlice from "./watchListSlice";

const store = configureStore({
  reducer: {
    navToggle: navSlice,
    cache: cacheSlice,
    searchStr: searchSlice,
    watchVideos: watchListSlice,
  },
});

export default store;
