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
        color={LCARSColorPalette.darkgrey}
        version={"top-left"}
        orientation={"horizontal"}
        hidden={"true"}
      ></LCARSElbow>
      <Link to={"/dashboard"}>
        <LCARSButton
          color={LCARSColorPalette.mediumgrey}
          hidden={"true"}
          dataLabel="DASHBOARD"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/rooms">
        <LCARSButton
          color={LCARSColorPalette.mediumgrey}
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
          color={LCARSColorPalette.mediumgrey}
          hidden={true}
          dataLabel="DEVICES"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/energy">
        <LCARSButton
          color={LCARSColorPalette.mediumgrey}
          hidden={true}
          dataLabel="ENERGY"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/weather">
        <LCARSButton
          color={LCARSColorPalette.mediumgrey}
          hidden={true}
          dataLabel="WEATHER"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/network">
        <LCARSButton
          color={LCARSColorPalette.mediumgrey}
          hidden={true}
          dataLabel="NETWORK"
          onClick={() => {
            return null;
          }}
        ></LCARSButton>
      </Link>
      <Link to="/entities">
        <LCARSButton
          color={LCARSColorPalette.mediumgrey}
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
