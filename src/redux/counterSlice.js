import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counters",
  initialState: { counterA: 0, counterB: 0 },
  reducers: {
    incrementA: (state) => {
      state.counterA += 1;
    },
    decrimentA: (state) => {
      state.counterA -= 1;
    },
    resetA: (state) => {
      state.counterA = 0;
    },

    incrementB: (state) => {
      state.counterB += 1;
    },
    decrimentB: (state) => {
      state.counterB -= 1;
    },
    resetB: (state) => {
      state.counterB = 0;
    },
  },
});

export default counterSlice.reducer;
export const {
  incrementA,
  decrimentA,
  resetA,
  incrementB,
  decrimentB,
  resetB,
} = counterSlice.actions;
