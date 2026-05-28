import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    getConnections: (state, actions) => {
      return actions.payload;
    },
    removeConnections: () => null,
  },
});

export const { getConnections, removeConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
