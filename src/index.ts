import { ApolloServer } from 'apollo-server';
import albumSchema from './albums/albumSchema';
import albumResolvers from './albums/albumResolvers';
import albumsDatasource from './albums/albumDatasource';
import albumsType from './albums/albumType';

const server = new ApolloServer({
  albumsType,
  albumResolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI()
    };
  }
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
