import { createSlice } from "@reduxjs/toolkit";
import { liveMessagesCount } from "./constants";

const liveComment = createSlice({
  name: "liveComments",
  initialState: {
    liveCommentsList: [],
  },
  reducers: {
    addLiveComment: (state, action) => {
      state.liveCommentsList.splice(liveMessagesCount, 1);
      state.liveCommentsList.unshift(action.payload);
    },
  },
});

export const { addLiveComment } = liveComment.actions;
export default liveComment.reducer;
