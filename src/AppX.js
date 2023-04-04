import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";
import getItem from "./API/API";
//Override styles
import "./AppX.css";

//SVG
import SVGDryer from "./css/svg/SVGDryer";
import SVGBoiler from "./css/svg/SVGBoiler";
import SVGPowerPole from "./css/svg/SVGPowerPole";
import SVGWashingMachine from "./css/svg/SVGWashingMachine";

function AppX() {
  // const history = useHistory();
  // const [url, setUrl] = useState(history.location.pathname);

  const [boilerJson, setBoilerJson] = useState();

  useEffect(() => {
    //Set History
    //setUrl(history.location.pathname);
    fetchBoilerJson();
    const interval = setInterval(() => {
      fetchBoilerJson();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []); //Delete comma and array for continiously calling

  //Unhide LCARS Interface
  useEffect(() => {
    //ToDo: Call Animation function here
    return () => {};
  }, []);

  return (
    <div>
      <div id="header" className="lcars-row header">
        <div className="lcars-bar horizontal left-end"></div>

        <div className="lcars-bar horizontal">
          <div className="lcars-title right">LCARS</div>
        </div>

        <div className="lcars-bar horizontal right-end decorated"></div>
      </div>
      <div id="footer" className="lcars-row">
        <div className="lcars-bar horizontal left-end"></div>

        <div className="lcars-bar horizontal"></div>

        <div className="lcars-bar horizontal right-end decorated"></div>
      </div>
      <div id="container">
        <div className="lcars-u-0-3 fill"></div>
        <div className="lcars-u-0-4 fill"></div>
        <div className="lcars-u-0-4 fill"></div>
        <SVGPowerPole strokeColor="#9c9c9c" width="250" hieght="250" />
        <div className="lcars-u-0-3 fill">
          <div id="grass" className="lcars-row"></div>
          <div id="cellar" className="lcars-row">
            <SVGWashingMachine strokeColor="#f93" width="128" height="128" />
            <SVGDryer strokeColor="#f93" width="128" height="128" />
            <SVGBoiler strokeColor="#f93" width="128" height="128" />

            <div>
              <h6>
                {typeof boilerJson === "undefined"
                  ? null
                  : formatTemp(boilerJson.temp1)}
              </h6>
              <h6>
                {" "}
                {typeof boilerJson === "undefined"
                  ? null
                  : convertStatus(boilerJson.status)}
              </h6>
              <h6>
                {typeof boilerJson === "undefined"
                  ? null
                  : boilerJson.power + "W"}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  //AC ELWA
  function fetchBoilerJson() {
    fetch("http://192.168.20.202/data.jsn")
      .then((response) => response.json())
      .then((json) => setBoilerJson(json));
  }

  function formatTemp(temp) {
    return (
      temp.toString().substring(0, 2) + "." + temp.toString().substring(2) + "C"
    );
  }

  function convertStatus(statusNr) {
    switch (statusNr) {
      case 2:
        return "HEAT";
      case 3:
        return "STANDBY";
      case 4:
        return "BOOST HEAT";
      case 5:
        return "HEAT FINISHED";
      case 9:
        return "SETUP";
      case 201:
        return "ERROR OVERTEMP FUSE BLOWN";
      case 202:
        return "ERROR OVERTEMP MEASURED";
      case 203:
        return "ERROR OVERTEMP ELECTRONICS";
      case 204:
        return "ERROR HARDWARE FAULT";
      case 205:
        return "ERROR TEMP SENSOR";
      case 209:
        return "MAINBOARD ERROR";
    }
  }
}

export default withRouter(AppX);
