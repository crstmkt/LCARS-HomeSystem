import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";
import getItem, { convertStatus, fetchBoilerJson, formatTemp } from "./API/API";
//Override styles
import "./AppX.css";
///SVG
import SVGDryer from "./css/svg/dryer.svg";
import SVGBoiler from "./css/svg/boiler.svg";
import SVGBPowerPole from "./css/svg/powerpole.svg";
import SVGWashingMachine from "./css/svg/SVGWashingMachine";

function AppX() {
  // const history = useHistory();
  // const [url, setUrl] = useState(history.location.pathname);

  const [boilerJson, setBoilerJson] = useState();

  useEffect(() => {
    //Set History
    //setUrl(history.location.pathname);
    fetchBoilerJson().then((data) => setBoilerJson(data));
    const interval = setInterval(() => {
      fetchBoilerJson().then((data) => setBoilerJson(data));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []); //Delete comma and array for continiously calling

  //Unhide LCARS Interface
  useEffect(() => {
    //ToDo: Call Animation function here (as soon as I rewrote that.)
    return () => { };
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
        <img src={SVGBPowerPole} width="250" height="250"></img>
        <div className="lcars-u-0-3 fill">
          <div id="grass" className="lcars-row"></div>
          <div id="cellar" className="lcars-row">
            <SVGWashingMachine strokeColor="#f93" width="128" height="128" />
            <img src={SVGDryer} height="128" width="128"></img>
            <img src={SVGBoiler} height="128" width="128" alt="SVG Logo " />
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
}

export default withRouter(AppX);
