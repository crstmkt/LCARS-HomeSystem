import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import AppReact from "./AppReact";
//import TestAPI from "./TestAPI";
import { Provider } from "react-redux";
import { store } from "./store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./lcars-styled-components/lcars.css";
import "./lcars-styled-components/Elbow/LCARSElbow.css";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("wpr_viewport")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
