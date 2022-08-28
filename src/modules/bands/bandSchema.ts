import { gql } from 'apollo-server';

const bandSchema = gql`
  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    artist: String
    instrument: String
    years: String
  }

  input MemberInput {
    artist: String
    instrument: String
    years: String
  }

  type Query {
    "Fetch a specific band, provided a band's ID"
    band(id: ID!): Band!

    "Fetch all bands"
    bands: [Band]
  }

  type Mutation {
    createBand(
      name: String
      origin: String
      members: [MemberInput]
      website: String
      genresId: [String]
    ): Band

    updateBand(
      id: String!
      name: String
      origin: String
      members: [MemberInput]
      website: String
      genresId: [String]
    ): Band

    deleteBand(id: String!): Band
  }
`;

/*
  interface Band {
    _id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
  }
*/

export default bandSchema;
