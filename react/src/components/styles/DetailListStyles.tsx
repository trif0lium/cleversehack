import styled from 'styled-components';

const media = {
  desktop: `@media(min-width: 640px)`,
  mobile: `@media(max-width: 475px)`,
};

export const DetailList = styled.div`
  background-color: white;

  .location-detail-list {
    background-color: white;
    height: 100vh;
    width: 100%;

    .detail-card {
      &:hover {
        transform: scale(1.02);
        background-color: #f3f3f3;
      }
    }
  }
`;
