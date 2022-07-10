import albumResolvers from './albums/albumResolvers';
import artistResolvers from './artists/artistResolvers';
import bandResolvers from './bands/bandResolvers';
import favoriteResolvers from './favourites/albumResolvers';
import genreResolvers from './genres/genreResolvers';
import trackResolvers from './tracks/trackResolvers';
import userResolvers from './users/userResolvers';

const resolvers = [
  userResolvers,
  artistResolvers,
  genreResolvers,
  bandResolvers,
  albumResolvers,
  trackResolvers,
  favoriteResolvers
];

export default resolvers;
