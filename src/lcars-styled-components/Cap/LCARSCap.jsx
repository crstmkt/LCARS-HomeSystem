import { StyledLCARSCap } from "./LCARSCap.style";

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

const LCARSCap = ({
  color,
  hidden = false,
  version = "round-right",
  size = "medium",
  dataLabel = "",
  onClick = null,
  additionalClasses = "",
}) => {
  var classes = "cap";
  classes += hidden ? " hidden" : "";
  classes += " " + version;
  classes += " " + size;
  classes += addClasses(additionalClasses);
  return (
    <StyledLCARSCap
      color={color}
      className={classes}
      data-label={dataLabel}
      onClick={onClick}
    ></StyledLCARSCap>
  );
};

export default LCARSCap;
