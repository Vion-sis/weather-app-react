import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div>
      <div className="row">
        <div className="col-2 text-center">
          <p>Sun</p>
          <p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </p>
          <p>9°</p>
        </div>
        <div className="col-2 text-center">
          <p>Sun</p>
          <p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </p>
          <p>9°</p>
        </div>
        <div className="col-2 text-center">
          <p>Sun</p>
          <p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </p>
          <p>9°</p>
        </div>
        <div className="col-2 text-center">
          <p>Sun</p>
          <p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </p>
          <p>9°</p>
        </div>
        <div className="col-2 text-center">
          <p>Sun</p>
          <p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </p>
          <p>9°</p>
        </div>
        <div className="col-2 text-center">
          <p>Sun</p>
          <p>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </p>
          <p>9°</p>
        </div>
      </div>
    </div>
  );
}
