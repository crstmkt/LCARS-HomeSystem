import React, { useEffect, useState } from "react";
import RoundedButton from "./RoundedButton";
import { callService } from "../API/dist/index.js";
import { Link } from "react-router-dom";

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

//#region roomsTopButtons
export const roomsTopButtons = [
  {
    id: 1,
    primaryColor: "bg-color-1",
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "corridor",
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
    group: "rooms",
    dataLabel: "bedroom",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 3,
    primaryColor: "bg-color-3",
    secondaryColor: "bg-color-4",
    group: "rooms",
    dataLabel: "bath",
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
    group: "rooms",
    dataLabel: "livingroom",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 5,
    primaryColor: "bg-color-5",
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "kitchen",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 6,
    primaryColor: "bg-color-6",
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "attic",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
];
//#endregion

//#region devicesTopButtons
export const devicesTopButtons = [
  {
    id: 1,
    primaryColor: "bg-color-1",
    secondaryColor: "bg-color-2",
    dataLabel: "Devices1",
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
    dataLabel: "Devices2",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 3,
    primaryColor: "bg-color-3",
    secondaryColor: "bg-color-4",
    dataLabel: "Devices3",
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
    dataLabel: "Devices4",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 5,
    primaryColor: "bg-color-5",
    secondaryColor: "bg-color-2",
    dataLabel: "Devices5",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 6,
    primaryColor: "bg-color-6",
    secondaryColor: "bg-color-2",
    dataLabel: "Devices6",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
];
//#endregion

//#region energyTopButtons
export const energyTopButtons = [
  {
    id: 1,
    primaryColor: "bg-color-1",
    secondaryColor: "bg-color-2",
    dataLabel: "Energy1",
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
    dataLabel: "Energy2",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 3,
    primaryColor: "bg-color-3",
    secondaryColor: "bg-color-4",
    dataLabel: "Energy3",
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
    dataLabel: "Energy4",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 5,
    primaryColor: "bg-color-5",
    secondaryColor: "bg-color-2",
    dataLabel: "Energy5",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 6,
    primaryColor: "bg-color-6",
    secondaryColor: "bg-color-2",
    dataLabel: "Energy6",
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
//#endregion

//#region networkTopButtons
export const networkTopButtons = [
  {
    id: 1,
    primaryColor: "bg-color-1",
    secondaryColor: "bg-color-2",
    dataLabel: "Network1",
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
    dataLabel: "Network2",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 3,
    primaryColor: "bg-color-3",
    secondaryColor: "bg-color-4",
    dataLabel: "GUEST WIFI",
    on_Click: () => {
      callService(window.connection, "homeassistant", "toggle", {
        entity_id: "switch.lcars_srv_wi_fi_lcars_net_g",
      });
    },
    onButtonChange: (button) => TopButtons.handleTopButtonChange(button),
  },
  {
    id: 4,
    primaryColor: "bg-color-4",
    secondaryColor: "bg-color-2",
    dataLabel: "Network4",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 5,
    primaryColor: "bg-color-5",
    secondaryColor: "bg-color-2",
    dataLabel: "Network5",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 6,
    primaryColor: "bg-color-6",
    secondaryColor: "bg-color-2",
    dataLabel: "Network6",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
];
//#endregion

//#region entitiesTopButtons
export const entitiesTopButtons = [
  {
    id: 1,
    primaryColor: "bg-color-1",
    secondaryColor: "bg-color-2",
    dataLabel: "Entities1",
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
    dataLabel: "Entities2",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 3,
    primaryColor: "bg-color-3",
    secondaryColor: "bg-color-4",
    dataLabel: "Entities3",
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
    dataLabel: "Entities4",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 5,
    primaryColor: "bg-color-5",
    secondaryColor: "bg-color-2",
    dataLabel: "Entities5",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
  {
    id: 6,
    primaryColor: "bg-color-6",
    secondaryColor: "bg-color-2",
    dataLabel: "Entities6",
    on_Click: () => {
      return null;
    },
    //onButtonChange: (button) => handleTopButtonChange(button),
  },
];
//#endregion

export default function TopButtons({ RoundedButtonArray }) {
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

  return topButtons.map((i) => {
    return (
      <Link to={"/" + i.group + "/" + i.dataLabel}>
        <RoundedButton
          id={i.id}
          primaryColor={i.primaryColor}
          secondaryColor={i.secondaryColor}
          group={i.group}
          isActive={i.isActive}
          dataLabel={i.dataLabel}
          on_Click={i.on_Click}
          onButtonChange={handleTopButtonChange}
        />
      </Link>
    );
  });
}
