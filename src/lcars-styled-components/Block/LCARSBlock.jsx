import styled from "styled-components";

//TODO: Separate into styled.jsx
const StyledLCARSBlock = styled.div`
  position: relative;
  min-height: 60px;
  min-width: 25px;
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
