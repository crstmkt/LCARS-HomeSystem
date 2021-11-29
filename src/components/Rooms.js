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
      <Route path={`${path}/corridor`} component={Room}></Route>
      <Route path={`${path}/bedroom`} component={Room}></Route>
      <Route path={`${path}/bath`} component={Room}></Route>
      <Route path={`${path}/livingroom`} component={Room}></Route>
      <Route path={`${path}/kitchen`} component={Room}></Route>
      <Route path={`${path}/attic`} component={Room}></Route>
    </Switch>
  );
};

export default Rooms;
