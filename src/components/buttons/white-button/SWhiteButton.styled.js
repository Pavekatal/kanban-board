import styled, { css } from "styled-components";

export const SWhiteButton = styled.button`
  background: transparent;
  border-radius: 4px;

  ${(props) =>
    props.$popExitNo &&
    css`
      width: 153px;
      height: 30px;
      border: ${({ theme }) => theme.bdPopExitExitNo};
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      line-height: 21px;
      font-weight: 500;
      letter-spacing: -0.14px;
      color: ${({ theme }) => theme.colorAPopExitExitNo};

      a {
        width: 100%;
        height: 100%;
        color: #565eef;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
      }
    `}

  ${(props) =>
    props.$popUserSet &&
    css`
      width: 72px;
      height: 30px;
      color: ${({ theme }) => theme.buttonColorPopUserSet}; // #565eef;
      border: ${({ theme }) => theme.buttonBdPopUserSet}; //1px solid #565eef;

      & a {
        color: ${({ theme }) => theme.buttonColorAPopUserSet}; //#565eef;
      }
    `}

    ${(props) =>
    props.$btnBor &&
    css`
      border: ${({ theme }) => theme.bdBtnBor};
      outline: none;
      color: ${({ theme }) => theme.colorBtnBor};

      a {
        color: #565eef;
      }
    `}

  ${(props) =>
    props.$hover03 &&
    css`
      &:hover {
        background-color: #33399b;
        border-color: #33399b;
        color: #ffffff;
      }

      &:hover a {
        color: #ffffff;
      }
    `}
`;
