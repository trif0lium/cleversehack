import styled from 'styled-components';

const media = {
  desktop: `@media(min-width: 640px)`,
  mobile: `@media(max-width: 475px)`,
};

export const DetailList = styled.div`
  background-color: white;
  height: calc(100vh - 64px);

  .location-detail-list {
    background-color: white;
    height: calc(100vh - 64px);

    width: 100%;

    .detail-card {
      &:hover {
        transform: scale(1.02);
        background-color: #f3f3f3;
      }
    }
  }
`;
