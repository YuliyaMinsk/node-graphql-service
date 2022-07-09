import { IArtist } from '../../interfaces';

const artistResolvers = {
  Query: {
    // get a single artist by ID
    artist: (_: null, { id }: IArtist, { dataSources }: any) => {
      return dataSources.artistAPI.getArtist(id);
    },

    // get a all artists
    artists: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.artistAPI.getArtists();
      return result.items;
    }
  },

  Mutation: {
    // add new Artist, need jwt token
    createArtist: (
      _: null,
      { firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments }: IArtist,
      { dataSources }: any
    ) => {
      // console.log('Token: ', dataSources.artistAPI.context.token);
      return dataSources.artistAPI.createArtist({
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments
      });
    }
  }
};

export default artistResolvers;
