import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphonesIds, selectRequestStatus } from "./slice";

export const getHeadphones = createAsyncThunk(
  "headphones/getHeadphones",
  async (_, { rejectWithValue, dispatch, getState }) => {
    const response = await fetch("http://localhost:3001/api/products");
    const result = await response.json();

    console.log(getState());

    if (!result.length) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return (
        selectHeadphonesIds(state).length === 0 ||
        selectRequestStatus(state) === "idle"
      );
    },
  }
);
