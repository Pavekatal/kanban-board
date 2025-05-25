import styled from "styled-components";

export const AuthFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    margin-bottom: 7px;
  }

  input:last-of-type {
    margin-bottom: 0;
  }
`;
