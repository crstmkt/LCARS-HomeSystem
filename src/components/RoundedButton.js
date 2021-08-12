import React from "react";

export default function RoundedButton({ color, dataLabel, on_Click }) {
  return (
    <div
      className={"button round " + color}
      data-label={dataLabel}
      onClick={on_Click}
    ></div>
  );
}
