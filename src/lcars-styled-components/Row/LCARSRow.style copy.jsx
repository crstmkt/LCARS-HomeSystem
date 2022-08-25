import styled from "styled-components";

export const StyledLCARSRow = styled.div`
  min-height: 30px;
  display: flex;
  flex-direction: row;
  & > * {
    max-height: inherit;
    position: relative;
    margin-left: 5px;
  }
  & > *:first-child {
    margin-left: 0px;
  }
`;
