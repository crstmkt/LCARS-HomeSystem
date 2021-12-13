import React, { useEffect, useState } from "react";
import { callService } from "../API/dist/index.js";
import { Link } from "react-router-dom";
import { LCARSButton } from "../lcars-styled-components/Button/LCARSButton";
import { LCARSColorPalette } from "../lcars-styled-components/ColorPalette";

//#region defaultTopButtons
export const defaultTopButtons = [
  {
    id: 1,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    version: "round",
    dataLabel: "Button1",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.Orange2,
    secondaryColor: "bg-color-2",
    dataLabel: "Button2",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.Orange3,
    secondaryColor: "bg-color-4",
    dataLabel: "Button3",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.Orange4,
    secondaryColor: "bg-color-2",
    dataLabel: "Button4",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.Orange5,
    secondaryColor: "bg-color-2",
    dataLabel: "Button5",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Button6",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
];
//#endregion

//#region roomsTopButtons
export const roomsTopButtons = [
  {
    id: 1,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "corridor",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.Orange2,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "bedroom",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.Orange3,
    secondaryColor: "bg-color-4",
    group: "rooms",
    dataLabel: "bath",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.Orange4,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "livingroom",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.Orange5,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "kitchen",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "attic",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
];
//#endregion

//#region devicesTopButtons
export const devicesTopButtons = [
  {
    id: 1,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices1",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.Orange2,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices2",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.Orange3,
    secondaryColor: "bg-color-4",
    dataLabel: "Devices3",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.Orange4,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices4",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.Orange5,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices5",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices6",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
];
//#endregion

//#region energyTopButtons
export const energyTopButtons = [
  {
    id: 1,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy1",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.Orange2,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy2",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.Orange3,
    secondaryColor: "bg-color-4",
    dataLabel: "Energy3",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.Orange4,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy4",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.Orange5,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy5",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy6",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
];
//#endregion

//#region weatherTopButtons
export const weatherTopButtons = [
  {
    id: 1,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather1",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.Orange2,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather2",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.Orange3,
    secondaryColor: "bg-color-4",
    dataLabel: "Weather3",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.Orange4,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather4",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.Orange5,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather5",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather6",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
];
//#endregion

//#region networkTopButtons
export const networkTopButtons = [
  {
    id: 1,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Network1",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.Orange2,
    secondaryColor: "bg-color-2",
    dataLabel: "Network2",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.Orange3,
    secondaryColor: "bg-color-4",
    dataLabel: "GUEST WIFI",
    version: "round",
    on_Click: () => {
      callService(window.connection, "homeassistant", "toggle", {
        entity_id: "switch.lcars_srv_wi_fi_lcars_net_g",
      });
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.Orange4,
    secondaryColor: "bg-color-2",
    dataLabel: "Network4",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.Orange5,
    secondaryColor: "bg-color-2",
    dataLabel: "Network5",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Network6",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
];
//#endregion

//#region entitiesTopButtons
export const entitiesTopButtons = [
  {
    id: 1,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities1",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.Orange2,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities2",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.Orange3,
    secondaryColor: "bg-color-4",
    dataLabel: "Entities3",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.Orange4,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities4",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.Orange5,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities5",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.Orange1,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities6",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
];
//#endregion

export default function TopButtons({ RoundedButtonArray }) {
  const [topButtons, setTopButtons] = useState(RoundedButtonArray);

  useEffect(() => {
    setTopButtons(RoundedButtonArray);
    return () => {};
  }, [RoundedButtonArray]);

  return topButtons.map((i) => {
    return (
      <Link to={"/" + i.group + "/" + i.dataLabel}>
        <LCARSButton
          color={i.primaryColor}
          dataLabel={i.dataLabel}
          onClick={i.on_Click}
          version={i.version}
          additionalClasses="button" //TODO: refactor Margin approch from App.css Z 29
        ></LCARSButton>
        {/* <RoundedButton
          id={i.id}
          primaryColor={i.secondaryColor}
          secondaryColor={i.secondaryColor}
          group={i.group}
          isActive={i.isActive}
          dataLabel={i.dataLabel}
          on_Click={i.on_Click}
        /> */}
      </Link>
    );
  });
}
