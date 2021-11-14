import gql from 'graphql-tag';

export const GET_ME = gql`
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