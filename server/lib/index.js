"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const firebase_config_json_1 = __importDefault(require("./firebase_config.json"));
admin.initializeApp({
    credential: admin.credential.cert(firebase_config_json_1.default),
    databaseURL: "https://show-time-268509.firebaseio.com"
});
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type User {
    id: String!
    fname: String!
    lname: String!
    is_admin: Boolean
    email: String!   
  }

  type Query {
    user(id: String!): User
  }
`;
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
                    .doc(`users/${args.id}`)
                    .get();
                const user = userDoc.data();
                return user || new apollo_server_1.ValidationError('User id not found');
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