import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';
import { typeDefs } from './resources/';
import resolvers from './resolvers/';

const server = new ApolloServer({
  typeDefs,
  resolvers,
//   engine: {
//     apiKey: "<APOLLO ENGINE API KEY HERE>"
//   },
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
