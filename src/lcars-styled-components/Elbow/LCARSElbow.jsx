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
  version = "",
  dataLabel = "",
  onClick = null,
  additionalClasses = "",
}) => {
  var classes = "lcars-elbow";
  classes += hidden ? " hidden" : "";
  classes += " " + version;
  classes += addClasses(additionalClasses);
  return (
    <StyledLCARSElbow
      color={color}
      className={classes}
      data-label={dataLabel}
      onClick={onClick}
    ></StyledLCARSElbow>
  );
};

export default LCARSElbow;
