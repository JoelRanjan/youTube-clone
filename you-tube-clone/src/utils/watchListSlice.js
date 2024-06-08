import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchListVideos: [],
  },
  reducers: {
    addToWatchList: (state, action) => {
      state.watchListVideos = [...state.watchListVideos, ...action.payload];
    },
    clearWatchList: (state) => {
      state.watchListVideos.length = 0;
    },
  },
});

export const { addToWatchList, clearWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
