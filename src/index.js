import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppX from "./AppX";
//import { Provider } from "react-redux";
//import { store } from "./store";
//import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/lcars.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppX />
    </Router>
  </React.StrictMode>,
  document.getElementById("lcars-app-container")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
