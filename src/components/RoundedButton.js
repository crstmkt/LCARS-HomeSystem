import React from "react";
//import { entitiesCollection } from "../API/API"; for later use to check entities state

export default function RoundedButton({
  id,
  primaryColor,
  secondaryColor,
  dataLabel,
  on_Click,
  onButtonChange,
}) {
  const handleClick = () => {
    on_Click();
    if (true) {
      var temp = primaryColor;
      primaryColor = secondaryColor;
      secondaryColor = temp;
      onButtonChange({
        id,
        primaryColor,
        secondaryColor,
        dataLabel,
        on_Click,
        onButtonChange,
      });
    }
  };

  return (
    <div
      className={"button round " + primaryColor}
      data-label={dataLabel}
      onClick={handleClick}
    ></div>
  );
}
