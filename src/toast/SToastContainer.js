import styled from "styled-components";
import { ToastContainer as ToastifyContainer } from "react-toastify";

export const SToastContainer = styled(ToastifyContainer)`
  --toast-background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#20202C" : "#F1F1F1"};
  --toast-text-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#fff" : "#000"};
`;

import { createGlobalStyle } from "styled-components";

export const GlobalToastStyles = createGlobalStyle`
  .Toastify__toast {
    background-color: var(--toast-background-color) !important;
    color: var(--toast-text-color) !important;
  }
`;
