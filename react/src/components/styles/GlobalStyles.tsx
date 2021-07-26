import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Prompt';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/prompt/v5/-W__XJnvUD7dzB2KdNodVkI.woff2) format('woff2');
  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
}
  html {
    height: 100%;
  }
  body {
    height: 100%;
    font-family: 'Prompt', sans-serif;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-color: #1A7676;
  }
`;

export default GlobalStyles;
