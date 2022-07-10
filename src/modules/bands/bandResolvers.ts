import { IBand } from '../interfaces';

const bandResolvers = {
  Query: {
    // get a single band by ID
    band: (_: null, { id }: IBand, { dataSources }: any) => {
      return dataSources.bandAPI.getBand(id);
    },

    // get a all bands
    bands: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.bandAPI.getBands();
      return result.items;
    }
  },

  Mutation: {
    // Add new Band, need jwt token
    createBand: (_: null, { name, origin, members, website, genresIds }: IBand, { dataSources }: any) => {
      return dataSources.bandAPI.createBand({
        name,
        origin,
        members,
        website,
        genresIds
      });
    },

    // Update Band by ID, need jwt token
    updateBand: (_: null, { id, name, origin, members, website, genresIds }: IBand, { dataSources }: any) => {
      return dataSources.bandAPI.updateBand(id, {
        name,
        origin,
        members,
        website,
        genresIds
      });
    },

    // Delete Band by ID, need jwt token
    deleteBand: async (_: null, { id }: IBand, { dataSources }: any) => {
      return await dataSources.bandAPI.deleteBand(id);
    }
  }
};

export default bandResolvers;
