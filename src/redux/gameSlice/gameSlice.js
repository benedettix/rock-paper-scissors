import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    pcScore: 0,
    userScore: 0,
    name: "",
  },
  reducers: {
    incrementPc: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.pcScore += 1;
    },
    incrementUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userScore += 1;
    },
    setScore: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.userScore = Number(payload.payload.userScore);
      state.pcScore = Number(payload.payload.pcScore);
    },
    clearScore: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.userScore = 0;
      state.pcScore = 0;
    },
    setNameValue: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.name = payload.payload.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementUser,
  incrementPc,
  setScore,
  clearScore,
  setNameValue,
} = counterSlice.actions;

export default counterSlice.reducer;
