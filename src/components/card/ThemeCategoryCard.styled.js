import styled, { css } from "styled-components";

export const ThemeCategoryCard = styled.p`
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
