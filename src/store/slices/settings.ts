import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  theme: string;
};

const initialState: State = {
  theme: (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) ? "light" : "dark"
};

const slice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    SET_THEME(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    }
  }
});

export const { SET_THEME } = slice.actions;

export default slice.reducer;