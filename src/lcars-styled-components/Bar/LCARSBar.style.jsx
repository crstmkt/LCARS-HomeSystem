import styled from "styled-components";

export const StyledLCARSBar = styled.div`
  position: relative;
  color: #000;
  height: 100%;
  width: 100%;
  margin: 0;
  display: inline-block;
  background-color: #fc6;
  &:after {
    content: "";
    display: block;
    position: absolute;
    background: #000;
  }
  &.spacer {
    margin: 0;
    padding: 0;
    background-color: transparent;
    width: 0.25rem;
    min-width: 0.25rem;
    height: 0.25rem;
    min-height: 0.25rem;
  }
  &.double-spacer {
    background-color: transparent;
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
    min-height: 0.5rem;
  }
  &.left-space {
    margin-left: 0.25rem;
  }
  &.left-double-space {
    margin-left: 0.5rem;
  }
  &.right-space {
    margin-right: 0.25rem;
  }
  &.right-double-space {
    margin-right: 0.5rem;
  }
  &.horizontal {
    height: 1.5rem;
  }
  &.left-end {
    width: 1.5rem;
    max-width: 1.5rem;
    min-width: 1.5rem;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
  }
  &.left-end.decorated:after {
    right: 0.25rem;
    width: 0.25rem;
    height: 100%;
    background-color: #000;
  }
  &.right-end {
    width: 1.5rem;
    max-width: 1.5rem;
    min-width: 1.5rem;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
  &.right-end.decorated:after {
    left: 0.25rem;
    width: 0.25rem;
    height: 100%;
    background-color: #000;
    background-color: #000;
  }
  &.fill {
    flex: 1;
  }
  &.bottom {
    align-self: flex-end;
  }
  & .lcars-title {
    color: #fff;
    background-color: #000;
    text-transform: uppercase;
    margin: 0;
    margin-left: 0.83335rem;
    padding-left: 0.16667rem;
    padding-right: 0.16667rem;
    padding-bottom: 0.16667rem;
    display: inline-block;
    font-size: 150%;
    height: 100%;
  }
  & .lcars-title.right {
    float: right;
    margin-right: 0.83335rem;
  }
`;
