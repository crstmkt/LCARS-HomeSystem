import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";

function AppX() {
  // const history = useHistory();
  // const [url, setUrl] = useState(history.location.pathname);

  // useEffect(() => {
  //   setUrl(history.location.pathname);
  // });

  //Unhide LCARS Interface
  useEffect(() => {
    //ToDo: Call Animation function here
    return () => {};
  }, []);

  return (
    <div>
      <div id="header" class="lcars-row header">
        <div class="lcars-bar horizontal left-end"></div>

        <div class="lcars-bar horizontal">
          <div class="lcars-title right">LCARS</div>
        </div>

        <div class="lcars-bar horizontal right-end decorated"></div>
      </div>
      <div id="footer" class="lcars-row">
      <div class="lcars-bar horizontal left-end"></div>

<div class="lcars-bar horizontal">
  
</div>

<div class="lcars-bar horizontal right-end decorated"></div>
      </div>
    </div>
  );
}

export default withRouter(AppX);
