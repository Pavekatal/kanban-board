import styled, { css } from "styled-components";

export const SBlueButton = styled.button`
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  font-weight: 500;

  a {
    color: #ffffff;
  }

  ${(props) =>
    props.$header &&
    css`
      width: 178px;
      line-height: 1;
      margin-right: 20px;
    `}

  ${(props) =>
    props.$enter &&
    css`
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 21px;
      letter-spacing: -0.14px;

      a {
        width: 100%;
        height: 100%;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}

    ${(props) =>
    props.$signupEnt &&
    css`
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 21px;
      letter-spacing: -0.14px;

      a {
        width: 100%;
        height: 100%;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}

  ${(props) =>
    props.$popExitYes &&
    css`
      width: 153px;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 21px;
      letter-spacing: -0.14px;
      margin-right: 10px;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
        margin-right: 0;
        margin-bottom: 10px;
      }
    `}

  ${(props) =>
    props.$hover01 &&
    css`
      &:hover {
        background-color: #33399b;
      }
    `}

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    margin-right: 0;
  }
`;
