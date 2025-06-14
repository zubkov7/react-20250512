import { createSlice } from "@reduxjs/toolkit";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../constants";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_REJECTED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_FULFILLED;
        }
      ),
  selectors: {
    selectStatus: (state, id) => state[id] || REQUEST_STATUS_IDLE,
    selectIsLoading: (state, id) => state[id] === REQUEST_STATUS_PENDING,
  },
});

export const { selectStatus, selectIsLoading } = requestSlice.selectors;
