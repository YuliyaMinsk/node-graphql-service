import { IGenre } from '../interfaces';

const genreResolvers = {
  Query: {
    // get a single genre by ID
    genre: (_: null, { id }: IGenre, { dataSources }: any) => {
      return dataSources.genreAPI.getGenre(id);
    },

    // get a all genres
    genres: async (_: null, __: null, { dataSources }: any) => {
      const result = await dataSources.genreAPI.getGenres();
      return result.items;
    }
  },

  Mutation: {
    // Add new Genre, need jwt token
    createGenre: (_: null, { name, description, country, year }: IGenre, { dataSources }: any) => {
      return dataSources.genreAPI.createGenre({
        name,
        description,
        country,
        year
      });
    },

    // Update Genre by ID, need jwt token
    updateGenre: (_: null, { id, name, description, country, year }: IGenre, { dataSources }: any) => {
      return dataSources.genreAPI.updateGenre(id, {
        name,
        description,
        country,
        year
      });
    },

    // Delete Genre by ID, need jwt token
    deleteGenre: async (_: null, { id }: IGenre, { dataSources }: any) => {
      return await dataSources.genreAPI.deleteGenre(id);
    }
  }
};

export default genreResolvers;
