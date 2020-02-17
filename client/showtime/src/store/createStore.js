import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MonitorReducerEnhancer from './enhancers/MonitorReducer';
import LoggerMiddleware from './middlewares/Logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [LoggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, MonitorReducerEnhancer];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
};