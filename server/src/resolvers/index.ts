import {
 userResolver as user,
 userItemsResolver as items
} from './User';

export default {
  Query: {
    user,
  },
  User: {
   items
  }
};
