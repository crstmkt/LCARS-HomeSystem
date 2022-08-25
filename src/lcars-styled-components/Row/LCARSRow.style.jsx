import styled from "styled-components";

export const StyledLCARSRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  &.fill {
    flex: 1;
  }
  &.centered {
    justify-content: center;
  }
  &.full-centered {
    justify-content: center;
    align-items: center;
  }
  &.right {
    justify-content: flex-end;
  }
  &.right-centered {
    justify-content: flex-end;
    align-items: center;
  }
  &.right-bottom {
    justify-content: flex-end;
    align-items: flex-end;
  }
  & :last-child {
    margin-right: 0;
  }
  & > * {
    margin-right: 0.25rem;
  }
`;
