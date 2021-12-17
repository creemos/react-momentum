import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Weather.css";

export const Weather = () => {
  const API_KEY = "171811e697309d78e6a7383c0e567329";
  const [city, setCity] = useState("Tambov");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  let icon = useRef(null);

  const changeCity = (e) => {
    localStorage.setItem("city", e.target.value);
    setCity(e.target.value);
  };
  
  const getWeather = () => {
    if (localStorage.getItem("city")) {
      setCity(localStorage.getItem("city"));
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        icon.current.classList.add(`owf-${response.data.weather[0].id}`);
        setDescription(response.data.weather[0].description);
        setTemp(Math.floor(response.data.main.temp));
        setWind(Math.floor(response.data.wind.speed));
        setHumidity(response.data.main.humidity);
      });
  };

  useEffect(() => {
    getWeather()
  }, [])


  return (
    <div className="weather">
      <div className="search-block">
        <input
        type="text"
        className="city"
        value={city}
        onChange={changeCity}
      />
      <button className="search-button search" onClick={getWeather}></button>
      </div>
      
      <i className="weather-icon owf" ref={icon}></i>
      <div className="weather-error"></div>
      <div className="description-container">
        <span className="temperature">{temp} &deg;C</span>
        <span className="weather-description">{description}</span>
      </div>
      <div className="wind">Wind speed: {wind}</div>
      <div className="humidity">Humidity: {humidity}</div>
    </div>
  );
};
