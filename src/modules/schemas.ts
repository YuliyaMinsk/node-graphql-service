import userSchema from './users/userSchema';
import artistSchema from './artists/artistSchema';
import bandSchema from './bands/bandSchema';
import genreSchema from './genres/genreSchema';
import albumSchema from './albums/albumSchema';
import trackSchema from './tracks/trackSchema';
import favoriteSchema from './favourites/favoritesSchema';

const typeDef = [userSchema, artistSchema, bandSchema, genreSchema, albumSchema, trackSchema, favoriteSchema];

export default typeDef;
