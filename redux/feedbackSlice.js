import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedback: [],
  category: "All",
  sortBy: "Most Upvotes",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setFeedback: (state, action) => {
      state.feedback = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setFeedback, setCategory, setSortBy } = feedbackSlice.actions;

export default feedbackSlice.reducer;
