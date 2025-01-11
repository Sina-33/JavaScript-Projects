import React from "react";
import { useSelector } from "react-redux";
import "../../../styles/Dashboard.css";

export default function Dashboard() {
  const { cities, loading, error } = useSelector((state) => state.dashboard);

  
  return (
    <div className="dashboard">
      <h1>Weather Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="city-list">
        {cities.map((city) => (
          <div key={city.id} className="city-card">
            <h2>{city.name}</h2>
            <p>Temperature: {city.temperature}°C</p>
            <p>Condition: {city.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
