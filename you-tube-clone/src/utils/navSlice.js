import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navToggle",
  initialState: {
    isNavOpen: true,
  },
  reducers: {
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;
