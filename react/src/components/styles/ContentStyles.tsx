import styled from 'styled-components';

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
        background-color: #F3F3F3;
      }
    }
    .cont {
      width: 100%;
      height: 120px;
      background-color: white;
      margin-top: 20px;
      padding: 0px 20px 0px 0px;
	    transition: all 0.2s ease-in-out;
	    border-radius: 10px 10px 10px 10px;
	    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
      
      &:hover {
        transform: scale(1.02);
        background-color: #F3F3F3;
      }
      ${media.desktop} {
        width: 640px;
      }
      .icon {
        min-width: 120px;
        height: 100%;
        margin: 10px;
        padding: 20px;
        color: #0C2641;
      }
      }
    }
  }
`;
