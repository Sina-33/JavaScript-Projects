import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./containers/Dashboard/slice";
import weatherListReducer from "./containers/WeatherList/slice";
import weatherDetailsReducer from "./containers/WeatherDetails/slice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    weatherList: weatherListReducer,
    weatherDetails: weatherDetailsReducer,
  },
});

export default store;
