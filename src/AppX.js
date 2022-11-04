import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";
//Override styles
import "./AppX.css";
///SVG
import SVGDryer from "./css/svg/dryer.svg";
import SVGBoiler from "./css/svg/boiler.svg";
import SVGBPowerPole from "./css/svg/powerpole.svg";
import SVGWashingMaschine from "./css/svg/washingmaschine.svg";

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
        <div className="lcars-u-16-8 fill"></div>
        <div className="lcars-u-16-8 fill"></div>
        <div className="lcars-u-16-7 fill ">
          <div className="lcars-row">
            <img src={SVGWashingMaschine}></img>
            <img src={SVGDryer}></img>
            <img src={SVGBoiler} alt="SVG Logo " />
            <div>
              <h5>
                {typeof boilerJson === "undefined"
                  ? null
                  : formatTemp(boilerJson.temp1)}
              </h5>
              <h5>
                {" "}
                {typeof boilerJson === "undefined"
                  ? null
                  : convertStatus(boilerJson.status)}
              </h5>
              <h5>
                {typeof boilerJson === "undefined"
                  ? null
                  : boilerJson.power + "W"}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  //AC ELWA
  function fetchBoilerJson() {
    fetch("http://192.168.0.202/data.jsn")
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
