import { configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone/slice";

export const store = configureStore({
  reducer: {
    [headphoneSlice.name]: headphoneSlice.reducer,
  },
});
