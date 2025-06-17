import styled, { css } from "styled-components";

export const SPopUser = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: ${({ theme }) => theme.bdHeaderPopUserSet};
  background: ${({ theme }) => theme.bgHeaderPopUserSet};
  box-shadow: ${({ theme }) => theme.bShadowHeaderPopUserSet};
  padding: 34px;
  text-align: center;
  z-index: 2;

  ${(props) =>
    props.$popUserSet &&
    css`
      &:target {
        display: block;
      }
    `}
`;
