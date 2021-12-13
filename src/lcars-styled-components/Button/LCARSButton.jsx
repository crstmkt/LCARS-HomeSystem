import styled from "styled-components";

const StyledLCARSButton = styled.div`
  position: relative;
  min-height: 60px;
  min-width: 150px;
  cursor: pointer;
  background: ${(props) => props.color || "lightgrey"};
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
    content: attr(data-label);
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
    content: attr(data-altLabel);
  }
`;

function isVersion(round) {
  var retVal = "";
  switch (round) {
    default:
      retVal = "";
      break;
    case true:
    case "true":
      retVal = " round";
      break;
    case "left":
      retVal = " round-left";
      break;
    case "right":
      retVal = " round-right";
      break;
  }
  return retVal;
}

export const LCARSButton = ({
  color,
  hidden = false,
  version = false,
  dataLabel,
}) => {
  var classes = hidden ? "hidden" : "";
  classes += isVersion(version);
  return (
    <StyledLCARSButton
      color={color}
      className={classes}
      data-label={dataLabel}
    ></StyledLCARSButton>
  );
};
