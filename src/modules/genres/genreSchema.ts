import { gql } from 'apollo-server';

const genreSchema = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

`;

/*
  interface Genre {
    _id: string;
    name: string;
    description: string;
    country: string;
    year: string;
  }
*/

export default genreSchema;
