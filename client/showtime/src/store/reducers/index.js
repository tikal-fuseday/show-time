import { combineReducers } from 'redux'
import NewsReducer from './NewsReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  news: NewsReducer,
  user: UserReducer,
});
