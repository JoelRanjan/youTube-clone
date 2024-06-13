import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchListVideos: {
      myWatchList: [],
      myMovies: [],
      myvideos: [],
      history: [],
    },
  },
  reducers: {
    addToWatchList: (state, action) => {
      state.watchListVideos.myWatchList = [
        ...state.watchListVideos.myWatchList,
        ...action.payload,
      ];
    },
    clearWatchList: (state) => {
      state.watchListVideos.myWatchList.length = 0;
    },
    addToMyVideosList: (state, action) => {
      state.watchListVideos.myvideos = [
        ...state.watchListVideos.myvideos,
        ...action.payload,
      ];
    },
    clearMyVideosList: (state) => {
      state.watchListVideos.myvideos.length = 0;
    },
    addToMoviesList: (state, action) => {
      state.watchListVideos.myMovies = [
        ...state.watchListVideos.myMovies,
        ...action.payload,
      ];
    },
    clearMyMoviesList: (state) => {
      state.watchListVideos.myMovies.length = 0;
    },
    addToHistory: (state, action) => {
      state.watchListVideos.history = [
        ...state.watchListVideos.history,
        ...action.payload,
      ];
    },
    clearHistory: (state) => {
      state.watchListVideos.history.length = 0;
    },
  },
});

export const {
  addToWatchList,
  clearWatchList,
  addToMoviesList,
  addToMyVideosList,
  addToHistory,
  clearHistory,
  clearMyMoviesList,
  clearMyVideosList,
} = watchListSlice.actions;
export default watchListSlice.reducer;
