import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Weather.css";
import { AuthActionCreators } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Weather = () => {
  const API_KEY = "171811e697309d78e6a7383c0e567329";
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  let icon = useRef(null);

  const dispatch = useDispatch();
  const city = useSelector((state) => state.auth.city);

  const changeCity = (e) => {
    dispatch(AuthActionCreators.setCity(e.target.value));
    localStorage.setItem("city", e.target.value);
  };

  const getWeather = () => {
    if (localStorage.getItem("city")) {
      dispatch(AuthActionCreators.setCity(localStorage.getItem("city")));
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=metric`
        
      )
      .then((response) => {
        icon.current.classList = `weather-icon owf owf-${response.data.weather[0].id}`;
        setDescription(response.data.weather[0].description);
        setTemp(Math.floor(response.data.main.temp));
        setWind(Math.floor(response.data.wind.speed));
        setHumidity(response.data.main.humidity);
        dispatch((city) => AuthActionCreators.setCity(city));
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

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

      <i ref={icon}></i>
      <div className="weather-error"></div>
      <div className="description-container">
        <span className="temperature">{temp} &deg;C</span>
        <span className="weather-description">{description}</span>
      </div>
      <div className="wind">Скорость ветра: {wind} м/с</div>
      <div className="humidity">Влажность: {humidity}%</div>
    </div>
  );
};
