import { createSlice } from "@reduxjs/toolkit";

const liveComment = createSlice({
  name: "liveComments",
  initialState: {
    liveCommentsList: [],
  },
  reducers: {
    addLiveComment: (state, action) => {
      state.liveCommentsList.unshift(action.payload);
    },
  },
});

export const { addLiveComment } = liveComment.actions;
export default liveComment.reducer;
