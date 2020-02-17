import ActionTypes from '../ActionTypes';

const InitialState = {
  profile: null,
};

const PofileReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default PofileReducer;

