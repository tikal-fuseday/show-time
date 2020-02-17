import { AdminConnection } from '../config';
import { ApolloServer, ApolloError, ValidationError } from 'apollo-server';
import { Item } from '../resources/Item';


export const userItemsResolver = async(user) => {
  try {
    const queryRes = await AdminConnection
      .firestore()
      .collection('items')
      .where('created_by', '==', user.id)
      .limit(1000)
      .get();
      if (queryRes.empty) return new ValidationError('Item id not found');
      return (queryRes.docs.map(item => ({
          id: item.id,
          ...item.data(),
      })) as Item[]);
  } catch (error) {
    throw new ApolloError(error);
  }
}

export const itemResolver = async (_: null, args: Item) => {
    try {
      const queryRes = await AdminConnection
        .firestore()
        .collection('items')
        // .where('email', '==', args.email)
        //.orderBy('score', 'desc').limit(2)
        .get();
        if (queryRes.empty) return new ValidationError('Item id not found');
        return (queryRes.docs.map(item => ({
            id: item.id,
            ...item.data(),
        })) as Item[]);
    } catch (error) {
      throw new ApolloError(error);
    }
  }
