import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphones.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        // state.requestStatus = "fulfilled";

        entityAdapter.setAll(state, payload);
      })
      .addCase(getHeadphones.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

const selectHeadphonesSlice = (state) => state[headphonesSlice.name];

export const {
  selectIds: selectHeadphonesIds,
  selectById: selectHeadphoneById,
} = entityAdapter.getSelectors(selectHeadphonesSlice);

export const { selectRequestStatus } = headphonesSlice.selectors;
