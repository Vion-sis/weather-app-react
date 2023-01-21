import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./Form.css";

export default function Form(props) {
  function handleResponse(response) {
    //alert(Math.round(response.data.main.temp));
  }

  let apiKey = `4091b06da263484df848822445999498`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  let form = (
    <form className="mb-3 mt-0">
      <input type="search" placeholder="Enter a city.." />
      <input type="submit" value="search" />
      <button className="ms-2">Current</button>
    </form>
  );

  let weatherDetails = (
    <div>
      <div className="row">
        <div className="col-6 text-start">
          <h3 className="fs-1">
            19 <small>°C</small>
          </h3>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="yellow"
            size={80}
            animate={true}
          />
        </div>
        <div className="col-6 text-end">
          <h3 className="mb-0">New York, US</h3>
          <p className="mb-0">Saturday 10:28 pm</p>
          <p className="mb-0"> Humidity: 10%</p>
          <p className="mb-0"> Wind: 3m/s</p>
          <p>Clear Sky</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="Form">
      {form}
      {weatherDetails}
    </div>
  );
}
