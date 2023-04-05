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

            {/* <div>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AppX);
