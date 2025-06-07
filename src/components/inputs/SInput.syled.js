import styled, { css } from "styled-components";

export const SInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  background: transparent;
  border: ${(props) =>
    !props.$error
      ? "0.7px solid rgba(148, 166, 190, 0.4)"
      : "0.7px solid rgb(255, 0, 0)"};
  outline: none;
  padding: ${(props) => (!props.$newCardInput ? "10px 8px" : "14px")};
  color: inherit;

  &::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }

  ${(props) =>
    props.$newCardInput &&
    css`
      background: transparent;
      font-size: 14px;
      line-height: 1;
      letter-spacing: -0.14px;
      margin: 20px 0;

      &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
      }

      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
      }
    `}
`;

export const STextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${(props) =>
    !props.$isEditTask
      ? props.$isDark
        ? "#151419"
        : "#EAEEF6"
      : "transparent"};
  border: ${(props) => {
    const { $isDark, $isEditTask, $error } = props;
    console.log(
      "$isDark:",
      $isDark,
      "$isEditTask;",
      $isEditTask,
      "$error:",
      $error
    );
    if (!$isDark && !$isEditTask && !$error) {
      return "0.7px solid rgba(148, 166, 190, 0.4)";
    }

    if (!$isDark && !$isEditTask && $error) {
      return "0.7px solid rgb(255, 0, 0)";
    }

    if (!$isDark && $isEditTask && !$error) {
      return "0.7px solid rgba(148, 166, 190, 0.4)";
    }

    if (!$isDark && $isEditTask && $error) {
      return "0.7px solid rgb(255, 0, 0)";
    }

    if ($isDark && !$isEditTask && !$error) {
      return "none";
    }

    if ($isDark && $isEditTask && !$error) {
      return "0.7px solid rgba(148, 166, 190, 0.4)";
    }

    if ($isDark && $isEditTask && $error) {
      return "0.7px solid rgb(255, 0, 0)";
    }
  }};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${({ theme }) => theme.colorSubTtl};

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
    padding-top: 14px;
  }

  ${(props) =>
    props.$newCardTextArea &&
    css`
      background: transparent;
    `}

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const SLabel = styled.label`
  color: ${({ theme }) => theme.colorSubTtl};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
