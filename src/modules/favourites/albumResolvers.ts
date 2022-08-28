import { IFavorite } from '../interfaces';

const favoriteResolvers = {
  Favorites: {
    artists: (favorite: IFavorite, _: null, { dataSources }: any) => {
      return favorite.artistsIds.map((artistId) => dataSources.artistAPI.getArtist(artistId));
    },
    bands: (favorite: IFavorite, _: null, { dataSources }: any) => {
      return favorite.bandsIds.map((bandId) => dataSources.bandAPI.getBand(bandId));
    },
    genres: (favorite: IFavorite, _: null, { dataSources }: any) => {
      return favorite.genresIds.map((genreId) => dataSources.genreAPI.getGenre(genreId));
    },
    tracks: (favorite: IFavorite, _: null, { dataSources }: any) => {
      return favorite.tracksIds.map((trackId) => dataSources.trackAPI.getTrack(trackId));
    }
  },

  Query: {
    // get a single favorite by ID
    favorite: (_: null, { id }: IFavorite, { dataSources }: any) => {
      return dataSources.favoriteAPI.getFavorite(id);
    },

    // get a all favorites
    favorites: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.favoriteAPI.getFavorites();
      return result;
    }
  },

  Mutation: {
    // Add new Favorite, need jwt token
    addBandToFavorites: (_: null, { id }: IFavorite, { dataSources }: any) => {
      return dataSources.favoriteAPI.updateFavorite(id, 'bands');
    },

    // Add new Favorite, need jwt token
    addArtistToFavorites: (_: null, { id }: IFavorite, { dataSources }: any) => {
      return dataSources.favoriteAPI.updateFavorite(id, 'artists');
    },

    // Add new Favorite, need jwt token
    addGenreToFavorites: (_: null, { id }: IFavorite, { dataSources }: any) => {
      return dataSources.favoriteAPI.updateFavorite(id, 'genres');
    },

    // Add new Favorite, need jwt token
    addTrackToFavorites: (_: null, { id }: IFavorite, { dataSources }: any) => {
      return dataSources.favoriteAPI.updateFavorite(id, 'tracks');
    },

    // Remove Favorite by ID, need jwt token
    removeBandFromFavorites: async (_: null, { id }: IFavorite, { dataSources }: any) => {
      return await dataSources.favoriteAPI.removeFavorite(id, 'bands');
    },

    // Remove Favorite by ID, need jwt token
    removeArtistFromFavorites: async (_: null, { id }: IFavorite, { dataSources }: any) => {
      return await dataSources.favoriteAPI.removeFavorite(id, 'artists');
    },

    // Remove Favorite by ID, need jwt token
    removeGenreFromFavorites: async (_: null, { id }: IFavorite, { dataSources }: any) => {
      return await dataSources.favoriteAPI.removeFavorite(id, 'genres');
    },

    // Remove Favorite by ID, need jwt token
    removeTrackFromFavorites: async (_: null, { id }: IFavorite, { dataSources }: any) => {
      return await dataSources.favoriteAPI.removeFavorite(id, 'tracks');
    }
  }
};

export default favoriteResolvers;
