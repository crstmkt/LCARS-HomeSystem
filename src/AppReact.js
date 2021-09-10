import React, { useEffect, useState } from "react";
import { showMainView } from "./js/Animations";
import $ from "jquery";
import LCARS from "./lcars-sdk_react/core/lcars-sdk";
import Bar from "./lcars-sdk_react/elements/Bar";
import Cap from "./lcars-sdk_react/elements/Cap";

function AppReact() {
  useEffect(() => {
    $(function () {
      var dom = $("#wpr_viewport");
      LCARS.helper.viewportZoom(dom, { width: 1440, height: 1080 });
      window.addEventListener("resize", function () {
        LCARS.helper.viewportZoom(dom, { width: 1440, height: 1080 });
      });
    });
    return () => {};
  }, []);

  return (
    <div id="wpr_mainView" class="wrapper column flex-v flex-c-h">
      <div id="topRow" class="wrapper row flex-h">
        <Cap color="bg-color-3" size="medium" version="round-left" />
        <Bar color="bg-color-1" size="medium" label="LCARS-4711" />
        <Cap color="bg-color-3" size="medium" version="round-right" />
      </div>
    </div>
  );
}

export default AppReact;
