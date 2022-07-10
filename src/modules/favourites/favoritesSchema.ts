import { gql } from 'apollo-server';

const favoriteSchema = gql`
  type Favorites {
    _id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Query {
    "Fetch a specific favorite, provided a favorite's ID"
    favorite(id: ID!): Favorites!

    "Fetch all favorites"
    favorites: Favorites
  }

  type Mutation {
    addTrackToFavorites(id: String!): Favorites

    addBandToFavorites(id: String!): Favorites

    addArtistToFavorites(id: String!): Favorites

    addGenreToFavorites(id: String!): Favorites

    removeBandFromFavorites(id: String!): Favorites

    removeArtistFromFavorites(id: String!): Favorites

    removeGenreFromFavorites(id: String!): Favorites

    removeTrackFromFavorites(id: String!): Favorites
  }
`;

/*
  interface Favorite {
    _id: string;
    userId: string;
    bandsIds: string[];
    genresIds: string[];
    artistsIds: string[];
    tracksIds: string[];
  }
*/

export default favoriteSchema;
