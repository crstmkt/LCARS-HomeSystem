import React from "react";

export default function SVGBoiler({
  strokeColor = "#f93",
  width = 150,
  height = 150,
}) {
  return (
    <div>
      <svg
        fill="none"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="M5 5C5 2.79086 6.79086 1 9 1H15C17.2091 1 19 2.79086 19 5V21H15.144L15.8865 22.9999H13.8865L13.144 21H11.144L11.8865 22.9999H9.88653L9.14397 21H5V5ZM9 3H15C16.1046 3 17 3.89543 17 5V7H7V5C7 3.89543 7.89543 3 9 3ZM7 9H17V19H7V9Z"
          fill={strokeColor}
          fill-rule="evenodd"
        />
      </svg>
    </div>
  );
}
