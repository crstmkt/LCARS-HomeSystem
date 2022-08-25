import React from "react";
import { Link } from "react-router-dom";
import {
  LCARSElbow,
  LCARSButton,
  LCARSColorPalette,
} from "../../lcars-styled-components/lcars-styled-components";
import "./NavMenu.css";

function NavMenu() {
  return (
    <nav class="wrapper flex-v">
      <LCARSElbow
        color={LCARSColorPalette.Gold}
        version={"top-left"}
        orientation={"horizontal"}
        hidden={"true"}
      ></LCARSElbow>
      <Link to={"/dashboard"}>
        <LCARSButton
          color={LCARSColorPalette.Orange}
          hidden={"true"}
          dataLabel="DASHBOARD"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/rooms">
        <LCARSButton
          color={LCARSColorPalette.OrangePeel}
          hidden={true}
          dataLabel="ROOMS"
          onClick={() => {
            return null;
          }}
          additionalClasses=""
        ></LCARSButton>
      </Link>
      <Link to="/devices">
        <LCARSButton
          color={LCARSColorPalette.BahamaBlue}
          hidden={true}
          dataLabel="DEVICES"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/energy">
        <LCARSButton
          color={LCARSColorPalette.Lavender}
          hidden={true}
          dataLabel="ENERGY"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/weather">
        <LCARSButton
          color={LCARSColorPalette.LightBlue}
          hidden={true}
          dataLabel="WEATHER"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/network">
        <LCARSButton
          color={LCARSColorPalette.Yellow}
          hidden={true}
          dataLabel="NETWORK"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/entities">
        <LCARSButton
          color={LCARSColorPalette.Cosmic}
          hidden={true}
          dataLabel="ENTITIES"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
    </nav>
  );
}

export default NavMenu;
