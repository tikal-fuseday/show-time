import * as admin from 'firebase-admin';
import serviceAccount from './firebase_config.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://show-time-268509.firebaseio.com"
});

import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';

interface User {
  id: string;
  fname: string;
  lname: string;
  is_admin: boolean;
  email: string;
}

const typeDefs = gql`
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
    async user(_: null, args: { id: string }) {
      try {
        const userDoc = await admin
          .firestore()
          .doc(`users/${args.id}`)
          .get();
        const user = userDoc.data() as User | undefined;
        return user || new ValidationError('User id not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  },
  // User: {
  //   async tweets(user) {
  //     try {
  //       const userTweets = await admin
  //         .firestore()
  //         .collection('tweets')
  //         .where('userId', '==', user.id)
  //         .get();
  //       return userTweets.docs.map(tweet => tweet.data()) as Tweet[];
  //     } catch (error) {
  //       throw new ApolloError(error);
  //     }
  //   }
  // },
  // Tweets: {
  //   async user(tweet) {
  //     try {
  //       const tweetAuthor = await admin
  //         .firestore()
  //         .doc(`users/${tweet.userId}`)
  //         .get();
  //       return tweetAuthor.data() as User;
  //     } catch (error) {
  //       throw new ApolloError(error);
  //     }
  //   }
  // }
};

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
