import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {
    content: [],
  },
  reducers: {
    addCache: (state, action) => {
      state.content.push(action.payload);
    },
  },
});

export const { addCache } = cacheSlice.actions;

export default cacheSlice.reducer;
