import { gql } from 'apollo-server';

const albumSchema = gql`
  type Album {
    _id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Query {
    "Fetch a specific album, provided a album's ID"
    album(id: ID!): Album!

    "Fetch all albums"
    albums: [Album]
  }

  type Mutation {
    createAlbum(
      name: String
      released: Int
      artistsIds: [String]
      bandsIds: [String]
      tracksIds: [String]
      genresIds: [String]
      image: String
    ): Album

    updateAlbum(
      id: String!
      name: String
      released: Int
      artistsIds: [String]
      bandsIds: [String]
      tracksIds: [String]
      genresIds: [String]
      image: String
    ): Album

    deleteAlbum(id: String!): Album
  }
`;

/*
  interface Album {
    _id: string;
    name: string;
    released: number;
    artistsIds: string[];
    bandsIds: string[];
    trackIds: string[];
    genresIds: string[];
    image: string;
  }
*/

export default albumSchema;
