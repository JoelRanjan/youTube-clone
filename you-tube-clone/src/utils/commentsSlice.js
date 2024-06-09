import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    updateComment: (state, action) => {
      const indexOfComment = state.comments.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.comments[indexOfComment].comment = [
        action.payload.comment,
        ...state.comments[indexOfComment].comment,
      ];
    },
  },
});

export const { addComment, updateComment } = commentSlice.actions;
export default commentSlice.reducer;
