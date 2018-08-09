// @flow
import { combineEpics, ofType } from 'redux-observable';
import {
  switchMap, catchError, mergeMap,
} from 'rxjs/operators';
import { of } from 'rxjs';

import { removeItemFromStorage$ } from '../../services/utils/storage';
import * as menuActions from './menuActions';

const getSomeDataEpic = action$ => (
  action$.pipe(
    ofType(menuActions.LOG_OUT),
    switchMap(() => (
      removeItemFromStorage$('token')
    )),
    mergeMap(() => (
      of(menuActions.logOutSuccess())
    )),
    catchError(err => of(menuActions.logOutError(err))),
  )
);

export default combineEpics(
  getSomeDataEpic,
);
