import userSchema from './users/userSchema';
import artistSchema from './artists/artistSchema';
import bandSchema from './bands/bandSchema';
import genreSchema from './genres/genreSchema';
import albumSchema from './albums/albumSchema';
import trackSchema from './tracks/trackSchema';

const typeDef = [userSchema, artistSchema, bandSchema, genreSchema, albumSchema, trackSchema];

export default typeDef;
