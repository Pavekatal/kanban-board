import styled, { keyframes } from "styled-components";

const gradientShift = keyframes`
0% {
    background-position: 0% 25%;
}
25% {
    background-position: 25% 50%;
}
75% {
    background-position: 50% 75%;
}
100% {
    background-position: 75% 100%;
}`;

export const SLoader = styled.div`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  background: linear-gradient(
    90deg,
    rgb(193, 205, 220) -6.316%,
    rgb(233, 238, 247) 46.754%,
    rgb(193, 205, 220) 106.458%
  );
  background-position: 0 0;
  background-size: 200% auto;
  animation: ${gradientShift} 1s infinite linear;
`;
