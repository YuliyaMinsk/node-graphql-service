import userSchema from './users/userSchema';
import artistSchema from './artists/artistSchema';
import bandSchema from './bands/bandSchema';
import genreSchema from './genres/genreSchema';

const typeDef = [userSchema, artistSchema, bandSchema, genreSchema];

export default typeDef;
