import { gql } from 'graphql-request';

export const GET_LOCATIONS = gql`
  query {
    locations {
      id
      name
      description
      photo
      overallRating
    }
  }
`;
