import { AdminConnection } from '../config';
import { ApolloServer, ApolloError, ValidationError } from 'apollo-server';
import { User } from '../resources/User';

export const userResolver = async (_: null, args: { email: string }) => {
    try {
      const queryRes = await AdminConnection
        .firestore()
        .collection('users')
        // .where('email', '==', args.email)
        .orderBy('score', 'desc').limit(2)
        .get();
        if (queryRes.empty) return new ValidationError('User id not found');
        return (queryRes.docs.map(user => ({
            id: user.id,
            ...user.data(),
        })) as User[]);
    } catch (error) {
      throw new ApolloError(error);
    }
  }
