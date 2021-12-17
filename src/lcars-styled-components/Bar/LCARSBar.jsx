import styled from "styled-components";
import { StyledLCARSBar } from "./LCARSBar.styled";
import { LCARSBlock } from "../lcars-styled-components";

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

const LCARSBar = ({
  color,
  hidden = false,
  version = "",
  dataLabel = "",
  onClick = null,
  additionalClasses = "",
  isElbow = false,
}) => {
  var classes = hidden ? "hidden" : "";
  classes += version;
  classes += addClasses(additionalClasses);
  return (
    <StyledLCARSBar
      color={color}
      className={classes}
      data-label={dataLabel}
      onClick={onClick}
      isElbow={isElbow}
    >
      {isElbow ? <LCARSBlock additionalClasses="block" /> : ""}
    </StyledLCARSBar>
  );
};

export default LCARSBar;
