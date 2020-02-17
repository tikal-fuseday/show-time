import moment from 'moment';

const round = number => Math.round(number * 100) / 100
const MonitorReducerEnhancer = createStore => (
  reducer,
  initialState,
  enhancer,
) => {
  const monitoredReducer = (state, action) => {
    const start = moment.now()
    const newState = reducer(state, action)
    const end = moment.now()
    const diff = round(end - start)
    console.log('reducer process time:', diff)
    return newState;
  };
  return createStore(monitoredReducer, initialState, enhancer)
};

export default MonitorReducerEnhancer;
