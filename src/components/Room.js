import React, { useState } from "react";
import { subscribeEntities } from "../API/dist";
import moment from "moment";

const Room = (props) => {
  const path = props.match.path.split("/")[2];
  const [entities, setEntitiesState] = useState();

  subscribeEntities(window.connection, (ent) => setEntitiesState(ent));

  return (
    <div>
      <h1 className="text-color-1">
        {entities === undefined
          ? "N/A"
          : entities["sensor." + path + "_sensors_htu21_temperature"].state}
      </h1>
      <h1 className="text-color-1">
        {entities === undefined
          ? "N/A"
          : entities["sensor." + path + "_sensors_htu21_humidity"].state}
      </h1>
    </div>
  );
};

export default Room;
