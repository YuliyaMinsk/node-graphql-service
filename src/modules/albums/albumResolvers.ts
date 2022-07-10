import { IAlbum } from '../interfaces';

const albumResolvers = {
  Album: {
    artists: (album: IAlbum, _: null, { dataSources }: any) => {
      return album.artistsIds.map((artistId) => dataSources.artistAPI.getArtist(artistId));
    },
    bands: (album: IAlbum, _: null, { dataSources }: any) => {
      return album.bandsIds.map((bandId) => dataSources.bandAPI.getBand(bandId));
    },
    genres: (album: IAlbum, _: null, { dataSources }: any) => {
      return album.genresIds.map((genreId) => dataSources.genreAPI.getGenre(genreId));
    }
  },

  Query: {
    // get a single album by ID
    album: (_: null, { id }: IAlbum, { dataSources }: any) => {
      return dataSources.albumAPI.getAlbum(id);
    },

    // get a all albums
    albums: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.albumAPI.getAlbums();
      return result.items;
    }
  },

  Mutation: {
    // Add new Album, need jwt token
    createAlbum: (
      _: null,
      { name, released, artistsIds, bandsIds, tracksIds, genresIds, image }: IAlbum,
      { dataSources }: any
    ) => {
      return dataSources.albumAPI.createAlbum({
        name,
        released,
        artistsIds,
        bandsIds,
        tracksIds,
        genresIds,
        image
      });
    },

    // Update Album by ID, need jwt token
    updateAlbum: (
      _: null,
      { id, name, released, artistsIds, bandsIds, tracksIds, genresIds, image }: IAlbum,
      { dataSources }: any
    ) => {
      return dataSources.albumAPI.updateAlbum(id, {
        name,
        released,
        artistsIds,
        bandsIds,
        tracksIds,
        genresIds,
        image
      });
    },

    // Delete Album by ID, need jwt token
    deleteAlbum: async (_: null, { id }: IAlbum, { dataSources }: any) => {
      return await dataSources.albumAPI.deleteAlbum(id);
    }
  }
};

export default albumResolvers;
