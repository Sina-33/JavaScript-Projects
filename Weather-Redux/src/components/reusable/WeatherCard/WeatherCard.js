import React from "react";

export default function WeatherCard({ city, temperature, description }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>{description}</p>
    </div>
  );
}
