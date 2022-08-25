import styled from "styled-components";

export const StyledLCARSElbow = styled.div`
  position: relative;
  width: 9.5rem;
  min-width: 9.5rem;
  height: 4.5rem;
  min-height: 4.5rem;
  background: #fc6;
  margin: 0;
  background: ${(props) => props.color || "lightgrey"};
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 2rem;
    height: 3rem;
    background: ${(props) => props.color || "lightgrey"};
  }
  & a {
    display: inline-block;
    position: absolute;
    color: #000;
    bottom: 0;
    padding: 0.25rem;
  }
  &.left-bottom {
    border-bottom-left-radius: 3.75rem;
  }
  &.left-bottom a {
    right: 2.25rem;
  }
  &.left-bottom:after {
    right: 0;
    top: 1.5rem;
    border-bottom-left-radius: 1.875rem;
  }
  &.left-top {
    border-top-left-radius: 3.75rem;
  }
  &.left-top a {
    top: 0;
    right: 2.25rem;
  }
  &.left-top:after {
    right: 0;
    bottom: 1.5rem;
    border-top-left-radius: 3.75rem;
  }
  &.right-bottom {
    border-bottom-right-radius: 3.75rem;
  }
  &.right-bottom:after {
    top: 1.5rem;
    border-bottom-right-radius: 1.875rem;
  }
  &.right-bottom a {
    left: 2.25rem;
  }
  &.right-top {
    border-top-right-radius: 3.75rem;
  }
  &.right-top a {
    display: inline-block;
    top: 0;
    left: 2.25rem;
  }
  &.right-top:after {
    bottom: 1.5rem;
    border-top-right-radius: 1.875rem;
  }
`;
