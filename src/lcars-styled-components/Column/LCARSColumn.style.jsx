import styled from "styled-components";

export const StyledLCARSColumn = styled.div`
  min-height: 60px;
  & > * {
    width: 100%;
    position: relative;
    margin-top: 5px;
    min-width: 100%;
  }
  &.flex-v > .complexButton > * {
    height: auto;
  }
  & > *:first-child {
    margin-top: 0px;
  }
`;
