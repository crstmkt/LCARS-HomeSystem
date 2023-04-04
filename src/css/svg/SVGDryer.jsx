import React from "react";

export default function SVGDryer({
  strokeColor = "#f93",
  width = 150,
  height = 150,
}) {
  return (
    <div>
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <defs>
          <path
            fill={strokeColor}
            id="i-448"
            d="M36,10H26V6h10V10z M17,30c0-3.86,3.141-7,7-7s7,3.14,7,7c0,3.859-3.141,7-7,7S17,33.859,17,30z M19,30c0,2.756,2.243,5,5,5 s5-2.244,5-5c0-2.758-2.243-5-5-5S19,27.242,19,30z M14,10c1.103,0,2-0.897,2-2c0-1.104-0.897-2-2-2s-2,0.896-2,2 C12,9.103,12.897,10,14,10z M40,2v44H8V2H40z M38,4H10v40h28V4z M13,30c0-6.066,4.935-11,11-11s11,4.934,11,11 c0,6.064-4.935,11-11,11S13,36.064,13,30z M15,30c0,4.962,4.037,9,9,9s9-4.038,9-9c0-4.963-4.037-9-9-9S15,25.037,15,30z"
          />
        </defs>

        <use x="0" y="0" href="#i-448" />
      </svg>
    </div>
  );
}
