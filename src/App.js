import React, { useEffect, useState } from "react";
import { showMainView } from "./js/Animations";
import Systemtime from "./Components/Systemtime";
import Logs from "./Components/Logs";
import TopButtons, {
  defaultTopButtons,
  roomsTopButtons,
  devicesTopButtons,
  energyTopButtons,
  weatherTopButtons,
  networkTopButtons,
  entitiesTopButtons,
} from "./Components/TopButtons";
import Dashboard from "./Components/Dashboard";
import Rooms from "./Components/Rooms";
import LCARS from "./lcars-sdk/core/lcars-sdk";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTopButtons } from "./Reducer/TopButtonsSlice";

function App() {
  const [activeModule, setActiveModule] = useState("dashboard");

  const topButtons = useSelector((state) => state.topButtons.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeModule === "dashboard")
      dispatch(setTopButtons(defaultTopButtons));
    else if (activeModule === "rooms") dispatch(setTopButtons(roomsTopButtons));
    else if (activeModule === "devices")
      dispatch(setTopButtons(devicesTopButtons));
    else if (activeModule === "energy")
      dispatch(setTopButtons(energyTopButtons));
    else if (activeModule === "weather")
      dispatch(setTopButtons(weatherTopButtons));
    else if (activeModule === "network")
      dispatch(setTopButtons(networkTopButtons));
    else if (activeModule === "entities")
      dispatch(setTopButtons(entitiesTopButtons));
    return () => {
      //cleanup;
    };
  }, [activeModule]);

  //Unhide LCARS Interface
  useEffect(() => {
    $(function () {
      var dom = $("#wpr_viewport");
      LCARS.helper.viewportZoom(dom, { width: 1440, height: 1080 });
      window.addEventListener("resize", function () {
        LCARS.helper.viewportZoom(dom, { width: 1440, height: 1080 });
      });
    });
    showMainView();
    return () => {};
  }, []);

  //#region Hardcoded UI
  return (
    <div id="wpr_mainView" class="wrapper column flex-v flex-c-h">
      <div id="wrapperSID3wttzcnqe" class="wrapper header flex-h">
        <div id="wrapperSID2n9tjph4p" class="wrapper column flex-v">
          <div
            id="buttonSIDhybpg06vw"
            class="button bg-color-3 step-two hidden"
          ></div>
          <div
            id="elbowSID7vwtva2hl"
            class="elbow default horizontal bottom-left bg-color-5 flex-c-v hidden"
          >
            <div id="barSIDxjwzdlad8" class="bar">
              <div id="blockSIDsr8k22dfu" class="block"></div>
            </div>
          </div>
        </div>
        <div id="wrapperSID4grmugwnd" class="wrapper flex-c-h flex-v">
          <div
            id="wrapperSID9cwrzgmfo"
            class="wrapper content hidden flex-c-v flex-h"
          >
            <div id="wrapperSIDnpltj5x5x" class="wrapper flex-c-v flex-h">
              <Logs />
            </div>
            <div id="wrapperSID8u7837ms0" class="wrapper flex-c-h flex-v">
              <div id="titleSID33g9m1vio" class="title">
                LCARS HOME SYSTEM
              </div>
              <Systemtime />
              <div id="wrapperSIDeuhyxyz4z" class="wrapper flex-h button-wrap">
                <TopButtons RoundedButtonArray={topButtons} />
              </div>
            </div>
          </div>
          <div id="rowSID7zfyqtz3a" class="row frame flex-h">
            <div id="barSIDqs5xnc2hi" class="bar bg-color-1 hidden"></div>
            <div id="barSIDy64j00spg" class="bar bg-color-2 hidden"></div>
            <div id="barSIDi3q609b8m" class="bar bg-color-3 hidden"></div>
            <div
              id="barSIDoldnr8lzu"
              class="bar bg-color-5 flex-c-h hidden"
            ></div>
            <div id="barSIDk1d7yuo36" class="bar bg-color-4 hidden"></div>
            <div id="barSIDia6bftvp3" class="bar bg-color-4 hidden"></div>
            <div id="barSID1s6fsbbiq" class="bar bg-color-1 hidden"></div>
          </div>
        </div>
      </div>
      <div id="wrapperSIDgkaalrgvy" class="wrapper main flex-h flex-c-v">
        <div id="wrapperSIDvx5igyv5n" class="wrapper column flex-v">
          <div
            id="elbowSIDvqqb969rs"
            class="elbow default horizontal top-left bg-color-5 hidden"
          >
            <div id="barSID7ndws5075" class="bar">
              <div id="blockSIDasyww0lrz" class="block"></div>
            </div>
          </div>
          <Link to={"/dashboard"}>
            <div
              id="buttonSIDlymj9dqjd"
              class="button bg-color-2 hidden"
              data-label="DASHBOARD"
              onClick={() => {
                setActiveModule("dashboard");
              }}
            ></div>
          </Link>
          <Link to="/rooms">
            <div
              id="buttonSIDwmrlmu37z"
              class="button bg-color-4 hidden step-two"
              data-label="ROOMS"
              onClick={() => {
                setActiveModule("rooms");
              }}
            ></div>
          </Link>
          <Link to="/devices">
            <div
              id="buttonSID7r59osbl1"
              class="button bg-color-3 hidden"
              data-label="DEVICES"
              onClick={() => {
                setActiveModule("devices");
              }}
            ></div>
          </Link>
          <Link to="/energy">
            <div
              id="buttonSIDntglo1ex8"
              class="button bg-color-2 hidden step-two"
              data-label="ENERGY"
              onClick={() => setActiveModule("energy")}
            ></div>
          </Link>
          <Link to="/weather">
            <div
              id="buttonSIDeukie0ohw"
              class="button bg-color-5 hidden flex-c-v"
              data-label="WEATHER"
              onClick={() => setActiveModule("weather")}
            ></div>
          </Link>
          <Link to="/network">
            <div
              id="buttonSID9spzacj4j"
              class="button bg-color-3 hidden"
              data-label="NETWORK"
              onClick={() => {
                setActiveModule("network");
              }}
            ></div>
          </Link>
          <Link to="/entities">
            <div
              id="buttonSIDp9gewhasz"
              class="button bg-color-2 hidden step-two"
              data-label="ENTITIES"
              onClick={() => setActiveModule("entities")}
            ></div>
          </Link>
        </div>
        <div id="wrapperSIDfff6sprkp" class="wrapper column flex-c-h flex-v">
          <div id="rowSIDmnu78fmyz" class="row frame">
            <div id="barSIDvoe66jcdg" class="bar bg-color-4 hidden"></div>
            <div id="barSIDwwhzy6v1q" class="bar bg-color-3 hidden small"></div>
            <div id="barSIDmao7t1n0i" class="bar bg-color-5 hidden"></div>
            <div
              id="barSIDlu31trop1"
              class="bar bg-color-2 hidden flex-c-h"
            ></div>
            <div id="barSIDq4u8lkv3v" class="bar bg-color-2 hidden"></div>
            <div id="barSIDivuywe6cx" class="bar bg-color-5 hidden"></div>
            <div id="barSIDp8ipbh9rx" class="bar bg-color-2 hidden"></div>
          </div>
          <div id="wpr_centerControls" class="wrapper flex-h flex-c-v">
            <Switch>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Route path="/rooms" component={Rooms} />
              <Route path="*">
                <h1 class="bar text-color-1 blink">SYSTEM HALTED</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
  //#endregion
}

export default App;
