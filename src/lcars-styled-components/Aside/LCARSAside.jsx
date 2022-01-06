import { StyledLCARSAside } from "./LCARSAside.style";

function addClasses(additionalClasses) {
  var retVal = "";
  additionalClasses.split(",").forEach(function (item) {
    retVal += " " + item;
  });
  return retVal;
}
const LCARSAside = ({ additionalClasses = "" }) => {
  return <StyledLCARSAside></StyledLCARSAside>;
};

export default LCARSAside;
