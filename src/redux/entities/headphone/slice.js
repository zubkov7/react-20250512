import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedHeadphones.map(({ id }) => id),
  entities: normalizedHeadphones.reduce((acc, headphone) => {
    acc[headphone.id] = headphone;

    return acc;
  }),
};

export const headphoneSlice = createSlice({
  name: "headphoneSlice",
  initialState,
  selectors: {
    selectHeadphoneIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
  },
});

export const { selectHeadphoneById, selectHeadphoneIds } =
  headphoneSlice.selectors;

// const selectHeadphoneIds = (state) => state.headphoneSlice.ids;
