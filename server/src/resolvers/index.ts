import {
 userResolver as user,
 userItemsResolver as items
} from './User';
import { itemResolver as item} from './Item';

export default {
  Query: {
    user,
  },
  User: {
   items
  },
  item,
};
