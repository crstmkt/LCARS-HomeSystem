import React, { useEffect, useState } from "react";
import { showMainView } from "./js/Animations";
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

function AppX() {
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

  return (
    <div id="header" class="lcars-row header">
      <LCARSElbow
        color={LCARSColorPalette.Burbon}
        version="left-top"
      ></LCARSElbow>
      <LCARSBar additionalClasses="horizontal"></LCARSBar>
    </div>
  );
}

export default withRouter(AppX);
