import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.day * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <p>{day()}</p>
      <div>
        <Icon iconCode="10d" size={55} />
      </div>
      <p>
        {props.forecastData.minTemperature}°{" "}
        <strong>{props.forecastData.maxTemperature}°</strong>
      </p>
    </div>
  );
}
