import styled from "styled-components";
import { LCARSBar } from "../Bar/LCARSBar";
import { LCARSBlock } from "../Block/LCARSBlock";

const StyledLCARSElbow = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: ${(props) => props.color || "lightgrey"};
  &:before {
    font-size: 20px;
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    padding: 5px 7px;
    letter-spacing: -1px;
    line-height: 1.25;
    z-index: 2;
    background-color: transparent;
    background-clip: content-box;
    max-height: 100%;
    overflow: hidden;
  }
  &:after {
    font-size: 20px;
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    padding: 5px 7px 5px;
    letter-spacing: -1px;
    line-height: 1.25;
    z-index: 2;
    background-color: transparent;
    background-clip: content-box;
    max-height: 100%;
    overflow: hidden;
  }
  &.block {
    position: absolute;
    z-index: 1;
    background-color: transparent;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  &.bar {
    position: absolute;
    background-color: ${(props) => props.color || "lightgrey"};
    border-color: ${(props) => props.color || "lightgrey"};
  }
  &.default.horizontal {
    min-width: 92.5px;
    min-height: 92.5px;
  }
  &.default.horizontal .block {
    min-height: 35px;
    min-width: 35px;
    border-width: 20px;
    border-style: solid;
  }
  &.default.horizontal .bar {
    max-height: 30px;
    min-width: 50px;
  }
  &.top-left.default.horizontal {
    border-top-left-radius: 92.5px;
    text-align: right;
  }
  &.elbow.top-left .bar .block {
    border-left-color: ${(props) => props.color || "lightgrey"};
    border-top-color: ${(props) => props.color || "lightgrey"};
  }

  &.top-left.default.horizontal .bar {
    top: 0px;
    left: calc(100% - 5px);
  }
  &.top-left.default.horizontal .block {
    top: calc(100% - 20px);
    left: -15px;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    border-top-left-radius: 70px;
    border-bottom-right-radius: 50px;
  }
  &.top-left.default.horizontal:before {
    bottom: 0px;
    left: 10px;
  }
  &.top-left.default.horizontal:after {
    top: 0px;
    left: 70px;
  }
`;

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

export const LCARSElbow = ({
  color,
  hidden = false,
  version = false,
  dataLabel = "",
  onClick = null,
  additionalClasses = "",
}) => {
  var classes = hidden ? "hidden" : "";
  classes += version;
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
