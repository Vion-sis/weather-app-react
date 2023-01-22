import React, { useState } from "react";

export default function Unit(props) {
  const [tempUnit, setTempUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setTempUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setTempUnit("celcius");
  }

  if (tempUnit === "celcius") {
    return (
      <h2 className="fs-1 ms-3">
        <span className="temperature">{props.celcius}</span>{" "}
        <small>
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="text-decoration-none">
            °F
          </a>
        </small>
      </h2>
    );
  } else {
    let fahrenheit = Math.round((props.celcius * 9) / 5 + 32);
    return (
      <h2 className="fs-1 ms-3">
        <span className="temperature">{fahrenheit}</span>{" "}
        <small>
          <a href="/" onClick={showCelcius} className="text-decoration-none">
            °C
          </a>{" "}
          | °F
        </small>
      </h2>
    );
  }
}
