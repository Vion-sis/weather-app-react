import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import ClipLoader from "react-spinners/ClipLoader";

import WeatherInfo from "./weatherInfo";

import "./Form.css";

export default function Form(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = `4091b06da263484df848822445999498`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form className="mb-3 mt-0" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city.."
        className="btn btn-light"
        onChange={updateCity}
      />
      <input type="submit" value="search" className="btn btn-light ms-2" />
      <button className="ms-2 btn btn-warning">Current Location</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="Form ">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return (
      <ClipLoader
        color="#36d7b7"
        loading={true}
        size={150}
        aria-label="FadeLoader"
      />
    );
  }
}
