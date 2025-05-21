import styled from "styled-components";

export const ThemeCard = styled.div`
  width: auto;
  height: 20px;
  background-color: ${({ $color }) => $color};
  padding: 5px 14px;
  border-radius: 18px;

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;
