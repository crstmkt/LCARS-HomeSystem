import React, { useEffect, useState } from "react";
import { showMainView } from "./js/Animations";
import Systemtime from "./components/Systemtime";
import Logs from "./components/Logs";
import TopButtons from "./components/TopButtons/TopButtons";
import Dashboard from "./components/Dashboard/Dashboard";
import Rooms from "./components/Rooms/Rooms";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";
import {
  LCARSBar,
  LCARSBlock,
  LCARSColorPalette,
  LCARSElbow,
} from "./lcars-styled-components/lcars-styled-components";
import NavMenu from "./components/NavMenu/NavMenu";
import MediaQuery from "react-responsive";
import "./App.css";

function App() {
  const history = useHistory();
  const [url, setUrl] = useState(history.location.pathname);

  useEffect(() => {
    setUrl(history.location.pathname);
  });

  //Unhide LCARS Interface
  useEffect(() => {
    showMainView();
    return () => {};
  }, []);

  //#region Hardcoded UI
  return (
    <div id="wpr_mainView" class="column flex-v flex-c-h">
      <header class="flex-h">
        <nav class="flex-v">
          <LCARSBlock
            color={LCARSColorPalette.Gold}
            hidden={true}
            additionalClasses=""
          ></LCARSBlock>
          <LCARSElbow
            color={LCARSColorPalette.Sand}
            version="bottom-left"
            additionalClasses="flex-c-v"
            hidden={"true"}
          ></LCARSElbow>
        </nav>
        <div id="wrapperSID4grmugwnd" class="flex-c-h flex-v">
          <div id="wrapperSID9cwrzgmfo" class="hidden flex-c-v flex-h">
            <div id="wrapperSIDnpltj5x5x" class="flex-c-v flex-h">
              <Logs />
            </div>
            <div id="wrapperSID8u7837ms0" class="flex-c-h flex-v">
              <div id="titleSID33g9m1vio" class="title">
                LCARS HOME SYSTEM
              </div>
              <Systemtime />
              <div id="wpr_topButtons" class="flex-h button-wrap">
                <TopButtons url={url} />
              </div>
            </div>
          </div>
          <div id="closingBar" class="row frame flex-h">
            <LCARSBar color={LCARSColorPalette.Sand} hidden={true}></LCARSBar>
            <LCARSBar color={LCARSColorPalette.Sand} hidden={true}></LCARSBar>
            <LCARSBar
              color={LCARSColorPalette.Gold}
              hidden={true}
              additionalClasses="flex-c-h"
            ></LCARSBar>
            <LCARSBar color={LCARSColorPalette.Sand} hidden={true}></LCARSBar>
            <LCARSBar color={LCARSColorPalette.Gold} hidden={true}></LCARSBar>
            <LCARSBar color={LCARSColorPalette.Sand} hidden={true}></LCARSBar>
            <LCARSBar color={LCARSColorPalette.Gold} hidden={true}></LCARSBar>
          </div>
        </div>
      </header>
      <div id="centerView">
        <aside>
          <NavMenu />
        </aside>
        <section>
          <div id="wrapperSIDfff6sprkp" className="flex-v">
            <div id="topRow" className="row frame flex-h">
              <LCARSBar color={LCARSColorPalette.Gold} hidden={true}></LCARSBar>
              <LCARSBar color={LCARSColorPalette.Gold} hidden={true}></LCARSBar>
              <LCARSBar
                color={LCARSColorPalette.Sand}
                hidden={true}
                additionalClasses="flex-c-h"
              ></LCARSBar>
              <LCARSBar color={LCARSColorPalette.Gold} hidden={true}></LCARSBar>
              <LCARSBar color={LCARSColorPalette.Sand} hidden={true}></LCARSBar>
              <LCARSBar color={LCARSColorPalette.Gold} hidden={true}></LCARSBar>
              <LCARSBar color={LCARSColorPalette.Sand} hidden={true}></LCARSBar>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
  //#endregion
}

export default withRouter(App);
