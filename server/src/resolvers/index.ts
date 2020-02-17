import { userResolver as user} from './User';
import { itemResolver as item} from './Item';

export default {
  Query: {
    user,
    item,
  }
};
