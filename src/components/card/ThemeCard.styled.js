import styled, { css } from "styled-components";

export const ThemeCard = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }

  ${(props) =>
    props.item.topic === "Web Design" &&
    css`
      background-color: #ffe4c2;
      color: #ff6d00;
    `}

  ${(props) =>
    props.item.topic === "Research" &&
    css`
      background-color: #b4fdd1;
      color: #06b16e;
    `}

    ${(props) =>
    props.item.topic === "Copywriting" &&
    css`
      background-color: #e9d4ff;
      color: #9a48f1;
    `}
`;
