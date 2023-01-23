import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <p>{day()}</p>
      <div>
        <Icon iconCode={props.forecastData.weather[0].icon} size={55} />
      </div>
      <p>
        {Math.round(props.forecastData.temp.min)}°{" "}
        <strong>{Math.round(props.forecastData.temp.max)}°</strong>
      </p>
    </div>
  );
}
