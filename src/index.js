import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Primeiro from "./componentes/basicos/Primeiro";

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <Primeiro></Primeiro>
  </div>,
  document.getElementById("root")
);

reportWebVitals();
