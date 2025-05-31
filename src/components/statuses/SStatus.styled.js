import styled, { css } from "styled-components";

export const SStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusP = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  /* color: #94a6be; */
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  color: ${(props) => (props.$isActive ? "#fff" : "#94a6be")};
  background-color: ${(props) => (props.$isActive ? "#94A6BE" : "transparent")};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  &:hover {
    background: #94a6be;
    color: #ffffff;
    cursor: ${(props) => (props.$isEdit ? "pointer" : "auto")};
  }

  /* ${(props) =>
    props.$gray &&
    css`
      background: #94a6be;
      color: #ffffff;
    `} */

  ${(props) =>
    props.$hide &&
    css`
      display: none;
    `}
`;

export const StatusThemeP = styled.p`
  background: #94a6be;
  color: #ffffff;
`;
