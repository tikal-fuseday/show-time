import {
 userResolver as user
} from './User';
import { 
 itemResolver as item,
 userItemsResolver as items
} from './Item';

export default {
  Query: {
    user,
    item,
  },
  User: {
   items
  },
};
