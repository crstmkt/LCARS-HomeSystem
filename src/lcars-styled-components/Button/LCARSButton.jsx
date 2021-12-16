import styled from "styled-components";
import { StyledLCARSButton } from "./LCARSButton.style";

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

const LCARSButton = ({
  color,
  hidden = false,
  version = false,
  dataLabel = "",
  onClick = null,
  additionalClasses = "",
}) => {
  var classes = hidden ? "hidden" : "";
  classes += " " + version;
  classes += addClasses(additionalClasses);
  return (
    <StyledLCARSButton
      color={color}
      className={classes}
      data-label={dataLabel}
      onClick={onClick}
    ></StyledLCARSButton>
  );
};

export default LCARSButton;
