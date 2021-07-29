import styled from "styled-components";

const media = {
  desktop: `@media(min-width: 640px)`,
  mobile: `@media(max-width: 475px)`,
};

export const SelfAssessmentWrap = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .self-assessment-content {
    ${media.desktop} {
      width: 640px;
    }
    width: 90%;
    align-items: center;
    justify-content: center;
  }
  .sa-button {
    &:hover {
      transform: scale(1.01);
      border: 2px solid #1a7676;
      color: #1a7676;
      background-color: #1a7676;
      color: white;
      font-weight: bold;
    }
  }
`;
