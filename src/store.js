import { configureStore } from "@reduxjs/toolkit";
import topButtonsSlice from "./Reducer/TopButtonsSlice";

export const store = configureStore({
  reducer: {
    topButtons: topButtonsSlice,
  },
});
