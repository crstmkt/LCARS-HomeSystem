import moment from "moment";
import $ from "jquery";
import React, { useEffect } from "react";

const Systemtime = () => {
  useEffect(() => {
    setInterval(() => {
      $("#systemTime").html(
        "SYSTEM TIME " + moment().format("DD.MM.YYYY hh:mm:ss")
      );
    }, 1000);
  });

  return <div id="systemTime" class="title half"></div>;
};

export default Systemtime;
