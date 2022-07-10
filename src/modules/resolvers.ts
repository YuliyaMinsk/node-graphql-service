import artistResolvers from './artists/artistResolvers';
import bandResolvers from './bands/bandResolvers';
import genreResolvers from './genres/genreResolvers';
import userResolvers from './users/userResolvers';

const resolvers = [userResolvers, artistResolvers, genreResolvers, bandResolvers];

export default resolvers;
