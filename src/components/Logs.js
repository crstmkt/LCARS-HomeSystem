import moment from "moment";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import { getHost, getToken } from "../API/API";
import { callService } from "../API/dist/index.js";

const Logs = () => {
  //Because FUCK CORS - and those who are responsible for not working allowed header in HASS Config
  // useEffect(() => {
  //   setInterval(() => {
  //     getLog();
  //   }, 1000);
  //});

  function getLog() {
    // $.ajax({
    //   url: getHost() + "/api/logbook",
    //   headers: {
    //     Authorization: "Bearer " + getToken(),
    //   },
    //   success: function (data) {
    //     data.forEach((elem) =>
    //       log(
    //         moment().format("DD.MM.YYYY hh:mm:ss") +
    //           " " +
    //           elem.name +
    //           " " +
    //           stateMessage(elem)
    //       )
    //     );
    //   },
    // });
  }

  function log(str) {
    var logsize = $("#logs p").length;

    if (logsize >= 7) {
      $("#logs").children().eq(0).remove();
    }

    $("#logs").append("<p>" + str.toUpperCase() + "</p>");
  }

  function stateMessage(elem) {
    return elem.state === undefined ? elem.message : elem.state;
  }

  return <div id="logs" class="text text-color-1"></div>;
};

export default Logs;
