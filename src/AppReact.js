import React, { useEffect, useState } from "react";
import { showMainView } from "./js/Animations";
import LCARS from "./lcars-sdk_react/core/lcars-sdk";

function AppReact() {
  const nemesisUI = {
    type: "wrapper",
    id: "wpr_viewport",
    version: "row",
    flex: "h",
    class: { scale: true, "red-alert": false },
    arrive: function () {
      var dom = this.dom;
      LCARS.helper.viewportZoom(dom, { width: 1440, height: 1080 });
      window.addEventListener("resize", function () {
        LCARS.helper.viewportZoom(dom, { width: 1440, height: 1080 });
      });
    },
    children: [
      {
        type: "wrapper",
        version: "column",
        id: "wpr_mainView",
        flex: "v",
        flexc: "h",
        children: [
          //Header
          {
            type: "wrapper",
            version: "header",
            flex: "h",
            children: [
              //Elbow & Button
              {
                type: "wrapper",
                version: "column",
                flex: "v",
                children: [
                  {
                    type: "button",
                    color: "bg-color-2",
                    size: "step-two",
                  },
                  {
                    type: "elbow",
                    version: "horizontal",
                    direction: "bottom-left",
                    color: "bg-color-4",
                    flexc: "v",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  var dom = LCARS.create(nemesisUI);

  return dom;
}

export default AppReact;
