import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { defaultTopButtons } from "../Components/TopButtons";

const initialState = {
  list: defaultTopButtons,
};

export const topButtonsSlice = createSlice({
  name: "topButtons",
  initialState,
  reducers: {
    setTopButtons: (state, action) => {
      //console.log(current(state));
      state.list = action.payload;
    },
  },
});

export const { setTopButtons } = topButtonsSlice.actions;

export default topButtonsSlice.reducer;
