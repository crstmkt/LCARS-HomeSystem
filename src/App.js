import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import $ from "jquery";
import { LCARS, lcars } from "./lcars-sdk/core/lcars-sdk";
// import play from "./lcars-sdk/sounds/play";
// import aside from "./lcars-sdk/elements/aside";
// import bar from "./lcars-sdk/elements/bar";
// import blank from "./lcars-sdk/elements/blank";
// import block from "./lcars-sdk/elements/block";
// import button from "./lcars-sdk/elements/button";
// import cap from "./lcars-sdk/elements/cap";
// import column from "./lcars-sdk/elements/column";
// import complexButton from "./lcars-sdk/elements/complex-button";
// import content from "./lcars-sdk/elements/content";
// import details from "./lcars-sdk/elements/details";
// import elbow from "./lcars-sdk/elements/elbow";
// import endcap from "./lcars-sdk/elements/endcap";
// import footer from "./lcars-sdk/elements/footer";
// import header from "./lcars-sdk/elements/header";
// import htmlTag from "./lcars-sdk/elements/html-tag";
// import img from "./lcars-sdk/elements/img";
// import main from "./lcars-sdk/elements/main";
// import nav from "./lcars-sdk/elements/nav";
// import oval from "./lcars-sdk/elements/oval";
// import row from "./lcars-sdk/elements/row";
// import section from "./lcars-sdk/elements/section";
// import slider from "./lcars-sdk/elements/slider";
// import svg from "./lcars-sdk/elements/svg";
// import text from "./lcars-sdk/elements/text";
// import title from "./lcars-sdk/elements/title";
// import wrapper from "./lcars-sdk/elements/wrapper";
import { showMainView, showMainFrame } from "./js/Animations";
import Systemtime from "./components/Systemtime";
import Logs from "./components/Logs";

function App() {
  const uiColors = [
    "bg-color-1",
    "bg-color-2",
    "bg-color-3",
    "bg-color-4",
    "bg-color-5",
  ];

  //Unhide LCARS Interface
  useEffect(() => {
    showMainView();
    return () => {};
  }, []);

  //#region Hardcoded UI
  return (
    <div id="wpr_mainView" class="wrapper column flex-v flex-c-h">
      <div id="wrapperSID3wttzcnqe" class="wrapper header flex-h">
        <div id="wrapperSID2n9tjph4p" class="wrapper column flex-v">
          <div
            id="buttonSIDhybpg06vw"
            class="button bg-color-3 step-two hidden"
            onclick="play(2)"
          ></div>
          <div
            id="elbowSID7vwtva2hl"
            class="elbow default horizontal bottom-left bg-color-5 flex-c-v hidden"
          >
            <div id="barSIDxjwzdlad8" class="bar">
              <div id="blockSIDsr8k22dfu" class="block"></div>
            </div>
          </div>
        </div>
        <div id="wrapperSID4grmugwnd" class="wrapper flex-c-h flex-v">
          <div
            id="wrapperSID9cwrzgmfo"
            class="wrapper content hidden flex-c-v flex-h"
          >
            <div id="wrapperSIDnpltj5x5x" class="wrapper flex-c-v flex-h">
              <Logs />
            </div>
            <div id="wrapperSID8u7837ms0" class="wrapper flex-c-h flex-v">
              <div id="titleSID33g9m1vio" class="title">
                LCARS HOME SYSTEM
              </div>
              <Systemtime />
              <div id="wrapperSIDeuhyxyz4z" class="wrapper flex-h button-wrap">
                <div
                  id="buttonSID78cy19k2t"
                  class="button bg-grey-4 round"
                  onclick="play(2)"
                  data-label="GREY MODE"
                ></div>
                <div
                  id="buttonSIDn0lt6w6rh"
                  class="button bg-blue-2 round"
                  onclick="play(2)"
                  data-label="RELOAD"
                ></div>
                <div
                  id="guestWifiSwitch"
                  class="button bg-orange-4 round"
                  onclick="play(2)"
                  data-label="GUEST WIFI"
                ></div>
                <div
                  id="buttonSIDyi2s24boi"
                  class="button bg-color-5 round"
                  onclick="play(2)"
                  data-label="Test"
                ></div>
                <div
                  id="buttonSIDui46gi7u4"
                  class="button bg-color-2 round"
                  onclick="play(2)"
                  data-label="clean"
                ></div>
                <div
                  id="buttonSID146lkiysv"
                  class="button bg-color-5 round"
                  onclick="play(2)"
                ></div>
              </div>
            </div>
          </div>
          <div id="rowSID7zfyqtz3a" class="row frame flex-h">
            <div id="barSIDqs5xnc2hi" class="bar bg-color-1 hidden"></div>
            <div id="barSIDy64j00spg" class="bar bg-color-2 hidden"></div>
            <div id="barSIDi3q609b8m" class="bar bg-color-3 hidden"></div>
            <div
              id="barSIDoldnr8lzu"
              class="bar bg-color-5 flex-c-h hidden"
            ></div>
            <div id="barSIDk1d7yuo36" class="bar bg-color-4 hidden"></div>
            <div id="barSIDia6bftvp3" class="bar bg-color-4 hidden"></div>
            <div id="barSID1s6fsbbiq" class="bar bg-color-1 hidden"></div>
          </div>
        </div>
      </div>
      <div id="wrapperSIDgkaalrgvy" class="wrapper main flex-h flex-c-v">
        <div id="wrapperSIDvx5igyv5n" class="wrapper column flex-v">
          <div
            id="elbowSIDvqqb969rs"
            class="elbow default horizontal top-left bg-color-5 hidden"
          >
            <div id="barSID7ndws5075" class="bar">
              <div id="blockSIDasyww0lrz" class="block"></div>
            </div>
          </div>
          <div
            id="buttonSIDlymj9dqjd"
            class="button bg-color-2 hidden"
            onclick="play(2)"
            data-label="DASHBOARD"
          ></div>
          <div
            id="buttonSIDwmrlmu37z"
            class="button bg-color-4 hidden step-two"
            onclick="play(2)"
          ></div>
          <div
            id="buttonSID7r59osbl1"
            class="button bg-color-3 hidden"
            onclick="play(2)"
          ></div>
          <div
            id="buttonSIDntglo1ex8"
            class="button bg-color-2 hidden step-two"
            onclick="play(2)"
          ></div>
          <div
            id="buttonSIDeukie0ohw"
            class="button bg-color-5 hidden flex-c-v"
            onclick="play(2)"
          ></div>
          <div
            id="buttonSID9spzacj4j"
            class="button bg-color-3 hidden"
            onclick="play(2)"
            data-label="WIFI"
          ></div>
          <div
            id="buttonSIDp9gewhasz"
            class="button bg-color-2 hidden step-two"
            onclick="play(2)"
          ></div>
        </div>
        <div id="wrapperSIDfff6sprkp" class="wrapper column flex-c-h flex-v">
          <div id="rowSIDmnu78fmyz" class="row frame">
            <div id="barSIDvoe66jcdg" class="bar bg-color-4 hidden"></div>
            <div id="barSIDwwhzy6v1q" class="bar bg-color-3 hidden small"></div>
            <div id="barSIDmao7t1n0i" class="bar bg-color-5 hidden"></div>
            <div
              id="barSIDlu31trop1"
              class="bar bg-color-2 hidden flex-c-h"
            ></div>
            <div id="barSIDq4u8lkv3v" class="bar bg-color-2 hidden"></div>
            <div id="barSIDivuywe6cx" class="bar bg-color-5 hidden"></div>
            <div id="barSIDp8ipbh9rx" class="bar bg-color-2 hidden"></div>
          </div>
          <div id="wpr_centerControls" class="wrapper flex-h flex-c-v"></div>
        </div>
      </div>
    </div>
  );
  //#endregion

  //#region nemesisUI
  // const nemesisUI = {
  //   type: "wrapper",
  //   id: "wpr_viewport",
  //   version: "row",
  //   flex: "h",
  //   class: { scale: true, "red-alert": false },
  //   arrive: function () {
  //     var dom = this.dom;
  //     LCARS.helper.viewportZoom(dom, { width: 1440, height: 1080 });
  //     window.addEventListener("resize", function () {
  //       LCARS.helper.viewportZoom(dom, { width: 1440, height: 1080 });
  //     });
  //   },
  //   children: [
  //     //Main Area
  //     {
  //       type: "wrapper",
  //       version: "column",
  //       id: "wpr_mainView",
  //       flex: "v",
  //       flexc: "h",
  //       children: [
  //         //Header
  //         {
  //           type: "wrapper",
  //           version: "header",
  //           flex: "h",
  //           children: [
  //             //Elbow & Button
  //             {
  //               type: "wrapper",
  //               version: "column",
  //               flex: "v",
  //               children: [
  //                 {
  //                   type: "button",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   size: "step-two",
  //                   hidden: true,
  //                 },
  //                 {
  //                   type: "elbow",
  //                   version: "horizontal",
  //                   direction: "bottom-left",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   flexc: "v",
  //                   hidden: true,
  //                 },
  //               ],
  //             },

  //             {
  //               type: "wrapper",
  //               flexc: "h",
  //               flex: "v",
  //               children: [
  //                 //Header Content Area
  //                 {
  //                   type: "wrapper",
  //                   version: "content",
  //                   hidden: true,
  //                   flexc: "v",
  //                   flex: "h",
  //                   children: [
  //                     //Logs Area
  //                     {
  //                       type: "wrapper",
  //                       flexc: "v",
  //                       flex: "h",
  //                       children: [
  //                         {
  //                           id: "logs",
  //                           type: "text",
  //                           color: "text-color-1",
  //                           text: "",
  //                         },
  //                       ],
  //                     },

  //                     {
  //                       type: "wrapper",
  //                       flexc: "h",
  //                       flex: "v",
  //                       children: [
  //                         //Header Title
  //                         { type: "title", text: "LCARS HOME SYSTEM" },
  //                         {
  //                           type: "title",
  //                           id: "systemTime",
  //                           size: "half",
  //                           text: setInterval(function () {
  //                             //writeSystemTime();
  //                           }, 1000),
  //                         },

  //                         //Header Round Button Group
  //                         {
  //                           type: "wrapper",
  //                           flex: "h",
  //                           version: "button-wrap",
  //                           children: [
  //                             {
  //                               type: "button",
  //                               color: "bg-grey-4",
  //                               version: "round",
  //                               label: "GREY MODE",
  //                               //href: "javascript:activateGreyMode();",
  //                             },
  //                             {
  //                               type: "button",
  //                               color: "bg-blue-2",
  //                               version: "round",
  //                               label: "RELOAD",
  //                               //href: "javascript:window.location.reload(true);",
  //                             },
  //                             {
  //                               type: "button",
  //                               id: "guestWifiSwitch",
  //                               color: "bg-orange-4",
  //                               version: "round",
  //                               label: "GUEST WIFI",
  //                               //href: "javascript:toggleGuestWifi();",
  //                             },
  //                             {
  //                               type: "button",
  //                               color: LCARS.helper.aRandColor(uiColors),
  //                               version: "round",
  //                               label: "Test",
  //                               //href: "javascript:raMainViewSetup();",
  //                             },
  //                             {
  //                               type: "button",
  //                               color: LCARS.helper.aRandColor(uiColors),
  //                               version: "round",
  //                               label: "clean",
  //                               //href: "javascript:startClean();",
  //                             },
  //                             {
  //                               type: "button",
  //                               color: LCARS.helper.aRandColor(uiColors),
  //                               version: "round",
  //                             },
  //                           ],
  //                         },
  //                       ],
  //                     },
  //                   ],
  //                 },

  //                 //Header Bottom Bars
  //                 {
  //                   type: "row",
  //                   version: "frame",
  //                   flex: "h",
  //                   children: [
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       flexc: "h",
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },

  //         //Main Content Area
  //         {
  //           type: "wrapper",
  //           version: "main",
  //           flex: "h",
  //           flexc: "v",
  //           children: [
  //             //Left Columns & Elbow
  //             {
  //               type: "wrapper",
  //               version: "column",
  //               flex: "v",
  //               children: [
  //                 {
  //                   type: "elbow",
  //                   version: "horizontal",
  //                   direction: "top-left",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   class: "step-two",
  //                   hidden: true,
  //                 },
  //                 {
  //                   type: "button",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   hidden: true,
  //                   label: "DASHBOARD",
  //                   //href: "javascript:renderDashboard()",
  //                 },
  //                 {
  //                   type: "button",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   hidden: true,
  //                   size: "step-two",
  //                 },
  //                 {
  //                   type: "button",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   hidden: true,
  //                 },
  //                 {
  //                   type: "button",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   hidden: true,
  //                   size: "step-two",
  //                 },
  //                 {
  //                   type: "button",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   hidden: true,
  //                   flexc: "v",
  //                 },
  //                 {
  //                   type: "button",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   hidden: true,
  //                   label: "WIFI",
  //                   //href: "javascript:renderWiFi();",
  //                 },
  //                 {
  //                   type: "button",
  //                   color: LCARS.helper.aRandColor(uiColors),
  //                   hidden: true,
  //                   size: "step-two",
  //                 },
  //               ],
  //             },

  //             {
  //               type: "wrapper",
  //               version: "column",
  //               flexc: "h",
  //               flex: "v",
  //               children: [
  //                 //Top Bars Group
  //                 {
  //                   type: "row",
  //                   version: "frame",
  //                   children: [
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                       size: "small",
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                       flexc: "h",
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                     {
  //                       type: "bar",
  //                       color: LCARS.helper.aRandColor(uiColors),
  //                       hidden: true,
  //                     },
  //                   ],
  //                 },

  //                 //Start Main Content Wrapper
  //                 {
  //                   type: "wrapper",
  //                   id: "wpr_centerControls",
  //                   flex: "h",
  //                   flexc: "v",
  //                   children: [
  //                     //Here, content of Views will be rendered
  //                   ],
  //                 },
  //                 //End Main Content Wrapper
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   //#endregion
  // };
  //#endregion

  //return LCARS.create(nemesisUI).dom;
}

export default App;
