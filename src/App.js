import React from "react";
import "./App.css";
import Form from "./Form";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-0">Weather Forecast App</h1>
        <br />
        <Form city="Tokyo" />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
//form containing the search button, the current button and the weather details display
//forecast containing upto 6days
