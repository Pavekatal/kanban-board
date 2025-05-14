import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: border-box; 
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button {
    cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  background-color: #f1f1f1;
}
`;
