import { createGlobalStyle } from "styled-components";

const media = {
  desktop: `@media(min-width: 1024px)`,
  tabletHorizontal: `@media(min-width: 768px)`,
  tablet: `@media(min-width: 640px)`,
  mobile: `@media(max-width: 475px)`,
};

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

  h1 {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 10;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #0C2641;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #0C2641;
  }
  h4 {
    font-size: 18px;
    font-weight: bold;  
    color: #1A7676;
  }
  h5 {
    font-size: 14px;
    color: #576675;
  }
  
  .navbar {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  }
  
  .search {
    position: absolute;
    top: 0px;
    right: 0px;
    max-width: 90%;
    width: 80%;
    z-index: 10;
  }
  
  .search input {
    padding: 0.5rem;
    font-size: 1.25rem;
    width: 300px;
    height: 35px;
    ${media.desktop} {
      width: 500px;
    }
    @media(max-width: 640px) {
      width: auto;
      max-width: 150px;
    }
  }
  
  .locate {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    z-index: 10;
  }
  .modal {

  }
`;

export default GlobalStyles;
