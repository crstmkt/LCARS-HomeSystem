import styled from "styled-components";
import { StyledLCARSBlock } from "./LCARSBlock.style";

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

const LCARSBlock = ({
  color,
  hidden = false,
  version = "",
  dataLabel = "",
  onClick = null,
  additionalClasses = "",
}) => {
  var classes = hidden ? "hidden" : "";
  classes += version;
  classes += addClasses(additionalClasses);
  return (
    <StyledLCARSBlock
      color={color}
      className={classes}
      data-label={dataLabel}
      onClick={onClick}
    ></StyledLCARSBlock>
  );
};

export default LCARSBlock;
