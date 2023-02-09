/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from 'apollo-server';

import { context } from './graphql/context/context';
import { resolvers, typeDefs } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on ${url}`);
});