import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD } from "./constant";

const initialState = {
  mode: DASHBOARD,
  cities: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setMode(state, action) {
      state.mode = action.payload;
    },
    startLoading(state) {
      state.loading = true;
    },
    setCities(state, action) {
      state.cities = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMode, startLoading, setCities, setError } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
