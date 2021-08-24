import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import RoundedButton from "./RoundedButton";

//#region defaultTopButtons
export const defaultTopButtons = [
  {
    id: 1,
    primaryColor: "bg-color-1",
    secondaryColor: "bg-color-2",
    dataLabel: "Button1",
    on_Click: () => {
      return null;
      //   console.log(
      //     entitiesCollection["switch.lcars_srv_wi_fi_lcars_net_g"].state
      //   );
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 2,
    primaryColor: "bg-color-2",
    secondaryColor: "bg-color-2",
    dataLabel: "Button2",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 3,
    primaryColor: "bg-color-3",
    secondaryColor: "bg-color-4",
    dataLabel: "Button3",
    on_Click: () => {
      return null;
      // callService(window.connection, "homeassistant", "toggle", {
      //   entity_id: "switch.lcars_srv_wi_fi_lcars_net_g",
      // });
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 4,
    primaryColor: "bg-color-4",
    secondaryColor: "bg-color-2",
    dataLabel: "Button4",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 5,
    primaryColor: "bg-color-5",
    secondaryColor: "bg-color-2",
    dataLabel: "Button5",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 6,
    primaryColor: "bg-color-6",
    secondaryColor: "bg-color-2",
    dataLabel: "Button6",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
];
//#endregion

//#region weatherTopButtons
export const weatherTopButtons = [
  {
    id: 1,
    primaryColor: "bg-color-1",
    secondaryColor: "bg-color-2",
    dataLabel: "Weather1",
    on_Click: () => {
      return null;
      //   console.log(
      //     entitiesCollection["switch.lcars_srv_wi_fi_lcars_net_g"].state
      //   );
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 2,
    primaryColor: "bg-color-2",
    secondaryColor: "bg-color-2",
    dataLabel: "Weather2",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 3,
    primaryColor: "bg-color-3",
    secondaryColor: "bg-color-4",
    dataLabel: "Weather3",
    on_Click: () => {
      return null;
      // callService(window.connection, "homeassistant", "toggle", {
      //   entity_id: "switch.lcars_srv_wi_fi_lcars_net_g",
      // });
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 4,
    primaryColor: "bg-color-4",
    secondaryColor: "bg-color-2",
    dataLabel: "Weather4",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 5,
    primaryColor: "bg-color-5",
    secondaryColor: "bg-color-2",
    dataLabel: "Weather5",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 6,
    primaryColor: "bg-color-6",
    secondaryColor: "bg-color-2",
    dataLabel: "Weather6",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
];

export default function TopButtons(RoundedButtonArray) {
  const [topButtons, setTopButtons] = useState(RoundedButtonArray);

  const handleTopButtonChange = (button) => {
    setTopButtons((prevButtonList) =>
      prevButtonList.map((btn) => {
        if (btn.id === button.id) return button;
        return btn;
      })
    );
  };

  useEffect(() => {
    setTopButtons(RoundedButtonArray);
    return () => {};
  }, [RoundedButtonArray]);

  return topButtons.RoundedButtonArray.map((i) => {
    return (
      <RoundedButton
        id={i.id}
        primaryColor={i.primaryColor}
        secondaryColor={i.secondaryColor}
        isActive={i.isActive}
        dataLabel={i.dataLabel}
        on_Click={i.on_Click}
        onButtonChange={handleTopButtonChange}
      />
    );
  });
}
