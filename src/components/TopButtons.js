import React, { useEffect, useState } from "react";
import RoundedButton from "./RoundedButton";

export default function TopButtons({ buttons }) {
  if (Array.isArray(buttons)) {
    return (
      <div id="wrapperSIDeuhyxyz4z" class="wrapper flex-h button-wrap">
        {buttons.map((i) => {
          return (
            <RoundedButton
              color={i.color}
              dataLabel={i.dataLabel}
              on_Click={i.on_Click}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div id="wrapperSIDeuhyxyz4z" class="wrapper flex-h button-wrap"></div>
    );
  }
}
