import React, { useState, useEffect } from "react";

const Room = (props) => {
  const path = props.match.url.split("/")[2];

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1 className="text-color-2">
        {/* {entities === undefined ||
        entities["sensor." + path + "_sensors_htu21_temperature"] === undefined
          ? "N/A"
          : entities["sensor." + path + "_sensors_htu21_temperature"].state} */}
      </h1>
      <h1 className="text-color-2">
        {/* {entities === undefined ||
        entities["sensor." + path + "_sensors_htu21_humidity"] === undefined
          ? "N/A"
          : entities["sensor." + path + "_sensors_htu21_humidity"].state} */}
      </h1>
    </div>
  );
};

export default Room;
