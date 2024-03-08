import React from "react";
import styled, { css } from "styled-components";

const Spinner = (props) => {
  const primary = "#000";

  const { type = "primary", size = "medium" } = props;

  return (
    <StyledSpinner
      size={size}
      type={type}
      primary={props.color ? props.color : primary}
      viewBox="0 0 50 50"
    >
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;

  width: 20px;
  height: auto;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  ${(props) =>
    props.size === "tiny" &&
    css`
      width: 12px;
      height: 26px;
    `};
  ${(props) =>
    props.size === "small" &&
    css`
      width: 12px;
      height: 26px;
    `};
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 18px;
    `};
  ${(props) =>
    props.size === "large" &&
    css`
      width: 18px;
    `};

  ${(props) =>
    props.type === "basic" &&
    css`
      & .path {
        stroke: #9e9e9e;
      }
    `};

  ${(props) =>
    props.type === "primary" &&
    css`
      & .path {
        stroke: ${props.color ? props.color : props.primary};
      }
    `};

  ${(props) =>
    props.type === "secondary" &&
    css`
      & .path {
        stroke: #fff;
      }
    `};

  ${(props) =>
    props.type === "tertiary" &&
    css`
      & .path {
        stroke: #fff;
      }
    `};

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
