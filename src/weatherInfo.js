import React from "react";
import FormattedDate from "./FormattedDate";
import ClipLoader from "react-spinners/ClipLoader";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div>
      <h3 className="mb-0"> {props.data.city}</h3>
      <p className="mb-0">
        <FormattedDate date={props.data.date} />
      </p>
      <p className="text-capitalize">{props.data.description}</p>
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
              <span className="temperature">{props.data.temperature}</span>{" "}
              <small>°C</small>
            </h2>
          </div>
        </div>
        <div className="col-6">
          <div>
            <p className="mb-0"> Humidity: {props.data.humidity}% </p>
            <p className="mb-0"> Wind: {props.data.wind}m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
