import { AdminConnection } from '../config';
import { ApolloServer, ApolloError, ValidationError } from 'apollo-server';
import { User } from '../resources/User';

interface userArgs {
  limit: number,
  id: string,
  filter: object[],
  email: string,
}
export const userResolver = async (_: null, args: userArgs) => {
  const {
    limit = 1000,
    id,
    filter = [],
    email,
  } = args;

    try {
      if (id) return await _getById(id);
      const queryRes = await AdminConnection
        .firestore()
        .collection('users')
        // .where('email', '==', email)
        .orderBy('score', 'desc')
        .limit(limit)
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

  async function _getById(id:string):Promise<User[]> {
    const queryRes = await AdminConnection
      .firestore()
      .doc(`users/${id}`)
      .get();
    if (!queryRes.exists) throw new ValidationError('User ID not found');
    const user = {
      id: queryRes.id,
      ...queryRes.data()
    } as User;
    return [user];
  }
