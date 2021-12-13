import React, { useState } from "react";
import { subscribeEntities } from "../../API/dist";

const Room = (props) => {
  const path = props.match.url.split("/")[2];
  const [entities, setEntitiesState] = useState();

  subscribeEntities(window.connection, (ent) => setEntitiesState(ent));

  return (
    <div>
      <h1 className="text-color-1">
        {entities === undefined ||
        entities["sensor." + path + "_sensors_htu21_temperature"] === undefined
          ? "N/A"
          : entities["sensor." + path + "_sensors_htu21_temperature"].state}
      </h1>
      <h1 className="text-color-1">
        {entities === undefined ||
        entities["sensor." + path + "_sensors_htu21_humidity"] === undefined
          ? "N/A"
          : entities["sensor." + path + "_sensors_htu21_humidity"].state}
      </h1>
    </div>
  );
};

export default Room;