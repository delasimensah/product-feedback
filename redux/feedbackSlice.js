import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedback: [],
  category: "All",
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
  },
});

export const { setFeedback, setCategory } = feedbackSlice.actions;

export default feedbackSlice.reducer;
