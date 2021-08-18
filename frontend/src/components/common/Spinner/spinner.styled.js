import styled from "styled-components";

export const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  margin: ${({ margin }) => margin || "10px"};
  width: ${({ size }) => size || "20px"};
  height: ${({ size }) => size || "20px"};

  & .path {
    stroke: ${({ color }) => color || "white"};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

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
