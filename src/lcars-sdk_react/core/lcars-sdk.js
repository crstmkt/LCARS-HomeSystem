import React from "react";
import $ from "jquery";
import Cap from "../elements/Cap";

const LCARS = {
  element: {
    create: (obj) => {
      var _obj;

      if (obj.props.href !== undefined) {
        _obj = document.createElement("a");
      } else {
        _obj = document.createElement("div");
      }

      for (var prop in obj.props.oDef) {
        // if (typeof obj.type.setting[prop] === "function") {
        //   obj.type.setting[prop](_obj, obj.props.oDef[prop]);
        //} else
        if (typeof LCARS.setting[prop] === "function") {
          LCARS.setting[prop](_obj, obj.props.oDef[prop]);
        }
      }

      var temp = React.createElement(_obj.tagName, _obj.props);
      return temp;
    },
  },
  setting: {
    color: function (object, sValue) {
      if (sValue === null) {
        object.classList.remove(object.color);
        object.color = null;
      } else if (typeof sValue === "string") {
        if (object.type === "text" || object.type === "title") {
          sValue = sValue.replace("bg-", "text-");
        }
        object.classList.remove(object.color);
        object.classList.add(sValue);
        object.color = sValue;
      }
      return true;
    },
  },
  helper: {
    viewportZoom: (object, oArgs) => {
      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();
      var aspectUI = oArgs.width / oArgs.height;
      var aspectViewport = viewportWidth / viewportHeight;
      if (aspectUI < aspectViewport) {
        var zoomLevel =
          Math.round((viewportHeight / oArgs.height) * 1000000) / 1000000; //Round to 6 decimal
      } else {
        var zoomLevel =
          Math.round((viewportWidth / oArgs.width) * 1000000) / 1000000; //Round to 6 decimal
      }
      object.css("zoom", zoomLevel);

      var bodyW =
        (viewportWidth - object[0].getBoundingClientRect().width * zoomLevel) /
        2;
      var bodyH =
        (viewportHeight -
          object[0].getBoundingClientRect().height * zoomLevel) /
        2;

      var bodyWZ = bodyW * (bodyW / (bodyW * zoomLevel));
      var bodyHZ = bodyH * (bodyH / (bodyH * zoomLevel));

      if (bodyWZ < 0) {
        bodyW = 0;
      }
      if (bodyHZ < 0) {
        bodyH = 0;
      }
      object.css("left", bodyWZ);
      object.css("top", bodyHZ);
    },
  },
};

export default LCARS;
