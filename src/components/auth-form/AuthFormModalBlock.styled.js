import styled from "styled-components";

export const AuthFormModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgcAuthFormBlock}; //#ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: ${({ theme }) => theme.bdAuthFormBlock}; //0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;
