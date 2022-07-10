import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

import dataSources from './modules/dataSources';
import resolvers from './modules/resolvers';
import typeDef from './modules/schemas';

const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: [typeDef],
  resolvers: resolvers,
  dataSources,
  context: ({ req }) => {
    let token = req.headers.authorization || '';
    return { token };
  }
});

server.listen({ port: port }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
