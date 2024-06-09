import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cacheSlice from "./cacheSlice";
import searchSlice from "./searchSlice";
import watchListSlice from "./watchListSlice";
import commentsSlice from "./commentsSlice";

const store = configureStore({
  reducer: {
    navToggle: navSlice,
    cache: cacheSlice,
    searchStr: searchSlice,
    watchVideos: watchListSlice,
    comments: commentsSlice,
  },
});

export default store;
