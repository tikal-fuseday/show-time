import ActionTypes from '../ActionTypes';

const InitialState = {
  profile: {
    fullName: 'test one',
    score: 100,
    level: 2,
    tags: [],
    items: []
  },
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default UserReducer;

