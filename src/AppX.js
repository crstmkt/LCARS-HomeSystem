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
    fetchBoilerJson();
    const interval = setInterval(() => {
      fetchBoilerJson();
    }, 10000);
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
        <img src="./css/svg/dryer.svg" alt="Test"></img>

        {typeof boilerJson === "undefined" ? null : boilerJson.temp1}
        <br></br>
        {typeof boilerJson === "undefined" ? null : boilerJson.status}
        <br></br>
        {typeof boilerJson === "undefined" ? null : boilerJson.power}
        <br></br>
      </div>
    </div>
  );

  function fetchBoilerJson() {
    fetch("http://192.168.0.202/data.jsn")
      .then((response) => response.json())
      .then((json) => setBoilerJson(json));
  }
}

export default withRouter(AppX);
