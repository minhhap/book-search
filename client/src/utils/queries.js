import gql from 'graphql-tag';

export const QUERY_GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      books {
        _id
        title
        author
        description
        image
        link
      }
    }
  }
`;