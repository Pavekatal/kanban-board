import styled, { css } from "styled-components";

export const ColumnMain = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  ${(props) => props.$column && css``}
`;
