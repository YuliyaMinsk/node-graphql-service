import { gql } from 'apollo-server';

const genreSchema = gql`
  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    "Fetch a specific genre, provided a genre's ID"
    genre(id: ID!): Genre!

    "Fetch all genres"
    genres: [Genre]
  }

  type Mutation {
    createGenre(name: String, description: String, country: String, year: Int): Genre

    updateGenre(id: String!, name: String, description: String, country: String, year: Int): Genre

    deleteGenre(id: String!): Genre
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
