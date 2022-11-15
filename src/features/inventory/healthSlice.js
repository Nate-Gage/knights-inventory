import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  health: 10,
};

export const healthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.health += 1;
    },
    decrement: (state) => {
      state.health -= 1;
    },
  },
});

export const { increment, decrement } = healthSlice.actions;

export default healthSlice.reducer;
