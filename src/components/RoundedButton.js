import React from "react";

export default function RoundedButton({ color, dataLabel, on_Click }) {
  const uiColors = [
    "bg-color-1",
    "bg-color-2",
    "bg-color-3",
    "bg-color-4",
    "bg-color-5",
  ];

  return (
    <div
      className={"button round " + color}
      data-label={dataLabel}
      onClick={on_Click}
    ></div>
  );
}
