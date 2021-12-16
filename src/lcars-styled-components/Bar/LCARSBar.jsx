import styled from "styled-components";
import { LCARSBlock } from "../Block/LCARSBlock";

const StyledLCARSBar = styled.div`
  position: relative;
  min-height: 30px;
  min-width: 30px;
  background: inherit;
  &:before {
    font-size: inherit;
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
    padding: 4px 8px;
    letter-spacing: -1px;
    line-height: 1.25;
    overflow: hidden;
    max-height: 100%;
    white-space: pre;
  }
  &:after {
    font-size: inherit;
    overflow: hidden;
    display: block;
    position: absolute;
    left: 0px;
    top: 2px;
    right: 0px;
    padding: 4px 8px;
    letter-spacing: -1px;
    line-height: 1.25;
    max-height: 50%;
    white-space: pre;
  }
`;

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

export const LCARSBar = ({
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
