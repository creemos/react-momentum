import React from "react";

export const Weather = () => {
  return (
    <div class="weather">
      <input type="text" class="city" />
      <i class="weather-icon owf"></i>
      <div class="weather-error"></div>
      <div class="description-container">
        <span class="temperature"></span>
        <span class="weather-description"></span>
      </div>
      <div class="wind"></div>
      <div class="humidity"></div>
    </div>
  );
};
