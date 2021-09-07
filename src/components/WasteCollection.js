import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { subscribeEntities } from "../API/dist/index.js";
import moment from "moment";
import { getHost, getToken } from "../API/API";
import $ from "jquery";

const WasteCollection = (props) => {
  var cntDays = props.mode;

  useEffect(() => {
    asyncCall(cntDays);
    setTimeout(asyncCall(cntDays), 86400000);
  });

  return <div></div>;
};

WasteCollection.propTypes = {};

export default WasteCollection;

// TODO: Refactor this Sh!t
function asyncCall(cntDays) {
  $.ajax({
    url: getHost() + "/api/states/sensor.next_waste_collection_type",
    type: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    success: function (data) {
      $("#nextWasteCollection").html("");
      if (cntDays === 0) {
        for (var i = 0; i < 5; i++) {
          var wdate = moment(Object.keys(data.attributes)[i]);
          var wdateminus2 = moment(Object.keys(data.attributes)[i]).add(
            -2,
            "days"
          );
          if (moment() >= wdateminus2) {
            $("#nextWasteCollection").append(
              '<p class="flash">' +
                wdate.format("DD.MM.YYYY") +
                " : " +
                data.attributes[Object.keys(data.attributes)[i]].toUpperCase() +
                "</p>"
            );
          } else {
            $("#nextWasteCollection").append(
              "<p>" +
                wdate.format("DD.MM.YYYY") +
                " : " +
                data.attributes[Object.keys(data.attributes)[i]].toUpperCase() +
                "</p>"
            );
          }
        }
      } else {
        var cntEntries = 0;
        for (var i = 0; i < cntDays; i++) {
          var wdate = moment(Object.keys(data.attributes)[i]);
          var wdateminus2 = moment(Object.keys(data.attributes)[i]).add(
            -2,
            "days"
          );

          if (wdate.isBetween(moment(), moment().add(cntDays, "days"))) {
            if (moment() >= wdateminus2) {
              $("#nextWasteCollection").append(
                '<p class="flash">' +
                  wdate.format("DD.MM.YYYY") +
                  " : " +
                  data.attributes[
                    Object.keys(data.attributes)[i]
                  ].toUpperCase() +
                  "</p>"
              );
              cntEntries++;
            } else {
              $("#nextWasteCollection").append(
                "<p>" +
                  wdate.format("DD.MM.YYYY") +
                  " : " +
                  data.attributes[
                    Object.keys(data.attributes)[i]
                  ].toUpperCase() +
                  "</p>"
              );
              cntEntries++;
            }
          }
        }
        if (cntEntries === 0) {
          $("#nextWasteCollection").append(
            "<p> NO WASTE COLLECTIONS IN THE NEXT " + cntDays + " DAYS</p>"
          );
        }
      }
    },
  });
}
