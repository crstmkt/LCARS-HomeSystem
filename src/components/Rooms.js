import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Rooms = (props) => {
  const { path } = props.match;

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <h1 className="text-color-1">ROOMS</h1>
      </Route>
      <Route path={`${path}/corridor`}>
        <h1 className="text-color-1">Corridor</h1>
      </Route>
      <Route path={`${path}/bedroom`}>
        <h1 className="text-color-1">bedroom</h1>
      </Route>
      <Route path={`${path}/bath`}>
        <h1 className="text-color-1">bath</h1>
      </Route>
      <Route path={`${path}/livingroom`}>
        <h1 className="text-color-1">livingroom</h1>
      </Route>
      <Route path={`${path}/kitchen`}>
        <h1 className="text-color-1">kitchen</h1>
      </Route>
      <Route path={`${path}/attic`}>
        <h1 className="text-color-1">attic</h1>
      </Route>
    </Switch>
  );
};

export default Rooms;
