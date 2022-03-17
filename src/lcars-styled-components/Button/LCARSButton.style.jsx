import styled from "styled-components";

export const StyledLCARSButton = styled.div`
  position: relative;
  min-height: ${(props) => props.minheight || "3em"};
  min-width: ${(props) => props.minwidth || "inherit"};
  cursor: pointer;
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
    text-transform: uppercase;
    line-height: 1.25;
    overflow: hidden;
    max-height: 100%;
    white-space: pre;
    content: attr(data-label);
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
    text-transform: uppercase;
    line-height: 1.25;
    max-height: 50%;
    white-space: pre;
    content: attr(data-altLabel);
  }
  &:active {
    -webkit-animation: none !important;
    animation: none !important;
    background-color: #ffffff !important;
    border-bottom-color: #ffffff !important;
    border-right-color: #ffffff !important;
    border-top-color: #ffffff !important;
    border-left-color: #ffffff !important;
    border-color: #ffffff !important;
  }
  &.button.round {
    border-radius: 30px;
  }
  &.button.round:before,
  &.button.round:after {
    right: 25px;
    left: 25px;
  }
  &.button.round-right {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  &.button.round-right:before,
  &.button.right:after {
    right: 25px;
  }
  &.button.round-left {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  &.button.round-left:before,
  &.button.round-left:after {
    left: 25px;
  }
`;
