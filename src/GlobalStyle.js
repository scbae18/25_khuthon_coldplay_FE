// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;