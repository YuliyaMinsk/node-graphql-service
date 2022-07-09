import { gql } from 'apollo-server';

const artistSchema = gql`
  type Artist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Query {
    "Fetch a specific artist, provided a artist's ID"
    artist(id: ID!): Artist!

    "Fetch all artists (with pagination?)"
    artists: [Artist]
  }

  type Mutation {
    createArtist(
      firstName: String!
      secondName: String!
      middleName: String
      birthDate: String
      birthPlace: String
      country: String!
      bandsIds: String
      instruments: [String]
    ): Artist

    updateArtist(
      id: String
      firstName: String
      secondName: String
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bandsIds: String
      instruments: [String]
    ): Artist

    deleteArtist(id: String!): Artist
  }
`;

/*
  interface Artist {
    _id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    birthDate: string;
    birthPlace: string;
    country: string;
    bandsIds: string[]
    instruments: string[];
  }
*/

export default artistSchema;
