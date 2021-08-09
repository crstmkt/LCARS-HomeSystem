import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TestAPI from "./TestAPI";
import reportWebVitals from "./reportWebVitals";
import "./lcars-sdk/fonts/sdk_fonts-default.css";
import "./lcars-sdk/core/lcars-sdk.css";
import "./lcars-sdk/themes/sdk_theme-default.css";
import "./lcars-sdk/widgets/sdk_default-bar-frame/default-bar-frame.css";
import "./lcars-sdk/widgets/sdk_default-bracket/default-bracket.css";
import "./lcars-sdk/widgets/sdk_solid-level-bar/solid-level-bar.css";
import "./lcars-sdk/widgets/sdk_scroll-button/scroll-button.css";
import "./App.css";
import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <TestAPI /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("wpr_viewport")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
