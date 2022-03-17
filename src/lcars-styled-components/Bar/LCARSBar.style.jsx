import styled from "styled-components";

export const StyledLCARSBar = styled.div`
  position: relative;
  min-height: 30px;
  min-width: 30px;
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
  &.bar.xlarge {
    min-height: 125px;
    max-height: 125px;
  }
  &.bar.large {
    min-height: 90px;
    max-height: 90px;
  }
  &.bar.medium {
    min-height: 60px;
    max-height: 60px;
  }
  &.bar.small {
    min-height: 15px;
    max-height: 15px;
  }
  &.bar.tiny {
    min-height: 10px;
    max-height: 10px;
  }
  &.bar:after {
    top: 0px;
  }
  &.bar.small:after,
  &.bar.small:before,
  &.bar.tiny:after,
  &.bar.tiny:before {
    display: none;
  }
`;
