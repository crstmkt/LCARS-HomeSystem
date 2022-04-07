import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LCARSButton,
  LCARSColorPalette,
} from "../../lcars-styled-components/lcars-styled-components";

//#region defaultTopButtons
export const defaultTopButtons = [
  {
    id: 1,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Button1",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Button2",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-4",
    dataLabel: "Button3",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Button4",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Button5",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Button6",
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
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "corridor",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "bedroom",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-4",
    group: "rooms",
    dataLabel: "bath",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "livingroom",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "kitchen",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    group: "rooms",
    dataLabel: "attic",
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
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices1",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices2",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-4",
    dataLabel: "Devices3",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices4",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices5",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Devices6",
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
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy1",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy2",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-4",
    dataLabel: "Energy3",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy4",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy5",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Energy6",
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
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather1",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather2",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-4",
    dataLabel: "Weather3",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather4",
    version: "round",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather5",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Weather6",
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
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Network1",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Network2",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-4",
    dataLabel: "GUEST WIFI",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Network4",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Network5",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Network6",
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
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities1",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 2,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities2",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 3,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-4",
    dataLabel: "Entities3",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 4,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities4",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 5,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities5",
    on_Click: () => {
      return null;
    },
  },
  {
    id: 6,
    primaryColor: LCARSColorPalette.mediumgrey,
    secondaryColor: "bg-color-2",
    dataLabel: "Entities6",
    on_Click: () => {
      return null;
    },
  },
];
//#endregion

export default function TopButtons({ url }) {
  const [topButtons, setTopButtons] = useState(defaultTopButtons);

  const link = url.split("/");

  useEffect(() => {
    switch (link[1]) {
      case "dashboard":
      case "":
      default:
        setTopButtons(defaultTopButtons);
        break;
      case "rooms":
        setTopButtons(roomsTopButtons);
        break;
      case "devices":
        setTopButtons(devicesTopButtons);
        break;
      case "energy":
        setTopButtons(energyTopButtons);
        break;
      case "weather":
        setTopButtons(weatherTopButtons);
        break;
      case "network":
        setTopButtons(networkTopButtons);
        break;
      case "entities":
        setTopButtons(entitiesTopButtons);
        break;
    }
    return () => {};
  }, [url]);

  return topButtons.map((i) => {
    return (
      <Link to={"/" + i.group + "/" + i.dataLabel}>
        <LCARSButton
          color={i.primaryColor}
          dataLabel={i.dataLabel}
          onClick={i.on_Click}
          version="round"
          minheight="5.5vh"
          minwidth="155px"
          additionalClasses="button" //TODO: refactor Margin approch from App.css Z 29
        ></LCARSButton>
      </Link>
    );
  });
}
