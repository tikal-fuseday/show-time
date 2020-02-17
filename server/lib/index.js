"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const firebase_config_json_1 = require("./firebase_config.json");
admin.initializeApp({
    credential: admin.credential.cert(firebase_config_json_1.default),
    databaseURL: "https://show-time-268509.firebaseio.com"
});
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type User {
    fname: String!
    lname: String!
    is_admin: Boolean
    email: String!   
  }`;
// interface User {
//   id: string;
//   name: string;
//   screenName: string;
//   statusesCount: number;
// }
//
// interface Tweet {
//   id: string;
//   likes: number;
//   text: string;
//   userId: string;
// }
//
// const typeDefs = gql`
//   # A Twitter User
//   type User {
//     id: ID!
//     name: String!
//     screenName: String!
//     statusesCount: Int!
//     tweets: [Tweets]!
//   }
//
//   # A Tweet Object
//   type Tweets {
//     id: ID!
//     text: String!
//     userId: String!
//     user: User!
//     likes: Int!
//   }
//
//   type Query {
//     tweets: [Tweets]
//     user(id: String!): User
//   }
// `;
const resolvers = {
    Query: {
        // async tweets() {
        //   const tweets = await admin.firestore()
        //     .collection('tweets')
        //     .get();
        //   return tweets.docs.map(tweet => tweet.data()) as Tweet[];
        // },
        async user(_, args) {
            try {
                const userDoc = await admin
                    .firestore()
                    .doc(`users/${args.email}`)
                    .get();
                const user = userDoc.data();
                return user || new apollo_server_1.ValidationError('User email not found');
            }
            catch (error) {
                throw new apollo_server_1.ApolloError(error);
            }
        }
    },
};
const server = new apollo_server_1.ApolloServer({
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
//# sourceMappingURL=index.js.map