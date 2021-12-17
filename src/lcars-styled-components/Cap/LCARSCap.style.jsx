import styled from "styled-components";

export const StyledLCARSCap = styled.div`
  position: relative;
  min-width: 60px;
  min-height: 60px;
  background-color: ${(props) => props.color || "lightgrey"};
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
  &.round-left:before,
  .round-left:after {
    left: 25px;
  }
  &.round-right:before,
  .round-right:after {
    right: 25px;
  }
  &.round-right {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  &.round-left {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  &.xlarge {
    min-width: 125px;
    min-height: 125px;
  }
  &.large {
    min-width: 90px;
    min-height: 90px;
  }
  &.medium {
    min-width: 30px;
    min-height: 30px;
  }
  &.small {
    min-width: 15px;
    min-height: 15px;
  }
  &.tiny {
    min-height: 10px;
    min-width: 10px;
  }
  &.small:before,
  .small:after,
  .medium:before,
  .medium:after,
  .tiny:before,
  .tiny:after {
    display: none;
  }
  &.large.left:before,
  .large.left:after {
    left: 25px;
  }
  &.xlarge.left:before,
  .xlarge.left:after {
    left: 50px;
  }
  &.large.right:before,
  .large.right:after {
    right: 25px;
  }
  &.xlarge.right:before,
  .xlarge.right:after {
    right: 50px;
  }
`;
