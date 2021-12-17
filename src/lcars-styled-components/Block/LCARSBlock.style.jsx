import styled from "styled-components";

export const StyledLCARSBlock = styled.div`
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
