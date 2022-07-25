import { configureStore } from "@reduxjs/toolkit";

// reducers
import feedbackReducer from "./feedbackSlice";

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
