import React from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather(props) {
  function handleResponse(response) {
    alert(Math.round(response.data.main.temp));
  }

  let apiKey = `4091b06da263484df848822445999498`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <ClipLoader
        color="#36d7b7"
        loading={true}
        size={60}
        aria-label="RingLoader"
        data-testid="loader"
      />
      s
    </div>
  );
}
