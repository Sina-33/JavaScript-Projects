import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Dashboard";
import CityDetails from "./Components/CityDetails";
import { DASHBOARD, CITY_DETAILS } from "./constant";

const DashboardIndex = () => {
  const { mode } = useSelector((state) => state.dashboard);

  const renderComponent = () => {
    switch (mode) {
      case DASHBOARD:
        return <Dashboard />;
      case CITY_DETAILS:
        return <CityDetails />;
      default:
        return <Dashboard />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default DashboardIndex;
