import React from "react";

export default function SVGWashingMachine({
  strokeColor = "#f93",
  width = 150,
  height = 150,
}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1920"
        width={width}
        height={height}
      >
        <style>
          .st0{"{fill:#000}"}
          .st1
          {"{fill:none;stroke:" +
            strokeColor +
            ";stroke-width:50;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"}
        </style>
        <path
          className="st0"
          d="M1291.9 388c0 34.9 28.3 63.2 63.2 63.2 34.9 0 63.2-28.3 63.2-63.2s-28.3-63.2-63.2-63.2c-34.9 0-63.2 28.3-63.2 63.2zm250.3-171.1v334.8H377.8V216.9h1164.4zM1045 451.3V324.8H821v126.5h224zm-332 0V324.8H489v126.5h224z"
          id="Layer_8"
        />
        <path
          className="st0"
          d="M1355.1 324.8c34.9 0 63.2 28.3 63.2 63.2s-28.3 63.2-63.2 63.2c-34.9 0-63.2-28.3-63.2-63.2s28.3-63.2 63.2-63.2zm-534.1 0v126.5h224V324.8H821zm-332 0v126.5h224V324.8H489z"
          id="Layer_9"
        />
        <path
          className="st0"
          d="M1542.2 551.7V1703H377.8V551.7h1164.4zm-97.9 587.3c0-48.9-29.7-90.8-72.1-108.7-.4-.2-.8-.3-1.3-.5l.4-1c-19.7-82.4-63.5-155.4-123.5-211.2-75.5-70.2-176.7-113.1-287.9-113.1-196.8 0-362.3 134.5-409.5 316.6-8.8 34-13.5 69.6-13.5 106.4 0 233.6 189.4 423 423 423 188.4 0 348-123.2 402.7-293.4l1.8-6.3c46.6-16 79.9-60 79.9-111.8z"
          id="Layer_10"
        />
        <path
          className="st0"
          d="M1372.3 1030.3c42.3 17.9 72.1 59.8 72.1 108.7 0 51.8-33.4 95.8-79.8 111.7-12 4.1-24.8 6.3-38.2 6.3-65.2 0-118-52.8-118-118s52.8-118 118-118c15.8 0 30.9 3.1 44.7 8.8.3.1.8.3 1.2.5z"
          id="Layer_11"
        />
        <path
          className="st0"
          d="M1247.9 817.6C1009 801 988.9 1127.4 773 1127.4c-192.1 0-222.5-106.4-222.5-106.4C597.7 838.9 763.2 704.4 960 704.4c111.2 0 212.4 43 287.9 113.2z"
          id="Layer_12"
        />
        <path
          className="st0"
          d="M1208.3 1139c0 65.2 52.8 118 118 118 13.4 0 26.2-2.2 38.2-6.3l-1.8 6.3c-54.7 170.2-214.3 293.4-402.7 293.4-233.6 0-423-189.4-423-423 0-36.8 4.7-72.4 13.5-106.4 0 0 30.3 106.4 222.5 106.4 215.9 0 236-326.4 474.9-309.8 60 55.8 103.8 128.8 123.5 211.2l-.4 1c-13.8-5.6-28.9-8.8-44.7-8.8-65.1 0-118 52.8-118 118z"
          id="Layer_13"
        />
        <g id="STROKES">
          <g id="XMLID_2_">
            <circle className="st1" cx="1355.1" cy="388" r="63.2" />
            <path
              className="st1"
              d="M1542.2 551.7v1151.4H377.8V216.9h1164.4z"
            />
            <path className="st1" d="M489 324.8h224v126.5H489z" />
            <path className="st1" d="M821 324.8h224v126.5H821z" />
            <path className="st1" d="M377.8 551.7h1164.4" />
            <path
              className="st1"
              d="M1371.4 1028.8c-19.7-82.4-63.5-155.4-123.5-211.2-75.5-70.2-176.7-113.1-287.9-113.1-196.8 0-362.3 134.5-409.5 316.6-8.8 34-13.5 69.6-13.5 106.4 0 233.6 189.4 423 423 423 188.4 0 348-123.2 402.7-293.4l1.8-6.3"
            />
            <path
              className="st1"
              d="M1364.6 1250.7c46.4-15.9 79.8-59.9 79.8-111.7 0-48.9-29.7-90.8-72.1-108.7-.4-.2-.8-.3-1.3-.5-13.8-5.6-28.9-8.8-44.7-8.8-65.2 0-118 52.8-118 118s52.8 118 118 118c13.4 0 26.3-2.2 38.3-6.3z"
            />
            <path
              className="st1"
              d="M550.5 1021s30.3 106.4 222.5 106.4c215.9 0 236-326.4 474.9-309.8"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
