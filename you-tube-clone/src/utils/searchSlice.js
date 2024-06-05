import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    str: "",
  },
  reducers: {
    searchString: (state, actions) => {
      state.str = actions.payload;
    },
  },
});

export const { searchString } = searchSlice.actions;

export default searchSlice.reducer;
