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
    closeNav: (state) => {
      state.isNavOpen = false;
    },
  },
});

export const { toggleNav, closeNav } = navSlice.actions;
export default navSlice.reducer;
