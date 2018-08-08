import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import * as api from '../services/api';
import * as reducers from './reducers';
import rootEpic from './epics';
import { SIGN_OUT } from './actions/authActions';

const logger = createLogger({
  predicate: () => __DEV__,
  collapsed: true,
  duration: true,
});


const epicMiddleware = createEpicMiddleware({
  dependencies: {
    ...api,
  },
});

const initialState = {};

const appReducer = combineReducers({
  ...reducers,
});

const rootReducer = (state, action) => {
  let appState = state;

  if (action.type === SIGN_OUT) {
    appState = undefined;
  }

  return appReducer(appState, action);
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      epicMiddleware,
      logger,
    ),
  ),
);

epicMiddleware.run(rootEpic);

export default store;
