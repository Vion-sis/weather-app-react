import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import ClipLoader from "react-spinners/ClipLoader";

import "./Form.css";

export default function Form(props) {
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
      date: "Saturday 10:28 pm",
    });
  }

  let form = (
    <form className="mb-3 mt-0">
      <input
        type="search"
        placeholder="Enter a city.."
        className="btn btn-light"
      />
      <input type="submit" value="search" className="btn btn-light ms-2" />
      <button className="ms-2 btn btn-warning">Current Location</button>
    </form>
  );
  let weatherDetails = (
    <div>
      <h3 className="mb-0"> New York, USA </h3>
      <p className="mb-0">{weather.date}</p>
      <p className="text-capitalize">{weather.description}</p>
      <div className="row mb-3">
        <div className="col-6 text-start">
          <div className="icon-temp">
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="#FFCA2B"
              size={70}
              animate={true}
            />
            <h2 className="fs-1 ms-3">
              <span className="temperature">{weather.temperature}</span>{" "}
              <small>°C</small>
            </h2>
          </div>
        </div>
        <div className="col-6">
          <div>
            <p className="mb-0"> Humidity: {weather.humidity}% </p>
            <p className="mb-0"> Wind: {weather.wind}m/s</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="Form ">
        {form}
        {weatherDetails}
      </div>
    );
  } else {
    let apiKey = `4091b06da263484df848822445999498`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
