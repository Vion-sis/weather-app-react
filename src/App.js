import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form defaultCity = "New York"/>
        <Forecast />
      </div>
      <p className="text-center">
        This project is an {""}
        <a
          href="https://github.com/Vion-sis/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          opensource
        </a>
        , coded with ❤️ by {""}
        <a
          href="https://github.com/Vion-sis"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Viona
        </a>
      </p>
    </div>
  );
}

export default App;
//form containing the search button, the current button and the weather details display
//forecast containing upto 6days
