import styled from "styled-components";

export const SLoaderCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.bgcLoaderCard};
  border-radius: 10px;
  padding: 15px 17px 19px 13px;
`;

export const SLoaderContainer = styled.div``;

export const SLoaderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SLoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
