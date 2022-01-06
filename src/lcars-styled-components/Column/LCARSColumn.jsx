import { StyledLCARSColumn } from "./LCARSColumn.style";

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}

const LCARSColumn = ({
  hidden = false,
  onClick = null,
  additionalClasses = "",
}) => {
  var classes = hidden ? "hidden" : "";
  classes += " column";
  classes += addClasses(additionalClasses);
  return (
    <StyledLCARSColumn
      hidden={hidden}
      onClick={onClick}
      className={classes}
    ></StyledLCARSColumn>
  );
};

export default LCARSColumn;
