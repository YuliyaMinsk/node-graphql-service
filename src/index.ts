import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

import dataSources from './dataSources';
import resolvers from './resolvers';
import typeDef from './schema';

const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: [typeDef],
  resolvers: resolvers,
  dataSources,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
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
