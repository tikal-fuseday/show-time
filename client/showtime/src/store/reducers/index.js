import { combineReducers } from 'redux'
import NewsReducer from './NewsReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  news: NewsReducer,
  profile: ProfileReducer,
});
