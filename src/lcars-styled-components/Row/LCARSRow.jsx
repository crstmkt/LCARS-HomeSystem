import { StyledLCARSRow } from "./LCARSRow.style";

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

const LCARSRow = ({
  hidden = false,
  onClick = null,
  additionalClasses = "",
  children = "",
}) => {
  var classes = hidden ? "hidden" : "";
  classes += " lcars-row";
  classes += addClasses(additionalClasses);
  return (
    <StyledLCARSRow hidden={hidden} onClick={onClick} className={classes}>
      {children}
    </StyledLCARSRow>
  );
};

export default LCARSRow;
