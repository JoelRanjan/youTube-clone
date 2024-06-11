import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cacheSlice from "./cacheSlice";
import searchSlice from "./searchSlice";
import watchListSlice from "./watchListSlice";
import commentsSlice from "./commentsSlice";
import liveCommentSlice from "./liveCommentSlice";

const store = configureStore({
  reducer: {
    navToggle: navSlice,
    cache: cacheSlice,
    searchStr: searchSlice,
    watchVideos: watchListSlice,
    comments: commentsSlice,
    liveComment: liveCommentSlice,
  },
});

export default store;
