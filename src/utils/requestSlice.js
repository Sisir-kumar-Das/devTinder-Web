import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    getRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      return null;
    },
  },
});

export const { getRequest, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;
