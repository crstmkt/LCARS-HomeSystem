import styled from "styled-components";
import { LCARSBar } from "../lcars-styled-components";
import { StyledLCARSElbow } from "./LCARSElbow.style";

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

const LCARSElbow = ({
  color,
  hidden = false,
  orientation = "horizontal",
  version = "top-left",
  size = "default",
  dataLabel = "",
  onClick = null,
  additionalClasses = "",
}) => {
  var classes = "elbow";
  classes += hidden ? " hidden" : "";
  classes += " " + orientation;
  classes += " " + version;
  classes += " " + size;
  classes += addClasses(additionalClasses);
  return (
    <StyledLCARSElbow
      color={color}
      className={classes}
      data-label={dataLabel}
      onClick={onClick}
    >
      <LCARSBar color={color} isElbow={true} additionalClasses="bar"></LCARSBar>
    </StyledLCARSElbow>
  );
};

export default LCARSElbow;
