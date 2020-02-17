import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';
import { userDefs } from './resources/User';
import { userResolver as user} from './resolvers/User';

const resolvers = {
  Query: {
    user,
  }
};

const server = new ApolloServer({
  typeDefs: [ userDefs ],
  resolvers,
//   engine: {
//     apiKey: "<APOLLO ENGINE API KEY HERE>"
//   },
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
