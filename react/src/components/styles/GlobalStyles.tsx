import { createGlobalStyle } from 'styled-components';
import bg from './bg/bg.gif';
const media = {
  desktop: `@media(min-width: 1024px)`,
  tabletHorizontal: `@media(min-width: 720px)`,
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
    //  background-color: black;
    // background-image: url(${bg})
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

  .gm-style-iw-t {  
    .gm-style .gm-style-iw-c {
        transform: translate(-50%,-100%);
        border-radius: 8px;
        box-shadow: 0 2px 2px 1px rgba(0,0,0,0.3);
    }
    .gm-style-iw-d  {
        background-color: white;
        padding: 0px;
     }
     .gm-ui-hover-effect {
       visibility: hidden;
     }
     
}

  .tag {
      display: inline-block;
      margin-right: 4px;
      border-radius: 10px;
      width: 12px;
      height: 12px;
     }

     .tag-drawer {
      display: inline-block;
      margin-right: 4px;
      border-radius: 10px;
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

  .search-bar {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 10px 10px;
    z-index: 1; 
    position: absolute; 
    top: 36px; 
    left: 0px;
  }
  .search-text {
    border-width: 2px;
  }
  .search-button {
    border: 1px solid #1A7676;
    color: #1A7676;
    &:hover {
      transform: scale(1.02);
      background-color: #1A7676;
      color: white;
      font-weight: bold;
    }
  }

  .reset-button {
    background-color: #1A7676;
     color: white;
     position: absolute;
    bottom: 1rem;
    border: none;
    z-index: 10;
     &:hover {
      transform: scale(1.02);
      
     
      font-weight: bold;
    }
  }


  
  .back-button {
    border-radius: 4px;
    &:hover {
      transform: scale(1.02);
      font-weight: bold;

    }
  }

  .option-button {
    border-radius: 4px;
    &:hover {
      transform: scale(1.02);
      font-weight: bold;
      .icon {
        transform: scale(1.2);
      }
    }
  }

  .menu-button {
    width: 100%;
    &:hover {
    font-weight: bold;
    background-color: white;
    }
  }
  
  .locate {
    position: absolute;
    right: 1rem;
    top: 4rem;
    background: none;
    border: none;
    z-index: 10;
  }
  
  .search-drawer {
    width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  }  
  
  .search-drawer-content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    border-radius: 10px 10px 0px 0px;
    z-index: 1; 
    position: absolute; 
    bottom: -5px; 
    transition: 'max-width 0.5s, opacity 0.2s'
    box-shadow: 8px 4px 8px 8px rgba(0, 0, 0, 0), 8px 6px 10px 8px rgba(0, 0, 0, 0.1);
  }
  .location-description {
    overflow-wrap: break-word;
    word-break: break-all; 
  }
  .drawer-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1A7676;
    color: #1A7676;
    &:hover {
      transform: scale(1.02);
      background-color: #1A7676;
      color: white;
      font-weight: bold;
    }

  .self-assessment-content {
      height: 100vh;
  }
    
  }
`;

export default GlobalStyles;
