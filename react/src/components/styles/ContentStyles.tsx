import styled from "styled-components";

const media = {
  desktop: `@media(min-width: 640px)`,
  mobile: `@media(max-width: 475px)`,
};

export const ContentWrap = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

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
  
  .boxWrap {
    width: 90%;
    ${media.desktop} {
      width: 640px;
    }

    .start-button {
      width: 300px;
      height: 50px;
      background-color: white;
      margin-top: 20px;
	    transition: all 0.2s ease-in-out;
	    border-radius: 10px 10px 10px 10px;
	    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
      
      &:hover {
        transform: scale(1.02);
        background-color: #E5F9F9;
      }
    }
    .cont {
      width: 100%;
      height: 120px;
      background-color: white;
      margin-top: 20px;
	    transition: all 0.2s ease-in-out;
	    border-radius: 20px 20px 20px 20px;
	    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
      
      &:hover {
        transform: scale(1.02);
        background-color: #E5F9F9;
      }
      ${media.desktop} {
        width: 640px;
      }
      .icon {
        min-width: 120px;
        height: 100%;
        background-color: gray;
        margin-left: 20px;
      }
      }
    }
  }
`;
