import styled, { css } from "styled-components";

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colorHeaderUser};

  ${(props) =>
    props.$hover02 &&
    css`
      &:hover {
        color: #33399b;

        &::after {
          border-left-color: ${({ theme }) => theme.bdlHeaderUserAfter};
          border-bottom-color: ${({ theme }) => theme.bdlHeaderUserAfter};
        }
      }
    `}

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: ${({ theme }) => theme.bdHeaderUserAfter};
    border-bottom: ${({ theme }) => theme.bdHeaderUserAfter};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;
