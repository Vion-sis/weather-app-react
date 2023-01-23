import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";

import "./Forecast.css";
export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function showForecastWeather(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready === true) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2 text-center" key={index}>
                  <ForecastDay forecastData={dailyForecast} />
                </div>
              );
            }
            return null
          })}
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
