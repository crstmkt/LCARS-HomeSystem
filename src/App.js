import React, { useEffect, useState } from "react";
import { showMainView } from "./js/Animations";
import Systemtime from "./components/Systemtime";
import Logs from "./components/Logs";
import TopButtons, {
  defaultTopButtons,
  roomsTopButtons,
  devicesTopButtons,
  energyTopButtons,
  weatherTopButtons,
  networkTopButtons,
  entitiesTopButtons,
} from "./components/TopButtons";
import Dashboard from "./components/Dashboard/Dashboard";
import Rooms from "./components/Rooms/Rooms";
import LCARS from "./lcars-sdk/core/lcars-sdk";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  LCARSAside,
  LCARSBar,
  LCARSBlank,
  LCARSBlock,
  LCARSButton,
  LCARSCap,
  LCARSColorPalette,
  LCARSColumn,
  LCARSElbow,
  LCARSRow,
} from "./lcars-styled-components/lcars-styled-components";

function App() {
  const [activeModule, setActiveModule] = useState(Route.url);
  const [topButtons, setTopButtons] = useState([]);

  useEffect(() => {
    switch (activeModule) {
      case "dashboard":
      default:
        setTopButtons(defaultTopButtons);
        break;
      case "rooms":
        setTopButtons(roomsTopButtons);
        break;
      case "devices":
        setTopButtons(devicesTopButtons);
        break;
      case "energy":
        setTopButtons(energyTopButtons);
        break;
      case "weather":
        setTopButtons(weatherTopButtons);
        break;
      case "network":
        setTopButtons(networkTopButtons);
        break;
      case "entities":
        setTopButtons(entitiesTopButtons);
        break;
    }
    return () => {
      //cleanup;
    };
  }, [activeModule]);

  //Unhide LCARS Interface
  useEffect(() => {
    showMainView();
    return () => {};
  }, []);

  //#region Hardcoded UI
  return (
    <div id="wpr_mainView" class="wrapper column flex-v flex-c-h">
      <div id="wrapperSID3wttzcnqe" class="wrapper header flex-h">
        <div id="wrapperSID2n9tjph4p" class="wrapper column flex-v">
          <LCARSBlock
            color={LCARSColorPalette.darkgrey}
            hidden={true}
            additionalClasses="step-two"
          ></LCARSBlock>
          <LCARSElbow
            color={LCARSColorPalette.darkgrey}
            version="bottom-left"
            additionalClasses="flex-c-v"
            hidden={"true"}
          ></LCARSElbow>
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
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
              additionalClasses="flex-c-h"
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
          </div>
        </div>
      </div>
      <div id="wrapperSIDgkaalrgvy" class="wrapper main flex-h flex-c-v">
        <div id="wrapperSIDvx5igyv5n" class="wrapper column flex-v">
          <LCARSElbow
            color={LCARSColorPalette.darkgrey}
            version={"top-left"}
            orientation={"horizontal"}
            hidden={"true"}
          ></LCARSElbow>
          <Link to={"/dashboard"}>
            <LCARSButton
              color={LCARSColorPalette.mediumgrey}
              hidden={"true"}
              dataLabel="DASHBOARD"
              onClick={() => setActiveModule("dashboard")}
            ></LCARSButton>
          </Link>
          <Link to="/rooms">
            <LCARSButton
              color={LCARSColorPalette.mediumgrey}
              hidden={true}
              dataLabel="ROOMS"
              onClick={() => setActiveModule("rooms")}
              additionalClasses="step-two"
            ></LCARSButton>
          </Link>
          <Link to="/devices">
            <LCARSButton
              color={LCARSColorPalette.mediumgrey}
              hidden={true}
              dataLabel="DEVICES"
              onClick={() => setActiveModule("devices")}
            ></LCARSButton>
          </Link>
          <Link to="/energy">
            <LCARSButton
              color={LCARSColorPalette.mediumgrey}
              hidden={true}
              dataLabel="ENERGY"
              onClick={() => setActiveModule("energy")}
              additionalClasses="step-two"
            ></LCARSButton>
          </Link>
          <Link to="/weather">
            <LCARSButton
              color={LCARSColorPalette.mediumgrey}
              hidden={true}
              dataLabel="WEATHER"
              onClick={() => setActiveModule("weather")}
            ></LCARSButton>
          </Link>
          <Link to="/network">
            <LCARSButton
              color={LCARSColorPalette.mediumgrey}
              hidden={true}
              dataLabel="NETWORK"
              onClick={() => setActiveModule("network")}
            ></LCARSButton>
          </Link>
          <Link to="/entities">
            <LCARSButton
              color={LCARSColorPalette.mediumgrey}
              hidden={true}
              dataLabel="ENTITIES"
              onClick={() => setActiveModule("entities")}
              additionalClasses="step-two"
            ></LCARSButton>
          </Link>
        </div>
        <div
          id="wrapperSIDfff6sprkp"
          className="wrapper column flex-c-h flex-v"
        >
          <div id="rowSIDmnu78fmyz" className="row frame">
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
              additionalClasses="small"
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
              additionalClasses="flex-c-h"
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.darkgrey}
              hidden={true}
            ></LCARSBar>
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
