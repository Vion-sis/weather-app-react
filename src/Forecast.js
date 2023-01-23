import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";

import "./Forecast.css";
export default function Forecast(props) {
  const [ready, setReady] = useState("false");
  const [forecastData, setForecastData] = useState("false");
  function showForecastWeather(response) {
    setForecastData({
      minTemperature: Math.round(response.data.daily[0].temp.min),
      maxTemperature: Math.round(response.data.daily[0].temp.max),
      day:response.data.daily[0].dt,
    });
    setReady("true");
  }

  if (ready === "true") {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2 text-center">
            <ForecastDay forecastData = {forecastData}/>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = `a710bd8bd76400c9658ef649d9e81728`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecastWeather);

    return null;
  }
}
