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

function AppX() {
  // const history = useHistory();
  // const [url, setUrl] = useState(history.location.pathname);

  const [boilerJson, setBoilerJson] = useState();

  useEffect(() => {
    //Set History
    //setUrl(history.location.pathname);
    // Get JSON data from Boiler
    fetch("http://192.168.0.202/data.jsn")
      .then((response) => response.json())
      .then((json) => setBoilerJson(json));
  }, []);

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
      <div id="container">{JSON.stringify(boilerJson)}</div>
    </div>
  );
}

export default withRouter(AppX);
