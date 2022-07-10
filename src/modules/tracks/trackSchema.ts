import { gql } from 'apollo-server';

const trackSchema = gql`
  type Track {
    _id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track!

    "Fetch all tracks"
    tracks: [Track]
  }

  type Mutation {
    createTrack(
      title: String!
      albumId: String
      artistsIds: [String]
      bandsIds: [String]
      duration: Int
      released: Int
      genresIds: [String]
    ): Track

    updateTrack(
      id: String!
      title: String
      albumId: String
      artistsIds: [String]
      bandsIds: [String]
      duration: Int
      released: Int
      genresIds: [String]
    ): Track

    deleteTrack(id: String!): Track
  }
`;

/*
  interface Track {
    _id: string;
    title: string;  
    albumId: string;
    artistsIds: string[];
    bandsIds: string[];
    duration: number;
    released: number;
    genresIds: string[];
  }
*/

export default trackSchema;
