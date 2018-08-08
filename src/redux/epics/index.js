// @flow
/* eslint-disable global-require */
import { combineEpics } from 'redux-observable';

export default combineEpics(
  require('../../modules/Auth/ducks/authEpics').default,
);
