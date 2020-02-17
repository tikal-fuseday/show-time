import * as admin from 'firebase-admin';
import serviceAccount from './firebase_config.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://show-time-268509.firebaseio.com"
});

import { ApolloServer, ApolloError, ValidationError, gql, introspectSchema } from 'apollo-server';

interface User {
  id: string;
  fname: string;
  lname: string;
  is_admin: boolean;
  email: string;
}

interface ItemType {
  id: string;
  name: string
}

interface Item {
  id: string;
  title: string;
  description: string;
  type: ItemType;
  likes: Array<string>;
  created_at: Date;
  created_by: string;
  thumbnail: string; 
}

const typeDefs = gql`
  type User {
    id: String
    fname: String
    lname: String
    is_admin: Boolean
    email: String   
  }

  type Item {
    id: String;
    title: String;
    description: String;
    type: ItemType;
    likes: [User];
    created_at: string;
    created_by: User;
    thumbnail: String; 
  }

  type ItemType {
    id: String;
    name: String
  }

  type Query {
    user(email: String!): User
  }
`;

const resolvers = {
  Query: {
    // async tweets() {
    //   const tweets = await admin.firestore()
    //     .collection('tweets')
    //     .get();
    //   return tweets.docs.map(tweet => tweet.data()) as Tweet[];
    // },
    async user(_: null, args: { email: string }) {
      try {
        const queryRes = await admin
          .firestore()
          .collection('users')
          .where('email', '==', args.email)
          .get();
          if (queryRes.empty) return new ValidationError('User id not found');
          return (queryRes.docs.map(user => user.data()) as User[])[0];
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async item (_: null, args: Item) {
      try {
        const queryRes = await admin
          .firestore()
          .collection('users')
          //.where('email', '==', args.email)
          .get();
          if (queryRes.empty) return new ValidationError('Item id not found');
          return (queryRes.docs.map(user => user.data()) as User[])[0];
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
