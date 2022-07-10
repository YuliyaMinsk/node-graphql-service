import { ITrack } from '../interfaces';

const trackResolvers = {
  Track: {
    album: (track: ITrack, _: null, { dataSources }: any) => {
      return dataSources.albumAPI.getAlbum(track.albumId);
    },
    artists: (track: ITrack, _: null, { dataSources }: any) => {
      return track.artistsIds.map((artistId) => dataSources.artistAPI.getArtist(artistId));
    },
    bands: (track: ITrack, _: null, { dataSources }: any) => {
      return track.bandsIds.map((bandId) => dataSources.bandAPI.getBand(bandId));
    },
    genres: (track: ITrack, _: null, { dataSources }: any) => {
      return track.genresIds.map((genreId) => dataSources.genreAPI.getGenre(genreId));
    }
  },

  Query: {
    // get a single track by ID
    track: (_: null, { id }: ITrack, { dataSources }: any) => {
      return dataSources.trackAPI.getTrack(id);
    },

    // get a all tracks
    tracks: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.trackAPI.getTracks();
      return result.items;
    }
  },

  Mutation: {
    // Add new Track, need jwt token
    createTrack: (
      _: null,
      { title, albumId, artistsIds, bandsIds, duration, released, genresIds }: ITrack,
      { dataSources }: any
    ) => {
      return dataSources.trackAPI.createTrack({
        title,
        albumId,
        artistsIds,
        bandsIds,
        duration,
        released,
        genresIds
      });
    },

    // Update Track by ID, need jwt token
    updateTrack: (
      _: null,
      { id, title, albumId, artistsIds, bandsIds, duration, released, genresIds }: ITrack,
      { dataSources }: any
    ) => {
      return dataSources.trackAPI.updateTrack(id, {
        title,
        albumId,
        artistsIds,
        bandsIds,
        duration,
        released,
        genresIds
      });
    },

    // Delete Track by ID, need jwt token
    deleteTrack: async (_: null, { id }: ITrack, { dataSources }: any) => {
      return await dataSources.trackAPI.deleteTrack(id);
    }
  }
};

export default trackResolvers;
