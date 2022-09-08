import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($name: String!) {
    user(name: $name) {
      id
      name
      email
      permission
    }
  }
`;

export const QUERY_COMMENT = gql`
  query getComments {
    comments {
      id
      comment
      name
      date_created
      email
    }
  }
`;
