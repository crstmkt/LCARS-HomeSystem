import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Room from "./Room";

const Rooms = (props) => {
  const { path } = props.match;

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <h1 className="text-color-1">ROOMS</h1>
      </Route>
      <Route path={`${path}/*`} component={Room}></Route>
    </Switch>
  );
};

export default Rooms;
