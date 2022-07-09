import artistResolvers from './artists/artistResolvers';
import genreResolvers from './genres/genreResolvers';
import userResolvers from './users/userResolvers';

const resolvers = [userResolvers, artistResolvers, genreResolvers];

export default resolvers;
