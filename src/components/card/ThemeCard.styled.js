import styled, { css } from "styled-components";

export const ThemeCard = styled.div`
  width: auto;
  height: 20px;
  background-color: ${({ $color }) => $color};
  opacity: ${(props) => (props.$activeCategory ? "1 !important" : "0.4")};
  padding: 5px 14px;
  border-radius: 18px;

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }

  ${(props) =>
    props.$themePopCard &&
    css`
      display: inline-block;
      height: 30px;
      padding: 8px 20px;
      border-radius: 24px;
      margin-right: 7px;

      p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
      }
    `}

  ${(props) =>
    props.$themePopNewCard &&
    css`
      cursor: pointer;
    `}

  ${(props) =>
    props.$activeCategory &&
    css`
      opacity: 1 !important;
    `}
`;
