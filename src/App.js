import { render } from "@testing-library/react";
import $ from "jquery";
import { LCARS, lcars } from "./lcars-sdk/core/lcars-sdk";
import wrapper from "./lcars-sdk/elements/wrapper"; //Don't know if needed
import "./lcars-sdk/core/lcars-sdk.css"; //better in index.html?
import "./lcars-sdk/themes/sdk_theme-default.css";
import "./App.css";
import "./theme.css";
import moment from "moment";

function App() {
  const uiColors = [
    "bg-color-1",
    "bg-color-2",
    "bg-color-3",
    "bg-color-4",
    "bg-color-5",
  ];
  //#region
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
    //#region "Children"
    // children: [
    // //Main Area
    // {
    // type: "wrapper",
    // version: "column",
    // id: "wpr_mainView",
    // flex: "v",
    // flexc: "h",
    // children: [
    // //Header
    // {
    // type: "wrapper",
    // version: "header",
    // flex: "h",
    // children: [
    // //Elbow & Button
    // {
    // type: "wrapper",
    // version: "column",
    // flex: "v",
    // children: [
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // size: "step-two",
    // hidden: true,
    // },
    // {
    // type: "elbow",
    // version: "horizontal",
    // direction: "bottom-left",
    // color: LCARS.helper.aRandColor(uiColors),
    // flexc: "v",
    // hidden: true,
    // },
    // ],
    // },

    // {
    // type: "wrapper",
    // flexc: "h",
    // flex: "v",
    // children: [
    // //Header Content Area
    // {
    // type: "wrapper",
    // version: "content",
    // hidden: true,
    // flexc: "v",
    // flex: "h",
    // children: [
    // //Logs Area
    // {
    // type: "wrapper",
    // flexc: "v",
    // flex: "h",
    // children: [
    // {
    // id: "logs",
    // type: "text",
    // color: "text-color-1",
    // text: "",
    // },
    // ],
    // },

    // {
    // type: "wrapper",
    // flexc: "h",
    // flex: "v",
    // children: [
    // //Header Title
    // { type: "title", text: "LCARS HOME SYSTEM" },
    // {
    // type: "title",
    // id: "systemTime",
    // size: "half",
    // text: setInterval(function () {
    // //writeSystemTime();
    // }, 1000),
    // },

    // //Header Round Button Group
    // {
    // type: "wrapper",
    // flex: "h",
    // version: "button-wrap",
    // children: [
    // {
    // type: "button",
    // color: "bg-grey-4",
    // version: "round",
    // label: "GREY MODE",
    // //href: "javascript:activateGreyMode();",
    // },
    // {
    // type: "button",
    // color: "bg-blue-2",
    // version: "round",
    // label: "RELOAD",
    // //href: "javascript:window.location.reload(true);",
    // },
    // {
    // type: "button",
    // id: "guestWifiSwitch",
    // color: "bg-orange-4",
    // version: "round",
    // label: "GUEST WIFI",
    // //href: "javascript:toggleGuestWifi();",
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // version: "round",
    // label: "Test",
    // //href: "javascript:raMainViewSetup();",
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // version: "round",
    // label: "clean",
    // //href: "javascript:startClean();",
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // version: "round",
    // },
    // ],
    // },
    // ],
    // },
    // ],
    // },

    // //Header Bottom Bars
    // {
    // type: "row",
    // version: "frame",
    // flex: "h",
    // children: [
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // flexc: "h",
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // ],
    // },
    // ],
    // },
    // ],
    // },

    // //Main Content Area
    // {
    // type: "wrapper",
    // version: "main",
    // flex: "h",
    // flexc: "v",
    // children: [
    // //Left Columns & Elbow
    // {
    // type: "wrapper",
    // version: "column",
    // flex: "v",
    // children: [
    // {
    // type: "elbow",
    // version: "horizontal",
    // direction: "top-left",
    // color: LCARS.helper.aRandColor(uiColors),
    // class: "step-two",
    // hidden: true,
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // label: "DASHBOARD",
    // //href: "javascript:renderDashboard()",
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // size: "step-two",
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // size: "step-two",
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // flexc: "v",
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // label: "WIFI",
    // //href: "javascript:renderWiFi();",
    // },
    // {
    // type: "button",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // size: "step-two",
    // },
    // ],
    // },

    // {
    // type: "wrapper",
    // version: "column",
    // flexc: "h",
    // flex: "v",
    // children: [
    // //Top Bars Group
    // {
    // type: "row",
    // version: "frame",
    // children: [
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // size: "small",
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // flexc: "h",
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // {
    // type: "bar",
    // color: LCARS.helper.aRandColor(uiColors),
    // hidden: true,
    // },
    // ],
    // },

    // //Start Main Content Wrapper
    // {
    // type: "wrapper",
    // id: "wpr_centerControls",
    // flex: "h",
    // flexc: "v",
    // children: [
    // //Here, content of Views will be rendered
    // ],
    // },
    // //End Main Content Wrapper
    // ],
    // },
    // ],
    // },
    // ],
    // },
    // ],
    //#endregion
  };
  //#endregion

  return LCARS.create(nemesisUI).dom;
}

export default App;
