import ActionTypes from '../ActionTypes';

const InitialState = {
  news: [],
};

const NewsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_NEWS:
      return { ...state, news: action.news };
    case ActionTypes.SET_NEWS_ITEM:
      return { ...state, news: action.news };
    default:
      return state;
  }
};

export default NewsReducer;
