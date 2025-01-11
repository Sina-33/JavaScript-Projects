import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

const weatherListSlice = createSlice({
  name: "weatherList",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, setError } = weatherListSlice.actions;

export default weatherListSlice.reducer;
